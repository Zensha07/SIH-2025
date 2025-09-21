const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/farmer-advisory', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/auth', require('./routes/auth').router);
app.use('/api/farmer', require('./routes/farmer'));
app.use('/api/buyer', require('./routes/buyer'));
app.use('/api/seller', require('./routes/seller'));
app.use('/api/ai', require('./routes/ai'));

// Serve static files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Socket.io for real-time updates
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-room', (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room ${room}`);
  });

  socket.on('stock-update', (data) => {
    socket.to('buyers').emit('stock-changed', data);
    socket.to('farmers').emit('stock-changed', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

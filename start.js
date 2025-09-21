#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🌱 Starting AI Farmer Advisory System...\n');

// Check if MongoDB is running
const checkMongoDB = () => {
  return new Promise((resolve) => {
    const mongod = spawn('mongod', ['--version'], { stdio: 'pipe' });
    mongod.on('close', (code) => {
      resolve(code === 0);
    });
  });
};

// Start the application
const startApp = async () => {
  try {
    console.log('📦 Installing dependencies...');
    const install = spawn('npm', ['install'], { stdio: 'inherit' });
    
    install.on('close', async (code) => {
      if (code === 0) {
        console.log('✅ Dependencies installed successfully!\n');
        
        console.log('🔧 Starting server...');
        const server = spawn('node', ['server.js'], { stdio: 'inherit' });
        
        server.on('close', (code) => {
          console.log(`\n🛑 Server stopped with code ${code}`);
        });
        
        // Handle graceful shutdown
        process.on('SIGINT', () => {
          console.log('\n🛑 Shutting down server...');
          server.kill('SIGINT');
          process.exit(0);
        });
        
      } else {
        console.error('❌ Failed to install dependencies');
        process.exit(1);
      }
    });
    
  } catch (error) {
    console.error('❌ Error starting application:', error);
    process.exit(1);
  }
};

// Display welcome message
console.log(`
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║           🌾 AI Farmer Advisory System 🌾                    ║
║                                                              ║
║  Features:                                                   ║
║  • Voice Assistant in Malayalam                             ║
║  • Image-based Crop Analysis                                ║
║  • Direct Farmer-to-Buyer Marketplace                       ║
║  • Transportation & Machinery Services                      ║
║  • Real-time Stock Updates                                  ║
║                                                              ║
║  Access: http://localhost:3000                              ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
`);

startApp();

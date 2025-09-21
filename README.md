# AI Farmer Advisory System

A comprehensive AI-powered farmer query support and advisory system with voice assistance in Malayalam, image-based problem detection, and direct farmer-to-buyer marketplace.

## Features

### 🤖 AI Assistant
- **Voice Assistant**: Speak in Malayalam and get instant agricultural advice
- **Image Analysis**: Upload crop images for AI-powered disease and pest detection
- **Text Support**: Type queries in Malayalam for quick responses
- **Real-time Translation**: Automatic translation between Malayalam and English

### 👨‍🌾 Farmer Portal
- **Dashboard**: Overview of crops, orders, and statistics
- **Crop Management**: Add, edit, and manage crop listings
- **AI Assistant**: Always-available AI help panel
- **Service Access**: Browse transportation, machinery, and agricultural supplies
- **Order Management**: Track and manage incoming orders

### 🛒 Buyer Portal
- **Browse Crops**: Search and filter available crops from local farmers
- **Direct Purchase**: Buy directly from farmers without middlemen
- **Order Tracking**: Monitor order status and delivery
- **Real-time Stock**: Live updates on crop availability

### 🏪 Seller Portal
- **Service Management**: Add and manage transportation, machinery, pesticides, and insecticides
- **Dashboard**: Overview of services and statistics
- **Availability Control**: Manage service availability and pricing

## Technology Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** for database
- **Socket.io** for real-time updates
- **JWT** for authentication
- **Multer** for file uploads
- **OpenAI API** for AI processing

### Frontend
- **Vanilla JavaScript** with modern ES6+
- **CSS3** with responsive design
- **Font Awesome** for icons
- **Google Fonts** (Poppins)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- OpenAI API key

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-farmer-advisory-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/farmer-advisory
   JWT_SECRET=your_jwt_secret_key_here
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3000
   ```

4. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   ```

5. **Run the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## Usage

### Getting Started

1. **Register**: Create an account with your role (Farmer/Buyer/Seller)
2. **Login**: Access your respective portal
3. **Explore**: Use the AI assistant and browse available features

### For Farmers

1. **Add Crops**: Upload crop details, images, and pricing
2. **AI Assistant**: Get instant advice on crop problems
3. **Manage Orders**: Track and fulfill buyer orders
4. **Access Services**: Find transportation, machinery, and supplies

### For Buyers

1. **Browse Crops**: Search and filter available crops
2. **Place Orders**: Buy directly from farmers
3. **Track Orders**: Monitor delivery status
4. **Support Farmers**: Direct purchase without middlemen

### For Sellers

1. **Add Services**: List transportation, machinery, pesticides, insecticides
2. **Manage Availability**: Control service availability
3. **Connect with Farmers**: Provide agricultural services

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Farmer Routes
- `POST /api/farmer/add-crop` - Add crop for sale
- `GET /api/farmer/my-crops` - Get farmer's crops
- `GET /api/farmer/dashboard` - Get dashboard data
- `GET /api/farmer/services` - Get available services

### Buyer Routes
- `GET /api/buyer/crops` - Get available crops
- `POST /api/buyer/place-order` - Place order
- `GET /api/buyer/my-orders` - Get buyer's orders
- `GET /api/buyer/search` - Search crops

### Seller Routes
- `POST /api/seller/add-service` - Add service
- `GET /api/seller/my-services` - Get seller's services
- `GET /api/seller/dashboard` - Get dashboard data

### AI Routes
- `POST /api/ai/voice-query` - Process voice query
- `POST /api/ai/image-query` - Process image query
- `POST /api/ai/text-query` - Process text query
- `GET /api/ai/history` - Get query history

## Database Schema

### Users
- Personal information (name, email, phone, address)
- Role (farmer/buyer/seller)
- Location coordinates
- Authentication data

### Crops
- Crop details (name, type, quantity, price)
- Farmer information
- Images and descriptions
- Availability status

### Orders
- Buyer and farmer information
- Crop details and quantity
- Order status and delivery information
- Payment tracking

### Services
- Service type (transportation/machinery/pesticides/insecticides)
- Provider information
- Pricing and availability
- Location and specifications

### Queries
- Query type (voice/image/text)
- Content and language
- AI response and confidence
- Category and status

## Real-time Features

- **Stock Updates**: Real-time crop availability updates
- **Order Notifications**: Instant order status updates
- **AI Assistant**: Live voice and image processing
- **Service Availability**: Real-time service status updates

## Security Features

- **JWT Authentication**: Secure user authentication
- **Password Hashing**: Bcrypt password encryption
- **File Upload Security**: Secure image and audio uploads
- **Input Validation**: Server-side input validation
- **CORS Protection**: Cross-origin request security

## Deployment

### Using PM2
```bash
npm install -g pm2
pm2 start server.js --name "farmer-advisory"
pm2 startup
pm2 save
```

### Using Docker
```dockerfile
FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team or create an issue in the repository.

## Future Enhancements

- [ ] Mobile app development
- [ ] Advanced AI models for better crop analysis
- [ ] Weather integration
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] Advanced analytics and reporting
- [ ] IoT device integration
- [ ] Blockchain for supply chain transparency

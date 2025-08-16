# Nexus Business Suite

A comprehensive business management platform built with modern technologies to streamline operations, manage customer relationships, and provide powerful analytics.

## 🚀 Features

### Core Business Management
- **Customer Relationship Management** - Complete CRM solution
- **Financial Management** - Accounting, invoicing, and payment tracking
- **Inventory Management** - Stock tracking and procurement
- **Analytics Dashboard** - Real-time business insights

### Advanced Capabilities
- **Document Management** - Centralized file storage and organization
- **Multi-user Support** - Role-based access control
- **API Integration** - REST API for third-party integrations
- **Reporting Engine** - Customizable business reports

## 🛠️ Technology Stack

### Server (Backend)
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **JWT** - Authentication and authorization
- **Mongoose** - MongoDB object modeling

### Client (Frontend)
- **React 18** - Modern UI library
- **Ant Design** - Professional UI components
- **Redux Toolkit** - State management
- **Vite** - Fast build tool
- **Axios** - HTTP client

## 📦 Installation

### Prerequisites
- Node.js (v20.9.0 or higher)
- MongoDB (local or Atlas)
- npm (v10.2.4 or higher)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd nexus-business-suite
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Configuration**
   - Copy `.env.example` to `.env` in the server directory
   - Update the database connection string
   - Configure other environment variables as needed

5. **Database Setup**
   ```bash
   cd server
   npm run setup
   ```

6. **Start the application**
   
   **Server (Terminal 1):**
   ```bash
   cd server
   npm run dev
   ```
   
   **Client (Terminal 2):**
   ```bash
   cd client
   npm run dev
   ```

## 🔐 Default Login

After setup, use these credentials to access the admin panel:
- **Email:** admin@admin.com
- **Password:** admin123

## 📊 Project Structure

```
nexus-business-suite/
├── server/                 # Backend application
│   ├── src/               # Source code
│   └── package.json       # Server dependencies
├── client/                # Frontend application
│   ├── src/              # React components
│   └── package.json      # Client dependencies
├── documentation/         # Project documentation
└── README.md             # This file
```

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🏗️ Development

### Server Development
- Uses nodemon for auto-restart
- MongoDB for data persistence
- Express middleware for request handling

### Client Development
- Hot module replacement with Vite
- Component-based architecture
- Redux for centralized state management

## 🔧 Configuration

### Database
- MongoDB connection via environment variables
- Automatic schema initialization
- Sample data seeding

### Authentication
- JWT-based authentication
- Role-based access control
- Session management

## 📈 Performance

- Optimized MongoDB queries
- React component memoization
- Lazy loading for better UX
- Compressed assets in production

---

**Built with ❤️ for modern businesses**

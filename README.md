# Nexus Business Suite

> A comprehensive business management platform designed to streamline operations, manage customer relationships, and provide powerful analytics for modern businesses.

## 🎯 What Problem Does It Solve?

Nexus Business Suite eliminates the complexity of managing multiple business tools by providing an all-in-one solution for:
- **Fragmented customer data** → Centralized CRM system
- **Manual financial tracking** → Automated accounting & invoicing
- **Inventory chaos** → Smart stock management with alerts
- **Poor business insights** → Real-time analytics dashboard
- **Team collaboration issues** → Role-based access & project management

## ✨ Key Features

**💼 Business Management**
- Complete CRM with lead tracking & customer communication history
- Financial management with invoicing, payments & general ledger
- Inventory control with barcode scanning & automatic restock alerts
- Project management with task assignment & progress tracking

**📊 Analytics & Reporting**
- Real-time business dashboards with KPI monitoring
- Customizable reports (balance sheets, income statements, sales analytics)
- Data visualization for better decision making

**🔧 Technical Features**
- RESTful API for third-party integrations
- Role-based access control & user management
- Document management system
- Multi-language support

## 🛠️ Tech Stack

**Backend:** Node.js • Express.js • MongoDB • JWT Authentication  
**Frontend:** React 18 • Ant Design • Redux Toolkit • Vite  
**Additional:** OpenAI Integration • AWS S3 • Email Services

## 🚀 Quick Start

### Prerequisites
- Node.js v20.9.0+
- MongoDB (local or Atlas)
- npm v10.2.4+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saiharshith-4502/nexus-business-suite.git
   cd nexus-business-suite
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../client
   npm install
   ```

4. **Configure Environment**
   ```bash
   cd ../server
   # Edit .env file with your configurations
   # DATABASE="mongodb://localhost:27017/nexus-business-suite"
   # JWT_SECRET="your_secret_key"
   ```

5. **Initialize Database**
   ```bash
   npm run setup
   ```

6. **Start Development Servers**
   
   **Backend:**
   ```bash
   cd server && npm run dev
   ```
   
   **Frontend (new terminal):**
   ```bash
   cd client && npm run dev
   ```

🎉 **Access the application at `http://localhost:3000`**

## 🔐 Default Credentials

**Admin Access:**
- Email: `admin@admin.com`
- Password: `admin123`

## 📁 Project Structure

```
nexus-business-suite/
├── 🗂️ server/            # Backend (Node.js + Express + MongoDB)
├── 🎨 client/            # Frontend (React + Ant Design + Redux)
├── 📚 documentation/     # Multi-language docs
├── ⚙️ features/          # Feature specifications
└── 🔧 .github/           # CI/CD workflows
```

## 🔧 Available Scripts

**Server Commands:**
```bash
npm run dev        # Start development server
npm run setup      # Initialize database
npm run reset      # Reset database
npm run upgrade    # Upgrade database schema
```

**Client Commands:**
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## 🚀 Getting Started

This is a private business application. For access or inquiries, please contact the developer directly.

## 📞 Contact & Support

**Developer:** Sai Harshith  
**Email:** saiharshithkaranam@gmail.com  
**GitHub:** [saiharshith-4502](https://github.com/saiharshith-4502)

For business inquiries, feature requests, or technical support, please reach out via email.

---

**© 2024 Nexus Business Suite - Private Application**  
**Developed by [Sai Harshith](https://github.com/saiharshith-4502)**

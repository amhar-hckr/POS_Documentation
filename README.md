
# POS Documentation System

A comprehensive POS (Point of Sale) machine installation and documentation system built with Next.js, featuring a complete database backend for persistent data storage.

## 🚀 Features

- **Installation Checklist**: Guided 22-step POS installation process
- **Verification Workflow**: Cross-check verification with configurable and verified by fields
- **Database Backend**: MongoDB with Mongoose for persistent data storage
- **Reports Dashboard**: Filterable reports by user, date range, and status
- **Real-time Statistics**: Live dashboard with configuration metrics
- **Interactive Documentation**: Hotspot overlays and markdown-based feature explanations
- **Responsive Design**: Dark theme optimized for desktop and mobile

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, MongoDB, Mongoose
- **UI**: Lucide React icons, Custom dark theme, Framer Motion
- **Content**: React Markdown, Interactive hotspots
- **State Management**: React hooks, local component state

## 📋 Prerequisites

- Node.js 18+
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## 🔧 Installation & Setup

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd pos_documentation
npm install
```

### 2. Database Setup

#### Option A: Local MongoDB
```bash
# Install MongoDB locally (Ubuntu/Debian)
sudo apt-get install mongodb

# Start MongoDB service
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

#### Option B: MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string from the "Connect" button

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# MongoDB connection string
# For local MongoDB:
MONGODB_URI=mongodb://localhost:27017/pos_documentation

# For MongoDB Atlas (replace with your connection string):
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pos_documentation?retryWrites=true&w=majority
```

### 4. Run the Application

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

The application will be available at `http://localhost:3000` (or the port shown in the terminal).

## 📊 Database Schema

### InstallationReport Model

```typescript
{
  id: string;              // Unique identifier
  purpose: string;         // 'stock count' | 'showroom' | 'magasale'
  location: string;        // Location code (HO, ML, NG, etc.)
  unitNo: string;          // Unit number
  configuredBy: string;    // Person who configured
  verifiedBy: string;      // Person who verified
  verifiedDate: Date;      // Verification timestamp
  status: string;          // 'completed' | 'pending'
  createdAt: Date;         // Auto-generated
  updatedAt: Date;         // Auto-generated
}
```

## 🔌 API Endpoints

### GET `/api/installation-reports`
Fetch installation reports with optional filtering.

**Query Parameters:**
- `user`: Filter by configuredBy
- `dateFrom`: Filter from date (YYYY-MM-DD)
- `dateTo`: Filter to date (YYYY-MM-DD)

**Response:** Array of installation reports

### POST `/api/installation-reports`
Create a new installation report.

**Request Body:**
```json
{
  "purpose": "showroom",
  "location": "HO",
  "unitNo": "POS001",
  "configuredBy": "John Doe",
  "verifiedBy": "Jane Smith",
  "verifiedDate": "2025-01-20T10:00:00.000Z",
  "status": "completed"
}
```

### GET `/api/installation-reports/users`
Get list of unique users for filtering.

**Response:** Array of user names

## 🎯 Usage

### Installation Process
1. Navigate to `/installation`
2. Complete pre-installation form (purpose, location, unit number)
3. Follow the 22-step guided checklist
4. Fill verification details
5. Submit to save to database and view reports

### Reports Dashboard
1. Navigate to `/reports`
2. View all installation reports
3. Filter by configurator, date range
4. See real-time statistics and metrics

### Documentation Features
1. Navigate to `/functional` for interactive POS feature documentation
2. Use hotspot overlays to explore interface elements
3. Access detailed markdown descriptions

## 🔒 Data Persistence

Unlike browser-based storage, this version uses MongoDB for:
- ✅ Permanent data storage
- ✅ Multi-device access
- ✅ Data backup and recovery
- ✅ Concurrent user support
- ✅ Advanced querying and filtering

## 🚀 Deployment

### Environment Variables for Production

```env
MONGODB_URI=your_production_mongodb_connection_string
NODE_ENV=production
```

### Build Commands

```bash
npm run build
npm start
```

## 📁 Project Structure

```
pos_documentation/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   │   └── installation-reports/ # Database API endpoints
│   ├── installation/             # Installation checklist page
│   ├── reports/                  # Reports dashboard page
│   ├── functional/               # Interactive documentation
│   └── layout.tsx               # Root layout
├── components/                   # Reusable UI components
├── lib/                          # Utility functions and database
│   ├── models/                   # Mongoose schemas
│   └── mongodb.ts               # Database connection
├── public/                       # Static assets
│   ├── description/              # Markdown documentation
│   └── screenshots/              # POS interface images
└── .env.local                   # Environment variables
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Database Connection Issues
- Ensure MongoDB is running (local) or connection string is correct (Atlas)
- Check network connectivity for cloud databases
- Verify database user permissions

### Build Errors
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run build`

### Runtime Errors
- Check browser console for client-side errors
- Check server logs for API errors
- Verify environment variables are loaded correctly

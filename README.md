
# POS Documentation System

A comprehensive POS (Point of Sale) machine installation and documentation system built with Next.js, featuring a complete database backend for persistent data storage.

## 🚀 Features

- **Secure Authentication**: Admin-only access with NextAuth.js
- **Installation Checklist**: Guided 22-step POS installation process
- **Verification Workflow**: Cross-check verification with configurable and verified by fields
- **Database Backend**: MongoDB with Mongoose for persistent data storage
- **Reports Dashboard**: Filterable reports by user, date range, and status
- **Real-time Statistics**: Live dashboard with configuration metrics
- **Interactive Documentation**: Hotspot overlays and markdown-based feature explanations
- **Responsive Design**: Dark theme optimized for desktop and mobile
- **Production Deployment**: Vercel hosting with MongoDB Atlas

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, MongoDB Atlas, Mongoose
- **Authentication**: NextAuth.js with secure credentials
- **Deployment**: Vercel (serverless)
- **UI**: Lucide React icons, Custom dark theme, Framer Motion
- **Content**: React Markdown, Interactive hotspots
- **State Management**: React hooks, local component state

## 📋 Prerequisites

- Node.js 18+
- MongoDB Atlas account (free tier available)
- Vercel account (free tier available)
- npm or yarn

## 🔧 Installation & Setup

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd pos_documentation
npm install
```

### 2. MongoDB Atlas Database Setup

#### Step 1: Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Click **"Try Free"** → Sign up with email
3. Choose **M0 (Free)** cluster tier
4. Select your preferred cloud provider and region

#### Step 2: Create Database Cluster
1. **Create Cluster**: Choose any provider/region → **Create cluster**
2. Wait for cluster creation (usually 5-10 minutes)
3. Cluster name will be auto-generated (e.g., `amhar.mtyc7js.mongodb.net`)

#### Step 3: Create Database User
1. Go to **"Database Access"** in the left sidebar
2. Click **"Add New Database User"**
3. **Authentication Method**: Password
4. **Username**: `amhar` (or your preferred username)
5. **Password**: Choose a strong password 
6. **Built-in Role**: `Read and write any database`
7. Click **"Add User"**

#### Step 4: Configure Network Access
1. Go to **"Network Access"** in the left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"**
4. Enter: `0.0.0.0/0`
5. Click **"Confirm"**

#### Step 5: Get Connection String
1. Go to **"Clusters"** → Click your cluster
2. Click **"Connect"**
3. Choose **"Connect your application"**
4. **Driver**: Node.js
5. **Version**: Latest
6. Copy the connection string

**Example Connection String:**
```
mongodb+srv://username:password@amhar.mtyc7js.mongodb.net/pos_documentation?retryWrites=true&w=majority
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pos_documentation?retryWrites=true&w=majority

# NextAuth.js Configuration
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production

# Admin Credentials (secure these in production)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-admin-password
```

**Required Environment Variables:**
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `NEXTAUTH_SECRET`: Secure random string for JWT signing
- `ADMIN_USERNAME`: Admin login username
- `ADMIN_PASSWORD`: Admin login password

### 4. Local Development

```bash
# Development mode
npm run dev
```

The application will be available at `http://localhost:3000`

## 🚀 Production Deployment (Vercel)

### Step 1: Install Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Or use npx (recommended)
npx vercel --version
```

### Step 2: Login to Vercel

```bash
npx vercel login
```

Follow the browser authentication process.

### Step 3: Deploy to Vercel

```bash
# Navigate to project directory
cd /home/amhar/Development/pos_documentation

# Deploy to production
npx vercel --prod
```

**Deployment Output:**
```
✅ Production: https://posdocumentation-xxxxx-amhars-projects.vercel.app
```

### Step 4: Configure Environment Variables in Vercel

Set these environment variables in your Vercel dashboard:

```bash
# Required for production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pos_documentation?retryWrites=true&w=majority
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production
NEXTAUTH_URL=https://your-app.vercel.app
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-admin-password
```

**Environment Variables Setup:**
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable with **Production** scope
4. Redeploy to apply changes

### Step 5: Redeploy with Environment Variables

```bash
# Redeploy to apply environment variables
npx vercel --prod
```

### Step 6: Verify Deployment

1. Visit your production URL
2. Test the installation form
3. Complete an installation and verify reports appear
4. Check that data persists across sessions

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

### Authentication
1. Navigate to the application URL
2. Login with admin credentials:
   - **Username**: `admin`
   - **Password**: As configured in environment variables

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

Unlike browser-based storage, this version uses MongoDB Atlas for:
- ✅ **Permanent data storage** - Data survives browser restarts
- ✅ **Multi-device access** - Access from any device/browser
- ✅ **Backup & recovery** - Automatic MongoDB Atlas backups
- ✅ **Concurrent users** - Multiple users can access simultaneously
- ✅ **Advanced querying** - Filter by multiple criteria
- ✅ **Scalability** - Handles growing data needs

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
│   │   └── InstallationReport.ts # Database model
│   └── mongodb.ts               # Database connection
├── public/                       # Static assets
│   ├── description/              # Markdown documentation
│   └── screenshots/              # POS interface images
├── .env.local                   # Local environment variables
├── vercel.json                  # Vercel deployment config
└── README.md                    # This file
```

## 🔧 Vercel Configuration

### vercel.json (Optional)
```json
{
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "regions": ["iad1"]
}
```

### Environment Variables in Vercel
- **MONGODB_URI**: Your MongoDB Atlas connection string
- **NODE_ENV**: Automatically set by Vercel

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
- **Local Development**: Ensure MongoDB Atlas network access allows your IP
- **Production**: Check Vercel environment variables are set correctly
- **Connection String**: Verify username, password, and cluster URL
- **Network Access**: Ensure `0.0.0.0/0` is allowed in Atlas

### Vercel Deployment Issues
```bash
# Check deployment logs
npx vercel logs --follow

# Redeploy with force
npx vercel --prod --force

# Check environment variables
npx vercel env ls
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules && npm install

# Check TypeScript errors
npm run build
```

### Runtime Errors
- **Check browser console** for client-side errors
- **Check Vercel function logs** for server-side errors
- **Verify environment variables** are loaded correctly
- **Test API endpoints** directly in browser

### MongoDB Atlas Issues
- **Cluster Status**: Check if cluster is running in Atlas dashboard
- **User Permissions**: Verify database user has read/write access
- **IP Whitelist**: Ensure network access allows Vercel IPs
- **Connection Limits**: Free tier has connection limits

### Common Error Messages
- **"connect ECONNREFUSED"**: Database connection failed
- **"Authentication failed"**: Wrong username/password
- **"IP not allowed"**: Network access restrictions
- **"Collection not found"**: Database name mismatch

## 📞 Support

For issues related to:
- **MongoDB Atlas**: Check [Atlas Documentation](https://docs.mongodb.com/atlas/)
- **Vercel Deployment**: Check [Vercel Documentation](https://vercel.com/docs)
- **Next.js**: Check [Next.js Documentation](https://nextjs.org/docs)

## 🎉 Success Metrics

✅ **Database Setup**: MongoDB Atlas with persistent storage
✅ **Production Deployment**: Vercel with automatic scaling
✅ **Data Persistence**: Reports survive browser restarts
✅ **Multi-user Support**: Concurrent access from multiple devices
✅ **Real-time Updates**: Live dashboard with filtering
✅ **Production Ready**: Optimized for production use

---

**Live Demo**: [POS Documentation System](https://posdocumentation-fdghnehpi-amhars-projects-38396f86.vercel.app)

**Database**: MongoDB Atlas (Cloud)
**Hosting**: Vercel (Serverless)
**Status**: Production Ready 🚀
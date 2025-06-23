# Setup Instructions

## Quick Start Guide

### 1. Repository Setup

```bash
# Create a new repository on GitHub, GitLab, or your preferred platform
git init
git add .
git commit -m "Initial commit: Kirril Mortgages interactive funnel"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

### 2. Local Development

```bash
# Clone your repository
git clone <your-repository-url>
cd kirril-mortgages

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials

# Run database migrations
npm run db:push

# Start development server
npm run dev
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/kirril_mortgages
PGHOST=localhost
PGPORT=5432
PGUSER=your_username
PGPASSWORD=your_password
PGDATABASE=kirril_mortgages

# Application Settings
NODE_ENV=development
PORT=5000
```

### 4. Database Setup

The application uses PostgreSQL with Drizzle ORM. The schema includes:

- **Users table**: Authentication and user profiles
- **Leads table**: Mortgage application submissions
- **Properties table**: Featured investment properties

Run migrations:
```bash
npm run db:push
```

### 5. Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Database operations
npm run db:push      # Push schema changes
npm run db:studio    # Open database browser
```

### 6. Deployment Options

#### Replit (Recommended)
1. Import repository to Replit
2. Database and environment variables configured automatically
3. Click Deploy button

#### Manual Deployment
1. Set up PostgreSQL database
2. Configure production environment variables
3. Build and deploy application

### 7. Features Configuration

The application includes several configurable features:

- **Animation Settings**: Modify parallax sensitivity in hero section
- **Form Validation**: Customize validation rules in shared/schema.ts
- **Styling**: Update colors and themes in tailwind.config.ts
- **Database Schema**: Modify tables in shared/schema.ts

### 8. Testing

```bash
# Run type checking
npm run type-check

# Test database connection
npm run db:check

# Validate schema
npm run db:validate
```

### 9. Project Structure Overview

```
kirril-mortgages/
├── client/              # React frontend
├── server/              # Express backend
├── shared/              # Shared schemas and types
├── README.md            # Project documentation
├── SETUP.md            # This setup guide
└── package.json         # Dependencies and scripts
```

### 10. Next Steps

After setup:
1. Test all mortgage calculator functions
2. Verify lead capture form submission
3. Check property listings display
4. Test responsive design on mobile devices
5. Validate database connections
6. Configure production environment

For additional support, refer to the main README.md file or contact the development team.
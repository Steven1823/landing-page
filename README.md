# Kirril Mortgages - Interactive Mortgage Funnel

A premium mortgage funnel landing page designed for self-employed entrepreneurs, real estate investors, and business owners. Features elegant animations, modern design, and specialized mortgage products that don't require traditional income documentation.

## 🏠 Features

### Interactive Design
- **Mouse-responsive parallax houses** - Realistic architectural backgrounds that move with cursor
- **Smooth animations** - Framer Motion powered transitions and micro-interactions
- **Modern UI components** - Built with shadcn/ui and Tailwind CSS
- **Responsive design** - Optimized for all screen sizes

### Mortgage Products
- **DSCR Loans** - Debt-Service Coverage Ratio financing
- **Bank Statement Loans** - Income verification through bank statements
- **LLC Mortgages** - Business entity financing solutions
- **Fix & Flip Loans** - Short-term investment property financing

### Technical Features
- **PostgreSQL Database** - Persistent storage for leads and user data
- **Lead Capture System** - Comprehensive mortgage application forms
- **Real-time Calculations** - DSCR calculator and financial tools
- **Professional Architecture** - Clean TypeScript codebase

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd kirril-mortgages
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Database connection will be provided automatically in Replit
   # Or set up your own PostgreSQL database and update DATABASE_URL
   ```

4. **Run database migrations**
   ```bash
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and configurations
│   │   └── hooks/          # Custom React hooks
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database operations
│   └── db.ts              # Database connection
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema definitions
└── components.json         # shadcn/ui configuration
```

## 🎨 Design System

### Color Palette
- **Primary**: Navy blue (`#1e3a8a`)
- **Secondary**: Gold (`#f59e0b`)
- **Accent**: Cream (`#fefce8`)
- **Text**: Warm gray (`#6b7280`)

### Typography
- **Headers**: Poppins (Google Fonts)
- **Body**: Inter (system default)

### Animation Principles
- Smooth easing functions
- Staggered animations for visual hierarchy
- Mouse-responsive parallax effects
- Breathing animations for engagement

## 🏗️ Key Components

### Hero Section
- Interactive parallax house backgrounds
- 5 different architectural styles (Colonial, Townhouse, Victorian, Craftsman, Contemporary)
- Mouse-responsive movement system
- Call-to-action with smooth scrolling

### DSCR Calculator
- Real-time calculation engine
- Input validation and formatting
- Visual feedback and results display
- Integration with lead capture

### Lead Capture Form
- Multi-step form with validation
- Support for various loan types
- Database integration
- Success/error handling

### Property Listings
- Investment-focused property showcase
- Detailed property information
- Call-to-action integration
- Responsive grid layout

## 🔧 Configuration

### Database Schema
The application uses Drizzle ORM with PostgreSQL. Key tables include:
- `users` - User authentication and profiles
- `leads` - Mortgage application submissions
- `properties` - Featured property listings

### Environment Variables
```bash
DATABASE_URL=postgresql://...
PGHOST=localhost
PGPORT=5432
PGUSER=postgres
PGPASSWORD=your_password
PGDATABASE=your_database
```

## 📝 API Endpoints

- `POST /api/leads` - Submit mortgage application
- `GET /api/properties` - Fetch property listings
- `GET /api/properties/featured` - Get featured properties
- `POST /api/users` - User registration
- `POST /api/auth/login` - User authentication

## 🚀 Deployment

### Replit Deployment
This project is optimized for Replit Deployments:

1. Push your code to the repository
2. Connect repository to Replit
3. Database and environment variables are configured automatically
4. Deploy with one click

### Manual Deployment
For other platforms:

1. Set up PostgreSQL database
2. Configure environment variables
3. Build the project: `npm run build`
4. Start production server: `npm start`

## 🤝 Contributing

This is a proprietary mortgage funnel application. For contributions or modifications, please contact the development team.

## 📄 License

Copyright © 2025 Kirril Mortgages. All rights reserved.

## 🎯 Target Audience

- Self-employed entrepreneurs
- Real estate investors
- Business owners
- Alternative income borrowers
- Fix and flip investors

## 📞 Support

For technical support or business inquiries, please contact through the application's contact form or reach out to the development team.

---

Built with ❤️ for modern real estate professionals
# GitHub Copilot Instructions for Kirril Mortgages

## Project Overview
Kirril Mortgages is an interactive mortgage funnel application designed for self-employed entrepreneurs, real estate investors, and business owners. The application specializes in DSCR loans, bank statement loans, LLC mortgages, and fix & flip financing.

## Business Context
- **Owner**: Kirril
- **Contact**: kirillrealtor@gmail.com | +1 (571) 276-0986
- **Location**: Washington, DC Metro Area
- **Target Clients**: Self-employed, investors, flippers, CPAs, business owners
- **Specialization**: Non-traditional income verification loans

## Code Style Guidelines

### TypeScript/React Patterns
- Use functional components with hooks
- Implement proper TypeScript typing
- Follow React best practices with proper state management
- Use Zod for schema validation
- Implement proper error handling

### Styling Guidelines
- Use Tailwind CSS for styling
- Follow the established color palette:
  - Primary: Navy blue (#1e3a8a)
  - Secondary: Gold (#f59e0b)
  - Accent: Cream (#fefce8)
  - Text: Warm gray (#6b7280)
- Use shadcn/ui components when possible
- Maintain responsive design principles

### Animation Guidelines
- Use Framer Motion for animations
- Implement smooth, professional transitions
- Follow the established animation patterns
- Ensure animations enhance UX without being distracting

## Key Features to Understand

### DSCR Calculator
- Calculates Debt Service Coverage Ratio
- Formula: Monthly Rental Income / Monthly Debt Service
- Minimum qualifying ratio: 1.25
- Real-time validation and feedback

### Lead Capture System
- Multi-step form with validation
- Supports various loan types and client types
- Integrates with backend storage
- Professional data collection

### Authentication System
- Simple localStorage-based auth
- User welcome messages
- Login/logout functionality
- Session persistence

### Mortgage Products
- DSCR Loans (No income docs)
- Bank Statement Loans (Self-employed)
- LLC Mortgages (Business entities)
- Fix & Flip Loans (Short-term)

## Development Patterns

### File Organization
- Components in `/client/src/components/`
- Pages in `/client/src/pages/`
- Utilities in `/client/src/lib/`
- Shared schemas in `/shared/`
- Server code in `/server/`

### API Patterns
- RESTful endpoints
- Proper error handling
- Zod schema validation
- TypeScript interfaces

### Database Patterns
- In-memory storage for development
- Proper TypeScript interfaces
- CRUD operations
- Sample data initialization

## Business Logic Rules

### DSCR Calculations
- Minimum ratio: 1.25 for qualification
- Input validation for positive numbers
- Clear feedback on qualification status
- Integration with lead capture

### Lead Processing
- Capture all relevant mortgage information
- Validate required fields
- Store with timestamps
- Provide confirmation feedback

### Contact Information
- Always use Kirril's actual contact details
- WhatsApp: +1 (571) 276-0986
- Email: kirillrealtor@gmail.com
- Professional messaging tone

## Common Tasks

### Adding New Mortgage Products
1. Update the loan products array
2. Add to form validation schemas
3. Update UI components
4. Test calculator integration

### Modifying Forms
1. Update Zod schemas first
2. Modify form components
3. Update validation messages
4. Test submission flow

### Styling Updates
1. Follow established color palette
2. Maintain responsive design
3. Test on mobile devices
4. Ensure accessibility

## Testing Guidelines
- Test all form validations
- Verify calculator accuracy
- Check mobile responsiveness
- Validate contact information
- Test authentication flow

## Security Considerations
- Validate all user inputs
- Sanitize form data
- Protect sensitive information
- Use proper error handling

## Performance Guidelines
- Optimize images and assets
- Minimize bundle size
- Use lazy loading where appropriate
- Implement proper caching

## Accessibility Requirements
- Proper ARIA labels
- Keyboard navigation
- Color contrast compliance
- Screen reader compatibility

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness
- Touch interaction support

Remember: This is a professional mortgage application for real business use. All suggestions should maintain the professional tone and mortgage industry standards.
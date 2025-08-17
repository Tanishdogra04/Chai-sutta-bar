# Chai Sutta Bar Website

A modern, responsive website for Chai Sutta Bar with user authentication, online ordering, and complete business sections.

## Features

- **User Authentication**: Login, signup, and logout functionality
- **Online Ordering**: Shopping cart and order management system
- **Complete Navigation**: Home, About Us, Menu, Gallery, Contact Us
- **Responsive Design**: Optimized for all devices
- **Modern UI/UX**: Professional design with smooth animations
- **Video Hero Section**: Khulhad tea making video placeholder

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Context API

## Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Steps

1. **Extract the project files** to your desired directory

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
chai-sutta-bar/
├── public/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Menu.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── AuthModal.tsx
│   │   ├── CartModal.tsx
│   │   └── OrderModal.tsx
│   ├── context/             # React Context providers
│   │   ├── AuthContext.tsx
│   │   └── CartContext.tsx
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Key Features Explained

### Authentication System
- Mock authentication with demo credentials
- Login: `demo@chaisuttabar.com` / `password`
- User session management
- Protected checkout functionality

### Online Ordering
- Add items to cart
- Quantity management
- Order placement with delivery options
- Payment method selection

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interface

## Customization

### Colors
The website uses a warm color palette. Main colors are defined in Tailwind CSS:
- Primary: Amber (amber-600, amber-700, etc.)
- Secondary: Orange tones
- Background: Warm cream (amber-50)

### Images
Replace placeholder images with actual photos:
- Update image URLs in components
- Use high-quality images for best results
- Recommended size: 1200x800px for hero images

### Content
Update text content in respective component files:
- Business information in `Contact.tsx`
- Menu items in `Menu.tsx`
- About us content in `About.tsx`

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Various Platforms
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for deployment

## Backend Integration

This frontend is ready for backend integration. Key integration points:

### API Endpoints Needed
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `POST /api/orders` - Place order
- `GET /api/menu` - Fetch menu items
- `POST /api/contact` - Contact form submission

### Database Schema
Recommended tables:
- `users` (id, name, email, password_hash, created_at)
- `menu_items` (id, name, description, price, category, image_url)
- `orders` (id, user_id, items, total, status, created_at)
- `order_items` (id, order_id, menu_item_id, quantity, price)

## Support

For questions or issues:
- Check the documentation
- Review component code for implementation details
- Ensure all dependencies are properly installed

## License

This project is created for Chai Sutta Bar business use.

---

**Note**: This is a frontend-only implementation with mock backend functionality. For production use, integrate with a proper backend API and database system.
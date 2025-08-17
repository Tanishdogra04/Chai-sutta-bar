# Complete Setup Instructions for Chai Sutta Bar Website

## Quick Start Guide

### 1. Download and Extract
- Download all project files
- Extract to your preferred directory
- Open terminal/command prompt in the project folder

### 2. Install Node.js (if not already installed)
- Visit https://nodejs.org/
- Download and install the LTS version
- Verify installation: `node --version` and `npm --version`

### 3. Install Project Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Open in Browser
- Navigate to `http://localhost:5173`
- The website should load with all features working

## File Structure Overview

```
chai-sutta-bar-website/
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Hero.tsx             # Homepage hero section
│   │   ├── About.tsx            # About us page
│   │   ├── Menu.tsx             # Menu with ordering
│   │   ├── Gallery.tsx          # Image gallery
│   │   ├── Contact.tsx          # Contact form
│   │   ├── Footer.tsx           # Website footer
│   │   ├── AuthModal.tsx        # Login/signup modal
│   │   ├── CartModal.tsx        # Shopping cart
│   │   └── OrderModal.tsx       # Order placement
│   ├── context/
│   │   ├── AuthContext.tsx      # User authentication
│   │   └── CartContext.tsx      # Shopping cart state
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # App entry point
│   └── index.css                # Global styles
├── public/                      # Static assets
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
├── vite.config.ts              # Vite build configuration
└── README.md                    # Documentation
```

## Key Features

### 🔐 Authentication System
- Login/Signup modals
- User session management
- Demo login: `demo@chaisuttabar.com` / `password`

### 🛒 Online Ordering
- Add items to cart
- Quantity management
- Checkout process
- Order placement

### 📱 Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interface

### 🎨 Modern UI/UX
- Smooth animations
- Hover effects
- Professional design
- Warm color scheme

## Customization Guide

### Update Business Information
1. **Contact Details**: Edit `src/components/Contact.tsx`
2. **Footer Info**: Edit `src/components/Footer.tsx`
3. **About Content**: Edit `src/components/About.tsx`

### Add Real Images
1. Replace placeholder URLs in components
2. Add images to `public/` folder
3. Update image paths in components

### Modify Menu Items
1. Edit the `menuItems` array in `src/components/Menu.tsx`
2. Add your actual products with prices
3. Update categories as needed

### Change Colors/Styling
1. Main colors are in Tailwind classes (amber-600, etc.)
2. Global styles in `src/index.css`
3. Component-specific styles in each `.tsx` file

## Production Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
1. **Netlify**: Upload `dist` folder
2. **Vercel**: Connect GitHub repo
3. **Traditional Hosting**: Upload `dist` contents

## Backend Integration

### Required API Endpoints
```
POST /api/auth/login
POST /api/auth/signup
GET /api/menu
POST /api/orders
POST /api/contact
```

### Database Tables Needed
- users
- menu_items
- orders
- order_items

## Troubleshooting

### Common Issues
1. **Port already in use**: Try `npm run dev -- --port 3001`
2. **Dependencies error**: Delete `node_modules` and run `npm install`
3. **Build fails**: Check for TypeScript errors with `npm run lint`

### Getting Help
- Check browser console for errors
- Verify all files are present
- Ensure Node.js version is 16+

## Next Steps

1. **Test all features** in development
2. **Customize content** for your business
3. **Add real images** and videos
4. **Integrate with backend** API
5. **Deploy to production** hosting

---

Your Chai Sutta Bar website is ready to use! 🎉
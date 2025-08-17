# Deployment Guide - Chai Sutta Bar Website

## Production Deployment Options

### Option 1: Netlify (Recommended for beginners)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to https://netlify.com
   - Drag and drop the `dist` folder to Netlify
   - Your site will be live instantly

3. **Custom domain** (optional):
   - Add your custom domain in Netlify settings
   - Update DNS records as instructed

### Option 2: Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Vercel**:
   - Go to https://vercel.com
   - Import your GitHub repository
   - Vercel will auto-detect Vite and deploy

### Option 3: Traditional Web Hosting

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload files**:
   - Upload contents of `dist` folder to your web server
   - Ensure `index.html` is in the root directory

### Option 4: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script** to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

## Backend Integration for Production

### PHP Backend Setup (as requested)

Create these PHP files on your server:

#### 1. Database Configuration (`config/database.php`)
```php
<?php
$host = 'localhost';
$dbname = 'chai_sutta_bar';
$username = 'your_db_username';
$password = 'your_db_password';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
```

#### 2. User Authentication (`api/auth.php`)
```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include '../config/database.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

if ($method === 'POST') {
    $action = $input['action'] ?? '';
    
    if ($action === 'login') {
        $email = $input['email'];
        $password = $input['password'];
        
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch();
        
        if ($user && password_verify($password, $user['password'])) {
            echo json_encode(['success' => true, 'user' => $user]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
        }
    }
    
    if ($action === 'signup') {
        $name = $input['name'];
        $email = $input['email'];
        $password = password_hash($input['password'], PASSWORD_DEFAULT);
        
        $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
        if ($stmt->execute([$name, $email, $password])) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Registration failed']);
        }
    }
}
?>
```

#### 3. Order Management (`api/orders.php`)
```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include '../config/database.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

if ($method === 'POST') {
    $user_id = $input['user_id'];
    $items = json_encode($input['items']);
    $total = $input['total'];
    $delivery_type = $input['delivery_type'];
    $address = $input['address'] ?? '';
    $phone = $input['phone'];
    
    $stmt = $pdo->prepare("INSERT INTO orders (user_id, items, total, delivery_type, address, phone, status) VALUES (?, ?, ?, ?, ?, ?, 'pending')");
    
    if ($stmt->execute([$user_id, $items, $total, $delivery_type, $address, $phone])) {
        $order_id = $pdo->lastInsertId();
        echo json_encode(['success' => true, 'order_id' => $order_id]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Order failed']);
    }
}
?>
```

#### 4. Database Schema (`database/schema.sql`)
```sql
CREATE DATABASE chai_sutta_bar;
USE chai_sutta_bar;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE menu_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(100),
    image_url VARCHAR(500),
    popular BOOLEAN DEFAULT FALSE,
    rating DECIMAL(2,1) DEFAULT 4.0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    items JSON,
    total DECIMAL(10,2) NOT NULL,
    delivery_type ENUM('delivery', 'pickup') DEFAULT 'delivery',
    address TEXT,
    phone VARCHAR(20),
    status ENUM('pending', 'confirmed', 'preparing', 'ready', 'delivered') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert sample menu items
INSERT INTO menu_items (name, description, price, category, image_url, popular, rating) VALUES
('Classic Khulhad Chai', 'Traditional masala chai served in authentic clay cup', 25.00, 'chai', 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg', true, 4.8),
('Ginger Adrak Chai', 'Spicy ginger chai perfect for monsoons', 30.00, 'chai', 'https://images.pexels.com/photos/1475554/pexels-photo-1475554.jpeg', true, 4.7),
('Samosa (2 pcs)', 'Crispy triangular pastry with spiced potato filling', 30.00, 'snacks', 'https://images.pexels.com/photos/14737/pexels-photo.jpg', true, 4.4);
```

### Frontend API Integration

Update the React context files to use real API endpoints:

#### Update `src/context/AuthContext.tsx`:
```typescript
const login = async (email: string, password: string): Promise<boolean> => {
  setIsLoading(true);
  try {
    const response = await fetch('/api/auth.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'login', email, password })
    });
    const data = await response.json();
    
    if (data.success) {
      setUser(data.user);
      return true;
    }
    return false;
  } catch (error) {
    return false;
  } finally {
    setIsLoading(false);
  }
};
```

## Environment Configuration

### Production Environment Variables
Create `.env.production`:
```
VITE_API_URL=https://yourdomain.com/api
VITE_APP_NAME=Chai Sutta Bar
```

### Development vs Production
- Development: Uses mock data
- Production: Connects to real PHP backend

## SSL Certificate

For production deployment:
1. **Free SSL**: Use Let's Encrypt or Cloudflare
2. **Hosting SSL**: Most hosting providers offer free SSL
3. **Custom SSL**: Purchase from certificate authority

## Performance Optimization

### Before Deployment:
1. **Optimize images**: Compress all images
2. **Minify code**: Build process handles this
3. **Enable caching**: Configure server caching headers
4. **CDN**: Use Cloudflare or similar for global delivery

## Monitoring & Analytics

### Add Google Analytics:
1. Create GA4 property
2. Add tracking code to `index.html`
3. Monitor user behavior and conversions

### Error Monitoring:
- Use Sentry for error tracking
- Monitor API response times
- Set up uptime monitoring

## Security Considerations

### Frontend Security:
- Always validate user inputs
- Use HTTPS in production
- Implement proper CORS headers

### Backend Security:
- Use prepared statements (already implemented)
- Validate and sanitize all inputs
- Implement rate limiting
- Use secure session management

---

Your Chai Sutta Bar website is now ready for production deployment! 🚀
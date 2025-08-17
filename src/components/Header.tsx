import React from 'react';
import { User, ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  onAuthClick: () => void;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, setCurrentSection, onAuthClick, onCartClick }) => {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 bg-amber-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-amber-100">
              Chai Sutta Bar
            </h1>
            <p className="text-xs text-amber-200">Authentic Indian Tea Experience</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-amber-200 ${
                  currentSection === item.id 
                    ? 'text-amber-200 border-b-2 border-amber-200' 
                    : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-white hover:text-amber-200 transition-colors"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm">Welcome, {user.name}</span>
                <button
                  onClick={logout}
                  className="bg-amber-700 px-4 py-2 rounded-md text-sm hover:bg-amber-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="bg-amber-700 px-4 py-2 rounded-md text-sm hover:bg-amber-600 transition-colors flex items-center space-x-2"
              >
                <User size={16} />
                <span>Login</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-amber-200 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-amber-800 border-t border-amber-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                  currentSection === item.id 
                    ? 'text-amber-200 bg-amber-700' 
                    : 'text-white hover:text-amber-200 hover:bg-amber-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-4 border-t border-amber-700 flex items-center justify-between">
              <button
                onClick={() => {
                  onCartClick();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 px-3 py-2 text-white hover:text-amber-200 transition-colors"
              >
                <ShoppingCart size={20} />
                <span>Cart ({totalItems})</span>
              </button>
              
              {user ? (
                <button
                  onClick={logout}
                  className="bg-amber-700 px-4 py-2 rounded-md text-sm hover:bg-amber-600 transition-colors"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    onAuthClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-amber-700 px-4 py-2 rounded-md text-sm hover:bg-amber-600 transition-colors flex items-center space-x-2"
                >
                  <User size={16} />
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
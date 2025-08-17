import React, { useState, useEffect } from 'react';
import { User, ShoppingCart, Menu as MenuIcon, X, Heart, MapPin, Phone, Mail, Clock, Star, Play } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import CartModal from './components/CartModal';
import OrderModal from './components/OrderModal';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const sections = {
    home: <Hero />,
    about: <About />,
    menu: <Menu onOrderClick={() => setIsOrderModalOpen(true)} />,
    gallery: <Gallery />,
    contact: <Contact />
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-amber-50">
          <Header 
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            onAuthClick={() => setIsAuthModalOpen(true)}
            onCartClick={() => setIsCartModalOpen(true)}
          />
          
          <main className="pt-20">
            {sections[currentSection as keyof typeof sections]}
          </main>
          
          <Footer />
          
          <AuthModal 
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
          />
          
          <CartModal 
            isOpen={isCartModalOpen}
            onClose={() => setIsCartModalOpen(false)}
            onCheckout={() => {
              setIsCartModalOpen(false);
              setIsOrderModalOpen(true);
            }}
          />
          
          <OrderModal 
            isOpen={isOrderModalOpen}
            onClose={() => setIsOrderModalOpen(false)}
          />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
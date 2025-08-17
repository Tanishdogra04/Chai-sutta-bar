import React, { useState } from 'react';
import { Plus, Heart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface MenuItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular: boolean;
  rating: number;
}

interface MenuProps {
  onOrderClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ onOrderClick }) => {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const menuItems: MenuItemType[] = [
    {
      id: '1',
      name: 'Classic Khulhad Chai',
      description: 'Traditional masala chai served in authentic clay cup',
      price: 25,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      category: 'chai',
      popular: true,
      rating: 4.8
    },
    {
      id: '2',
      name: 'Ginger Adrak Chai',
      description: 'Spicy ginger chai perfect for monsoons',
      price: 30,
      image: 'https://images.pexels.com/photos/1475554/pexels-photo-1475554.jpeg',
      category: 'chai',
      popular: true,
      rating: 4.7
    },
    {
      id: '3',
      name: 'Cardamom Elaichi Chai',
      description: 'Aromatic cardamom infused premium chai',
      price: 35,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      category: 'chai',
      popular: false,
      rating: 4.6
    },
    {
      id: '4',
      name: 'Kulhad Coffee',
      description: 'Rich filter coffee in traditional clay cup',
      price: 40,
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
      category: 'coffee',
      popular: false,
      rating: 4.5
    },
    {
      id: '5',
      name: 'Samosa (2 pcs)',
      description: 'Crispy triangular pastry with spiced potato filling',
      price: 30,
      image: 'https://images.pexels.com/photos/14737/pexels-photo.jpg',
      category: 'snacks',
      popular: true,
      rating: 4.4
    },
    {
      id: '6',
      name: 'Aloo Tikki',
      description: 'Crispy potato patties with chutneys',
      price: 35,
      image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
      category: 'snacks',
      popular: false,
      rating: 4.3
    },
    {
      id: '7',
      name: 'Bread Pakora',
      description: 'Deep-fried bread slices with spiced filling',
      price: 25,
      image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
      category: 'snacks',
      popular: false,
      rating: 4.2
    },
    {
      id: '8',
      name: 'Special Kulhad Lassi',
      description: 'Creamy yogurt drink served in clay cup',
      price: 45,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      category: 'beverages',
      popular: true,
      rating: 4.9
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'chai', name: 'Chai' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const handleAddToCart = (item: MenuItemType) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
  };

  return (
    <div id="menu" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our authentic collection of teas, snacks, and beverages
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-red-50 transition-colors"
                >
                  <Heart 
                    size={20} 
                    className={favorites.has(item.id) ? 'text-red-500 fill-current' : 'text-gray-400'} 
                  />
                </button>
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-amber-600">
                    ₹{item.price}
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <Plus size={16} />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-amber-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">
            Can't decide? Try our combo deals!
          </h3>
          <p className="text-gray-600 mb-6">
            Get the best of both worlds with our specially curated combos
          </p>
          <button
            onClick={onOrderClick}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            View Combos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
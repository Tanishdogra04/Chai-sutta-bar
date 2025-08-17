import React, { useState } from 'react';
import { X, Coffee, Users, MapPin, Award } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      title: 'Authentic Khulhad Chai',
      category: 'drinks'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1475554/pexels-photo-1475554.jpeg',
      title: 'Traditional Tea Making',
      category: 'process'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
      title: 'Cozy Interior',
      category: 'ambiance'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/14737/pexels-photo.jpg',
      title: 'Fresh Snacks',
      category: 'food'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
      title: 'Happy Customers',
      category: 'customers'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
      title: 'Masala Chai',
      category: 'drinks'
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/1475554/pexels-photo-1475554.jpeg',
      title: 'Tea Leaves',
      category: 'process'
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
      title: 'Outdoor Seating',
      category: 'ambiance'
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/14737/pexels-photo.jpg',
      title: 'Street Food',
      category: 'food'
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: null },
    { id: 'drinks', name: 'Drinks', icon: Coffee },
    { id: 'food', name: 'Food', icon: null },
    { id: 'ambiance', name: 'Ambiance', icon: MapPin },
    { id: 'process', name: 'Process', icon: Award },
    { id: 'customers', name: 'Customers', icon: Users }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the authentic atmosphere and delicious offerings at Chai Sutta Bar
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-amber-800 hover:bg-amber-100'
                }`}
              >
                {Icon && <Icon size={16} />}
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm text-amber-200 capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-amber-200 transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">
            Visit Our Store
          </h3>
          <p className="text-gray-600 mb-6">
            Experience the warmth and authentic taste of our chai in person
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4">
              <MapPin size={24} className="text-amber-600 mx-auto mb-2" />
              <h4 className="font-semibold text-amber-900 mb-1">Location</h4>
              <p className="text-sm text-gray-600">Multiple outlets across the city</p>
            </div>
            <div className="p-4">
              <Coffee size={24} className="text-amber-600 mx-auto mb-2" />
              <h4 className="font-semibold text-amber-900 mb-1">Fresh Daily</h4>
              <p className="text-sm text-gray-600">Made fresh every morning</p>
            </div>
            <div className="p-4">
              <Users size={24} className="text-amber-600 mx-auto mb-2" />
              <h4 className="font-semibold text-amber-900 mb-1">Community</h4>
              <p className="text-sm text-gray-600">Join our chai-loving family</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
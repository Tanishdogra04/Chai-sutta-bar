import React from 'react';
import { Play, Coffee, Heart, Star } from 'lucide-react';



const Hero: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Video Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-amber-900 via-amber-800 to-orange-800 overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-opacity-30 transition-all cursor-pointer">
                <Play size={32} className="text-white ml-1" />
              </div>
              <p className="text-white text-sm">Watch Khulhad Tea Making Process</p>
            </div>
          </div>
        </div>
       <div className="relative h-[70vh] bg-black overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-80"
  >
    <source src="/Kulhad making.mp4" type="video/mp4" />
  </video>

  {/* Optional Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-30"></div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
    <div className="text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Authentic
        <span className="block text-amber-200">Chai Experience</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-2xl">
        Savor the traditional taste of India with our handcrafted khulhad chai, 
        made with love and served with warmth.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-amber-600 hover:bg-amber-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
          Order Now
        </button>
       <a 
  href="#menu"
  className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
>
  Explore Menu
</a>

      </div>
    </div>
  </div>
</div>
</div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Why Choose Chai Sutta Bar?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the authentic taste of India with every sip
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Authentic Khulhad</h3>
              <p className="text-gray-600">
                Traditional clay cups that enhance the flavor and aroma of our premium chai
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Made with Love</h3>
              <p className="text-gray-600">
                Every cup is crafted with care using traditional recipes passed down through generations
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Finest tea leaves and spices sourced directly from the gardens of India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-200 mb-2">50K+</div>
              <div className="text-amber-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-200 mb-2">25+</div>
              <div className="text-amber-100">Varieties of Chai</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-200 mb-2">10+</div>
              <div className="text-amber-100">Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-200 mb-2">5★</div>
              <div className="text-amber-100">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
import React from 'react';
import { Coffee, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee size={24} className="text-amber-200" />
              <h3 className="text-xl font-bold">Chai Sutta Bar</h3>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed">
              Authentic Indian chai experience served in traditional khulhad cups. 
              Bringing you the true taste of India since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <span className="text-sm">@</span>
              </a>
              <a href="#" className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <span className="text-sm">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <span className="text-sm">yt</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-200">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Franchise</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-200">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Online Ordering</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Home Delivery</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Catering Services</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Corporate Orders</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Event Planning</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-200">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-amber-200 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-amber-100 text-sm">123 MG Road</p>
                  <p className="text-amber-100 text-sm">Central Delhi, 110001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-amber-200 flex-shrink-0" />
                <p className="text-amber-100 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-amber-200 flex-shrink-0" />
                <p className="text-amber-100 text-sm">hello@chaisuttabar.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={16} className="text-amber-200 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-amber-100 text-sm">Mon - Sun</p>
                  <p className="text-amber-100 text-sm">8:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-amber-800 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-amber-200">Stay Updated</h4>
              <p className="text-amber-100 text-sm">Subscribe to get special offers, new menu items, and more!</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
              <button className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-amber-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-amber-100">
              <span>© 2025 Chai Sutta Bar. All rights reserved.</span>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <div className="flex items-center space-x-2 text-amber-100 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
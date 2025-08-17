import React from 'react';
import { Coffee, Users, Award, Leaf } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            About Chai Sutta Bar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born from a passion for authentic Indian chai, we bring you the true taste of India 
            in every khulhad, crafted with traditional recipes and served with modern hospitality.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-amber-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Started in 2015 with a simple dream to share the authentic taste of Indian chai 
              with the world. Our founders, passionate about preserving traditional brewing methods, 
              traveled across India to learn from chai masters and collect time-tested recipes.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Today, we serve over 50,000 happy customers with the same dedication to quality 
              and authenticity that started our journey. Every khulhad tells a story, every sip 
              connects you to India's rich tea culture.
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">2015</div>
                <div className="text-sm text-gray-500">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">50K+</div>
                <div className="text-sm text-gray-500">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">10+</div>
                <div className="text-sm text-gray-500">Locations</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 h-96">
              <div className="text-center h-full flex items-center justify-center">
                <div>
                  <Coffee size={64} className="text-amber-600 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-amber-900 mb-2">Traditional Brewing</h4>
                  <p className="text-gray-600">Authentic methods passed down through generations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">Authenticity</h4>
              <p className="text-gray-600">
                True to traditional recipes and brewing methods
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">Quality</h4>
              <p className="text-gray-600">
                Premium ingredients sourced from the finest gardens
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">Community</h4>
              <p className="text-gray-600">
                Building connections over shared love for chai
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">Excellence</h4>
              <p className="text-gray-600">
                Committed to delivering the best chai experience
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-amber-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-amber-900 mb-6">Our Mission</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            To preserve and share India's rich chai culture with the world, one khulhad at a time. 
            We believe that chai is more than just a beverage – it's a moment of connection, 
            a pause in the busy day, and a bridge between tradition and modernity.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-amber-900 mb-2">Preserve Tradition</h4>
              <p className="text-gray-600 text-sm">
                Keep authentic chai brewing methods alive for future generations
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-amber-900 mb-2">Spread Culture</h4>
              <p className="text-gray-600 text-sm">
                Share the warmth and hospitality of Indian chai culture globally
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-amber-900 mb-2">Create Moments</h4>
              <p className="text-gray-600 text-sm">
                Provide a space for connection, conversation, and community
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
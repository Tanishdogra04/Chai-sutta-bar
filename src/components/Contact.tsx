import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitMessage('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const locations = [
    {
      id: 1,
      name: 'Chai Sutta Bar - Central',
      address: '123 MG Road, Central Delhi',
      phone: '+91 98765 43210',
      hours: '8:00 AM - 11:00 PM'
    },
    {
      id: 2,
      name: 'Chai Sutta Bar - South',
      address: '456 Khan Market, South Delhi',
      phone: '+91 98765 43211',
      hours: '7:00 AM - 12:00 AM'
    },
    {
      id: 3,
      name: 'Chai Sutta Bar - West',
      address: '789 Linking Road, Mumbai',
      phone: '+91 98765 43212',
      hours: '8:00 AM - 11:30 PM'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. 
            Get in touch with us through any of the following ways.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-sm text-gray-500">Mon-Sun: 8AM-11PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">Email</h4>
                  <p className="text-gray-600">hello@chaisuttabar.com</p>
                  <p className="text-sm text-gray-500">We'll reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-sm text-gray-500">Quick support available</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">Address</h4>
                  <p className="text-gray-600">123 MG Road, Central Delhi</p>
                  <p className="text-sm text-gray-500">Main Branch</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold text-amber-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                  f
                </a>
                <a href="#" className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                  @
                </a>
                <a href="#" className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                  in
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Send us a Message</h3>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-amber-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-amber-900 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Complaint</option>
                      <option value="franchise">Franchise Opportunity</option>
                      <option value="catering">Catering Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-amber-900 text-center mb-8">Our Locations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div key={location.id} className="bg-white border border-amber-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-amber-900 mb-4">{location.name}</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin size={16} className="text-amber-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{location.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-amber-600 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{location.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock size={16} className="text-amber-600 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{location.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
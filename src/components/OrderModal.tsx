import React, { useState } from 'react';
import { X, MapPin, Clock, CreditCard, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const [orderData, setOrderData] = useState({
    deliveryType: 'delivery',
    address: '',
    phone: '',
    paymentMethod: 'online',
    specialInstructions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const deliveryFee = orderData.deliveryType === 'delivery' ? 20 : 0;
  const finalTotal = total + deliveryFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setOrderPlaced(true);
    clearCart();
    setIsSubmitting(false);
  };

  const handleClose = () => {
    setOrderPlaced(false);
    setOrderData({
      deliveryType: 'delivery',
      address: '',
      phone: '',
      paymentMethod: 'online',
      specialInstructions: ''
    });
    onClose();
  };

  if (orderPlaced) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-green-600 mb-2">Order Placed!</h2>
          <p className="text-gray-600 mb-4">
            Your order has been successfully placed. You will receive a confirmation shortly.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Order ID: #CSB{Date.now().toString().slice(-6)}
          </p>
          <button
            onClick={handleClose}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-amber-900">Complete Your Order</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Delivery Type */}
          <div>
            <h3 className="text-lg font-semibold text-amber-900 mb-3">Delivery Option</h3>
            <div className="grid grid-cols-2 gap-4">
              <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                orderData.deliveryType === 'delivery' 
                  ? 'border-amber-500 bg-amber-50' 
                  : 'border-gray-200 hover:border-amber-300'
              }`}>
                <input
                  type="radio"
                  name="deliveryType"
                  value="delivery"
                  checked={orderData.deliveryType === 'delivery'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="flex items-center space-x-3">
                  <Truck size={20} className="text-amber-600" />
                  <div>
                    <div className="font-medium text-amber-900">Home Delivery</div>
                    <div className="text-sm text-gray-600">₹20 delivery fee</div>
                  </div>
                </div>
              </label>

              <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                orderData.deliveryType === 'pickup' 
                  ? 'border-amber-500 bg-amber-50' 
                  : 'border-gray-200 hover:border-amber-300'
              }`}>
                <input
                  type="radio"
                  name="deliveryType"
                  value="pickup"
                  checked={orderData.deliveryType === 'pickup'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-amber-600" />
                  <div>
                    <div className="font-medium text-amber-900">Store Pickup</div>
                    <div className="text-sm text-gray-600">Free pickup</div>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-amber-900 mb-3">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-amber-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={orderData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={user?.email || ''}
                  disabled
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          {orderData.deliveryType === 'delivery' && (
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-3">Delivery Address</h3>
              <textarea
                name="address"
                value={orderData.address}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                placeholder="Enter your complete delivery address..."
              ></textarea>
            </div>
          )}

          {/* Payment Method */}
          <div>
            <h3 className="text-lg font-semibold text-amber-900 mb-3">Payment Method</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                orderData.paymentMethod === 'online' 
                  ? 'border-amber-500 bg-amber-50' 
                  : 'border-gray-200 hover:border-amber-300'
              }`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="online"
                  checked={orderData.paymentMethod === 'online'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="flex items-center space-x-3">
                  <CreditCard size={20} className="text-amber-600" />
                  <div>
                    <div className="font-medium text-amber-900">Online Payment</div>
                    <div className="text-sm text-gray-600">Card/UPI/Net Banking</div>
                  </div>
                </div>
              </label>

              <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                orderData.paymentMethod === 'cod' 
                  ? 'border-amber-500 bg-amber-50' 
                  : 'border-gray-200 hover:border-amber-300'
              }`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={orderData.paymentMethod === 'cod'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-amber-600" />
                  <div>
                    <div className="font-medium text-amber-900">Cash on Delivery</div>
                    <div className="text-sm text-gray-600">Pay when you receive</div>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Special Instructions */}
          <div>
            <h3 className="text-lg font-semibold text-amber-900 mb-3">Special Instructions</h3>
            <textarea
              name="specialInstructions"
              value={orderData.specialInstructions}
              onChange={handleChange}
              rows={2}
              className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
              placeholder="Any special requests or instructions..."
            ></textarea>
          </div>

          {/* Order Summary */}
          <div className="bg-amber-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-amber-900 mb-3">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal ({items.length} items)</span>
                <span>₹{total}</span>
              </div>
              {deliveryFee > 0 && (
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>
              )}
              <div className="flex justify-between font-semibold text-lg text-amber-900 pt-2 border-t border-amber-200">
                <span>Total</span>
                <span>₹{finalTotal}</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white px-6 py-4 rounded-lg font-semibold transition-colors"
          >
            {isSubmitting ? 'Processing Order...' : `Place Order - ₹${finalTotal}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
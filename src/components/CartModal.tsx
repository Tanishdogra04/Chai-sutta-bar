import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, onCheckout }) => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  const { user } = useAuth();

  if (!isOpen) return null;

  const handleCheckout = () => {
    if (!user) {
      alert('Please login to proceed with checkout');
      return;
    }
    if (items.length === 0) {
      alert('Your cart is empty');
      return;
    }
    onCheckout();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <ShoppingBag size={24} className="text-amber-600" />
            <h2 className="text-2xl font-bold text-amber-900">Your Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <ShoppingBag size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 text-sm">Add some delicious items from our menu!</p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-amber-900 truncate">{item.name}</h4>
                    <p className="text-amber-600 font-medium">₹{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-amber-200 hover:bg-amber-300 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Minus size={16} className="text-amber-700" />
                    </button>
                    <span className="w-8 text-center font-medium text-amber-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-amber-200 hover:bg-amber-300 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Plus size={16} className="text-amber-700" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-amber-200 pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-amber-900">Total:</span>
                <span className="text-2xl font-bold text-amber-600">₹{total}</span>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={clearCart}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  Checkout
                </button>
              </div>

              {!user && (
                <p className="text-xs text-gray-500 text-center mt-2">
                  Please login to proceed with checkout
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
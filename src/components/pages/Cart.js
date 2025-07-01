import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = React.useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });
  const navigate = useNavigate();

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0);
  };

  const checkout = () => {
    // Here you would typically make an API call to process the order
    alert('Thank you for your purchase! Your order has been placed.');
    setCartItems([]);
    localStorage.removeItem('cartItems');
    navigate('/shop');
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Shopping Cart</h2>
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <button
            onClick={() => navigate('/shop')}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-red-500 mb-6">Shopping Cart</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-3 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow p-6">
              <div className="flex items-start gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-red-500">{item.name}</h3>
                  <p className="text-red-500">{item.brand}</p>
                  <p className="mt-2 text-red-500">{item.price}</p>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-4 text-red-500 hover:text-red-600"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold text-red-500 mb-4">Cart Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={checkout}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

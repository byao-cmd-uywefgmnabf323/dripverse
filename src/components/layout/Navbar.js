          import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [showAddPost, setShowAddPost] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const getCartItemCount = () => {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems).length : 0;
  };

  const navigation = [
    { name: 'Profile', href: '/profile' },
    { name: 'Shop', href: '/shop' },
    { name: 'Feed', href: '/feed' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'Map', href: '/map' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-red-600">
                WuShu
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive(item.href) ? 'text-red-600' : 'text-gray-300 hover:text-red-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link to="/cart" className="relative p-1 rounded-full text-red-400 hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mr-4">
              <span className="sr-only">View cart</span>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {getCartItemCount()}
              </span>
            </Link>
            <button className="p-1 rounded-full text-primary-400 hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500">
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            {/* Add Post Icon */}
            <button
              className="ml-3 p-1 rounded-full text-green-400 hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={() => setShowAddPost(true)}
            >
              <span className="sr-only">Add Post</span>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            {/* Add Post Modal */}
            {showAddPost && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-xl p-8 w-full max-w-md mx-4 relative">
                  <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowAddPost(false)}
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h2 className="text-xl font-bold mb-4 text-black">Create a Post</h2>
                  <form className="flex flex-col gap-4">
                    <input type="file" accept="image/*" className="border rounded p-2" />
                    <textarea
                      className="border rounded p-2"
                      placeholder="Write a caption..."
                      rows={3}
                    />
                    <button
                      type="submit"
                      className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    >
                      Post
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <React.Fragment key={item.name}>
              <Link
                to={item.href}
                className={`block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium ${
                  isActive(item.href) ? 'text-red-600' : 'text-gray-500 hover:text-red-600'
                }`}
              >
                {item.name}
              </Link>
              {item.name === 'Shop' && (
                <Link
                  to="/cart"
                  className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-red-600"
                >
                  Cart ({getCartItemCount()})
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

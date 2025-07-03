import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-red-500 text-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div>
            <h3 className="text-lg font-semibold mb-8">About WuShu</h3>
            <p className="text-white">
              Connect with students across the globe, share your style, and discover the latest campus fashion trends.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-8">Quick Links</h3>
            <ul className="space-y-6">
              <li><Link to="/about" className="text-white hover:text-red-200">About Us</Link></li>
              <li><Link to="/contact" className="text-white hover:text-red-200">Contact</Link></li>
              <li><Link to="/privacy" className="text-white hover:text-red-200">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white hover:text-red-200">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-8">Social</h3>
            <ul className="space-y-6">
              <li><button type="button" className="text-white hover:text-red-200">Instagram</button></li>
              <li><button type="button" className="text-white hover:text-red-200">Twitter</button></li>
              <li><button type="button" className="text-white hover:text-red-200">Facebook</button></li>
              <li><button type="button" className="text-white hover:text-red-200">YouTube</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-8">Newsletter</h3>
            <p className="text-white mb-8">Stay updated with the latest fashion drops and campus trends.</p>
            <div className="flex gap-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-4 rounded-lg bg-red-600 text-white"
              />
              <button className="px-8 py-4 bg-red-700 rounded-lg hover:bg-red-800 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-32 pt-16 border-t border-red-600 text-center text-white">
          <p>&copy; {new Date().getFullYear()} WuShu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

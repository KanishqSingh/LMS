import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full mt-10 sticky">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 border-b border-white/20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-32 justify-between">
          
          {/* Logo and About */}
          <div className="flex-1">
            <img src={assets.logo_dark} alt="logo" className="w-36 mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa recusandae perspiciatis autem necessitatibus repellendus modi maiores.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h2>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest news and articles delivered directly to your inbox.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold text-sm transition">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      <p className="text-center text-gray-500 text-xs py-6">
        © 2025 All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

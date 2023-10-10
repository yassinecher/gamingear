// components/Header.js

import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-amazon-blue text-white p-4">
      <div className="container mx-auto flex text-yellow-300 flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold text-amazon-yellow">
          <a href="/">Amazon</a>
        </div>

        {/* Search Bar */}
        <div className="flex-grow flex items-center bg-white rounded-full max-w-md md:max-w-xl px-2 py-1">
          <input
            type="text"
            placeholder="Search"
            className="py-1 px-2 outline-none w-full"
          />
          <button className="text-black hover:text-gray-600">Search</button>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-yellow-300 hover:underline">
            Hello, Sign in
          </a>
          <a href="#" className="text-yellow-300 hover:underline">
            Orders
          </a>
          <a href="#" className="text-yellow-300 hover:underline">
            Cart
          </a>
        </div>
      </div>
    </header>
  );
}

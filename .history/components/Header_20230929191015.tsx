import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-amazon-yellow">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Amazon Logo */}
          <img
            src="/images/logo.png" // Replace with your logo URL
            alt="Amazon Logo"
            className="w-32"
          />

          {/* Search Bar */}
          <div className="relative flex-grow mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 rounded-full outline-none"
            />
            <button className="absolute right-0 top-0 bottom-0 py-2 px-4 rounded-full bg-amazon-dark-yellow text-black">
              Search
            </button>
          </div>

          {/* Account and Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white w-6 h-6 rounded-full text-xs flex items-center justify-center">
                0
              </span>
              <i className="fas fa-shopping-cart text-2xl text-black"></i>
            </div>
            <div className="text-white cursor-pointer hover:underline">
              Hello, Sign in
            </div>
            <div className="text-white cursor-pointer hover:underline">
              Orders
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      {isMenuOpen && (
        <nav className="bg-amazon-dark-yellow text-black">
          <ul className="container mx-auto p-4 flex space-x-4">
            <li>
              <a href="#" className="hover:text-amazon-yellow">
                Category 1
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amazon-yellow">
                Category 2
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amazon-yellow">
                Category 3
              </a>
            </li>
            {/* Add more categories as needed */}
          </ul>
        </nav>
      )}
    </header>
  );
}

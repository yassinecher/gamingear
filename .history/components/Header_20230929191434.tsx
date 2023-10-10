import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Amazon Logo */}
          <img
            src="/amazon-logo.png" // Replace with your logo URL
            alt="Amazon Logo"
            className="w-32"
          />

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              className="text-black text-2xl"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </div>

          {/* Search Bar */}
          <div className="md:flex-grow mx-4 hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 rounded-full outline-none"
            />
          </div>

          {/* Account and Cart (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-4">
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="bg-amazon-dark-yellow text-black">
          <ul className="container mx-auto p-4 flex flex-col space-y-4">
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

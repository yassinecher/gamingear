import React, { useState } from 'react';
import './Header.css'; // Import a CSS file for your header styles

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Your logo or brand name can go here */}
        <div className="text-xl font-bold relative">
          <img src="/images/logo (2).png" className='max-w-xs w-40' alt="" />
          <div className="animated-circle">
            {/* Animated dots go here */}
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        
        {/* Mobile Menu Button (Hamburger Icon) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Your mobile menu button icon */}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Services
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

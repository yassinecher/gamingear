import React, { useEffect, useState } from 'react';
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
        <div className="text-xl font-bold relative logo-container">
          <div className="image-container">
            <div className="rounded-full border-7 border-dashed border-white border-opacity-50 p-2">
          
                     <video
                autoPlay
                muted // Mute the video to allow autoplay
                loop
                controls={false}
                className="max-w-md  w- rounded-full" // Adjust the size as needed
                id="headerVideo" // Give the video element an ID
           
             
          >    <img
          src="/images/logo (3).png"
          className="max-w-xs w-16 rounded-full"
          alt=""
        />
            <source src="videos/logo-bg.mp4"  type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            </div>
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

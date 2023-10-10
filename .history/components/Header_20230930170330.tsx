import React, { useEffect, useState } from 'react';
import './Header.css'; // Import a CSS file for your header styles

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Programmatically play the video after it has loaded
    const videoElement = document.getElementById('headerVideo') as HTMLVideoElement;
    if (videoElement) {
      videoElement.play().catch((error) => {
        // Handle any autoplay restrictions or errors here
        console.error('Autoplay failed:', error);
      });
    }
  }, []);

  return (
    <header className="bg-black text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Your logo or brand name can go here */}
        <div className="text-xl font-bold relative logo-container">
          <div className="image-container relative">
               {/* Logo */}
       <img
              src="/images/logo (3).png"
              className=" absolute   inset-0  z-10 max-w-mdrounded-full p-12  "
              alt=""
            />

         
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
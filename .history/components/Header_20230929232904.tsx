import React, { useEffect, useState } from 'react';
import './StarrySky.scss'; // Import a CSS file for your header styles
import Particles from "react-particles";

//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const particlesOptions = {
    particles: {
      number: {
        value: 50, // Number of particles
      },
      size: {
        value: 3, // Size of particles
      },
    },
  };
  
  return (
    <header className="bg-black text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Your logo or brand name can go here */}
        <div className="text-xl font-bold relative">
  
  <div>   
        <img src="/images/logo (2).png" className='max-w-xs w-40 z-10 rounded-full' alt="" />

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
      <Particles params={particlesOptions} />
    </header>
  );
}

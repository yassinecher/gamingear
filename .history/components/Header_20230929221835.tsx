import React, { useEffect, useState } from 'react';
import './StarrySky.scss'; // Import a CSS file for your header styles

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const pi = 3.14159265359;
    const precision = 10;
    let sky: Element | null, center: { y: any; x: any; };

    function dot(i:any) {
      const size = Math.round(Math.random() + 1);
      const root = document.createElement('span');
      root.style.top = center.y+20 + 'px';
      root.style.left = center.x +20+ 'px';
      root.classList.add('star', `size-${size}`, 'axis', `axis-${i}`);
      return root;
    }
    

    function clear() {
      sky!.innerHTML = '';
    }

    function init() {
      sky = document.querySelector('#sky');
      center = {
        x: sky!.clientWidth / 2,
        y: sky!.clientHeight / 2,
      };
      clear();
      for (let i = 0; i < 360; i++) sky!.appendChild(dot(i));
    }

    init(); // Initialize the starry sky effect on component load
  }, []);

  return (
    <header className="bg-black text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Your logo or brand name can go here */}
        <div className="text-xl font-bold relative">
  
  <div>
        <img src="/images/logo (2).png" className='max-w-xs w-40 z-10 rounded-full' alt="" />
  <div id="sky" className='max-w-xs w-40 z-10 rounded-full'>
 
      {/* Stars will be added here dynamically */}
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

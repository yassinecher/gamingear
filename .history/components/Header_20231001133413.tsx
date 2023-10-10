import React, { useEffect, useState } from 'react';
import './Header.css'; // Import a CSS file for your header styles

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isCollapsed, setIsCollapsed] = React.useState(true)

  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  }
  return (<>
    <nav className="flex items-center justify-between flex-wrap text-white p-6 blackbg relative -z-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <div className="text-xl font-bold relative logo-container flex justify-between items-center">
          <div className="image-container">
            <div className="block1 rounded-full">
              <img
                src="/images/logo (3).png"
                className="w-16 rounded-full max-w-full"
                alt=""
              />
            </div>
          </div>

          <img
            src="/images/logo-text.png"
            className="max-sm:w-40   rounded-full max-w-xs w-52 ml-5"
            alt=""
          />
        </div>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={handleClick}
          className="flex items-center px-3 py-2 border rounded text-yellow-100 border-yellow-300 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isCollapsed ? "hidden" : "block"
          }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-yellow-100 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-yellow-100 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-yellow-100 hover:text-white"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-yellow-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  </>

  );
}

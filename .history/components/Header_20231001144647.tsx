import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="lg:flex items-center justify-between flex-wrap text-white p-6 blackbg relative z-0">
        <div className="flex items-center justify-between text-white mr-6">
          <div className="w-full text-xl font-bold relative logo-container flex justify-center items-center">
            <div className="image-container">
              <div className="block1 rounded-full">
                <img
                  src="/images/logo (3).png"
                  className="max-sm:w-5 w-16 rounded-full max-w-full"
                  alt=""
                />
              </div>
            </div>

            <img
              src="/images/logo-text.png"
              className="max-sm:w-40  rounded-full max-w-xs w-52 ml-5"
              alt=""
            />
          </div>
        </div>
        <div className="flex align-middle items-center mt-4">
          <button
            onClick={toggleMenu}
            className=" lg:hidden flex items-center px-3 py-2 border rounded text-yellow-100 border-transparent "
          >
            <svg
              className="fill-current h-5 w-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <div className='block2 w-full m-auto'>
            <input type="text" placeholder='Search' className='w-full p-0 bg-transparent border-transparent m-5' />
          </div>
        </div>
        
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'menu-open' : 'menu-closed'
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
      </header>
    </>
  );
}

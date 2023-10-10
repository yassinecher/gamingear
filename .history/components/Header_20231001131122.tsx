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
    <header className=" text-white p-4 relative -z-10 flex items-center justify-between flex-wrap">
      <div className="container mx-auto flex justify-between items-center">
        {/* Your logo or brand name can go here  <div className='bg-gold p-2'><div className='text-sm font-bold pl-3'>(+216) 56 981 143</div><div></div></div>
  */}
        <div className="text-xl font-bold relative logo-container  flex justify-between items-center">
          <div className="image-container">
            <div className=" block1 rounded-full ">
              <img
                src="/images/logo (3).png"
                className="max-w-xs w-16 rounded-full"
                alt=""
              />
     
             
         

            </div>       
          </div>

          <img
                src="/images/logo-text.png"
                className="max-w-xs w-72 rounded-full ml-5"
                alt=""
              />
        </div>
    
    

        {/* Search Bar */}
        <div className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5 px-2 py-1 mt-4 md:mt-0 md:flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="py-1 px-3 w-full rounded-full border border-gray-400 focus:outline-none focus:border-gray-600"
            />
            <button className="absolute right-0 top-0 mt-1 mr-2 bg-amazon-yellow hover:bg-amazon-yellow-dark text-amazon-blue hover:text-white rounded-full px-2 py-1 focus:outline-none">
              Search
            </button>
          </div>
        </div>
    {/* Mobile Menu Button (Hamburger Icon) */}
    <button
          className="md:hidden text-yellow-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
        {/* User Actions (shown on desktop) */}
        <div className="hidden md:flex items-center space-x-4">
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

      {/* Navigation Menu (shown on mobile) */}
      {isMenuOpen && (
        <nav className="container mx-auto mt-4 md:hidden text-lg">
          <ul className="flex flex-col space-y-2">
            <li><a href="/category1" className="text-yellow-300">Category 1</a></li>
            <li><a href="/category2" className="text-yellow-300">Category 2</a></li>
            <li><a href="/category3" className="text-yellow-300">Category 3</a></li>
            {/* Add more categories as needed */}
          </ul>
        </nav>
      )}
    </header>
    
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
      </div>
      <div className="block lg:hidden">
        <button onClick={handleClick} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isCollapsed ? 'hidden' : 'block'}`}>
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Docs
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Examples
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Blog
          </a>
        </div>
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
        </div>
      </div>
    </nav>
    
    </>
  );
}

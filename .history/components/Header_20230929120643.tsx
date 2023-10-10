import React from 'react';

export default function Header() {
  return (
    <header className="bg-black text-yellow-500 p-4">
      <div className="container mx-auto">
        {/* First Section: Logo, Search, Cart, Register, and Login */}
        <div className="flex items-center space-x-4 mb-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-yellow-500">Logo</div>
          
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full px-2">
            <input
              type="text"
              placeholder="Search"
              className="py-1 px-2 outline-none"
            />
            <button className="text-black hover:text-gray-600">
              Search
            </button>
          </div>
          
          {/* Shopping Cart */}
          <div className="flex items-center">
            <span className="mr-2 text-yellow-500">Cart</span>
            <span className="bg-yellow-500 text-black rounded-full w-6 h-6 flex items-center justify-center">0</span>
          </div>
          
          {/* Register and Login */}
          <div className="space-x-4">
            <a href="/register" className="text-yellow-500">Register</a>
            <a href="/login" className="text-yellow-500">Login</a>
          </div>
        </div>
      </div>

      {/* Second Section: Categories */}
      <nav className="container mx-auto text-lg">
        <ul className="flex space-x-4">
          <li><a href="/category1" className="text-yellow-500">Category 1</a></li>
          <li><a href="/category2" className="text-yellow-500">Category 2</a></li>
          <li><a href="/category3" className="text-yellow-500">Category 3</a></li>
          {/* Add more categories as needed */}
        </ul>
      </nav>
    </header>
  );
}

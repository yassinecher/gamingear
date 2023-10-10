import React from 'react';

export default function Header() {
  return (
    <header className="bg-black text-yellow-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-yellow-500">Logo</div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow flex items-center bg-white rounded-full max-w-md px-2">
          <input
            type="text"
            placeholder="Search"
            className="py-1 px-2 outline-none w-full"
          />
          <button className="text-black hover:text-gray-600">Search</button>
        </div>

        {/* Register and Login */}
        <div className="flex items-center space-x-4">
          <a href="/register" className="text-yellow-500">Register</a>
          <a href="/login" className="text-yellow-500">Login</a>
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

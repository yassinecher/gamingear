import React from 'react';

export default function Header() {
  return (
    <header className="bg-nav-blueheaven text-black">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <a href="#" id="nav-hamburger-menu" aria-label="Open Menu">
              <i className="nav-icon-a11y nav-sprite"></i>
            </a>
            <div className="nav-left">
              <a href="/" className="nav-logo-link nav-progressive-attribute" aria-label="Amazon.fr">
                <span className="nav-sprite nav-logo-base"></span>
                <span id="logo-ext" className="nav-sprite nav-logo-ext nav-progressive-content"></span>
                <span className="nav-logo-locale">.fr</span>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="nav-progressive-content">
              <a href="#" className="nav-a nav-show-sign-in">
                Se connecter ›
              </a>
            </div>
            <a href="#" className="nav-a nav-progressive-attribute" id="nav-button-avatar" aria-label="Votre compte">
              <i className="nav-icon nav-icon-a11y nav-sprite">Votre compte</i>
            </a>
            <a href="/gp/aw/c?ref_=navm_hdr_cart" aria-label="Cart" className="nav-a" id="nav-button-cart">
              <div className="nav-cart-0 nav-progressive-attribute">
                <span className="nav-icon">
                  <span id="nav-cart-count" className="nav-cart-count nav-progressive-content nav-bluebeacon">0</span>
                </span>
              </div>
            </a>
          </div>
        </div>
        <div id="search-ac-init-data" className="nav-progressive-attribute"></div>
      </div>
    </header>
  );
}

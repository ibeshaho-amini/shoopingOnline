// Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    location.pathname !== '/' && (
      <div className="relative z-10">
        {/* Add bg-blue-600 for blue background */}
        <nav className="bg-blue-600 flex flex-col md:flex-row items-center justify-between p-4 gap-4">
          <div className="flex items-center">
            <div className="text-white text-xl">
              <span className="flex items-center gap-2">
                <img
                  src="images/logo.jpg"
                  alt="Shopping cart icon"
                  className="w-8 h-8 rounded-full"
                />
                Wago Trust
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <Link to="/" className="text-white border-b-2 border-white">Home</Link>
            <Link to="/products" className="text-white hover:text-yellow-400 transition-colors">Products</Link>
            <Link to="/pricing" className="text-white hover:text-yellow-400 transition-colors">Pricing</Link>
            <Link to="/about" className="text-white hover:text-yellow-400 transition-colors">About</Link>
            <Link to="/reviews" className="text-white hover:text-yellow-400 transition-colors">Reviews</Link>
            <button className="px-4 py-2 bg-yellow-400 text-blue-900 rounded-md font-semibold hover:bg-yellow-300 transition-colors">
              SIGN UP
            </button>
          </div>
        </nav>
      </div>
    )
  );
};

export default Navbar;
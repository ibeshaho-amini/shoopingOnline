import React from "react";
import { Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('images/55.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex flex-col md:flex-row items-center justify-between p-4 gap-4">
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

        {/* Main Content */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4 md:px-16 md:py-8 gap-8">
          {/* Left Side - Circular Image */}
          <div className="w-full md:w-1/2">
            <div className="aspect-square rounded-full overflow-hidden bg-yellow-400/90 relative max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-900/20"></div>
              <img
                src="images/222.jpg"
                alt="Happy couple shopping online"
                className="w-full h-full object-cover"
              />
              {/* Decorative Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-8 right-8 text-2xl md:text-4xl animate-bounce">❤️</div>
                <div className="absolute bottom-16 left-8 text-2xl md:text-4xl animate-pulse">👍</div>
                <div className="absolute top-1/2 right-8 text-2xl md:text-4xl">↗️</div>
                <div className="absolute bottom-32 left-16 text-2xl md:text-4xl animate-spin-slow">↪️</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-yellow-400 text-4xl md:text-6xl font-bold leading-tight">
              SHOP ONLINE
            </h1>
            <h2 className="text-white text-2xl md:text-4xl italic font-light">
              Made easy!
            </h2>
            <div className="space-y-4 text-gray-200">
              <p className="text-base md:text-lg">
                Discover a world of endless possibilities at your fingertips with Wago Trust.
                Your trusted partner for quality shopping.
              </p>
              <ul className="space-y-2 max-w-md mx-auto md:mx-0">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Premium Quality Products
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  24/7 Customer Support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Secure Payment Options
                </li>
              </ul>
            </div>
            <button className="w-full md:w-auto px-8 py-4 bg-yellow-400 text-blue-900 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-yellow-300 transition-colors group">
            <Link to="/products" className="text-white hover:text-yellow-400 transition-colors"> Start Shopping Now</Link>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <p className="text-white/80 text-sm">
              Join thousands of satisfied customers who trust Wago Trust
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
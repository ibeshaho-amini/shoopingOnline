// App.jsx or wherever your routes are defined
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/homepage';
import Products from './pages/products';
import Pricing from './pages/pricing';
import About from './pages/about';
import Reviews from './pages/review';

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/reviews" element={<Reviews />} />
      {/* Add other routes as needed */}
    </Routes>
  </Router>
  );
};

export default App;
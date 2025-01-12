import React, { useState } from 'react';
import { Search, Filter, Star, Heart, ShoppingCart } from 'lucide-react';

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleProducts, setVisibleProducts] = useState(8); // Initially show 8 products
  
  // Extended sample products data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      category: "electronics",
      rating: 4.5,
      image: "images/4566.jpg",
      description: "Premium wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      category: "electronics",
      rating: 4.8,
      image: "images/4567.jpg",
      description: "Next-gen smartwatch with health tracking"
    },
    {
      id: 3,
      name: "Designer Handbag",
      price: 299.99,
      category: "fashion",
      rating: 4.7,
      image: "images/4570.jpg",
      description: "Luxury leather handbag with gold accents"
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 89.99,
      category: "fashion",
      rating: 4.6,
      image: "images/4571.jpg",
      description: "Comfortable athletic shoes for runners"
    },
    {
      id: 5,
      name: "Coffee Maker",
      price: 79.99,
      category: "home",
      rating: 4.4,
      image: "images/4572.jpg",
      description: "Automated coffee maker with timer"
    },
    {
      id: 6,
      name: "Facial Serum",
      price: 49.99,
      category: "beauty",
      rating: 4.9,
      image: "images/4575.jpg",
      description: "Anti-aging serum with vitamin C"
    },
    {
      id: 7,
      name: "Gaming Console",
      price: 499.99,
      category: "electronics",
      rating: 4.8,
      image: "images/4568.jpg",
      description: "Next-generation gaming system"
    },
    {
      id: 8,
      name: "Desk Lamp",
      price: 39.99,
      category: "home",
      rating: 4.3,
      image: "images/4573.jpg",
      description: "LED desk lamp with adjustable brightness"
    },
    {
      id: 9,
      name: "Yoga Mat",
      price: 29.99,
      category: "fitness",
      rating: 4.6,
      image: "images/4577.jpg",
      description: "Non-slip yoga mat with carrying strap"
    },
    {
      id: 10,
      name: "Bluetooth Speaker",
      price: 69.99,
      category: "electronics",
      rating: 4.7,
      image: "images/4569.jpg",
      description: "Portable waterproof speaker"
    },
    {
      id: 11,
      name: "Makeup Palette",
      price: 59.99,
      category: "beauty",
      rating: 4.5,
      image: "images/4576.jpg",
      description: "Professional eyeshadow palette"
    },
    {
      id: 12,
      name: "Air Purifier",
      price: 149.99,
      category: "home",
      rating: 4.8,
      image: "images/4574.jpg",
      description: "HEPA air purifier for large rooms"
    },
    // Add more products as needed
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'home', name: 'Home & Living' },
    { id: 'beauty', name: 'Beauty' },
    { id: 'fitness', name: 'Fitness' },
  ];

  // Filter products based on selected category
  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  // Handle load more
  const handleLoadMore = () => {
    setVisibleProducts(prev => prev + 8); // Show 8 more products
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search and Filter Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>

            {/* Filter Options */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-900">
                <Filter size={20} />
                Filters
              </button>
              <select className="border rounded-lg px-4 py-2 bg-white">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rating</option>
              </select>
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-blue-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleProducts).map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="text-gray-600 hover:text-red-500" size={20} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <div className="flex items-center mt-1">
                  <Star className="text-yellow-400" size={16} fill="currentColor" />
                  <span className="text-sm text-gray-600 ml-1">{product.rating} (128 reviews)</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold text-blue-900">${product.price}</span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-blue-900 rounded-md hover:bg-yellow-300 transition-colors">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button - Only show if there are more products to load */}
        {visibleProducts < filteredProducts.length && (
          <div className="text-center mt-12">
            <button 
              onClick={handleLoadMore}
              className="px-8 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
            >
              Load More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductShowcase;
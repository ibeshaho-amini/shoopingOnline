import React, { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';

const ReviewSection = () => {
  const [reviews] = useState([
    {
      id: 1,
      author: "Sarah Johnson",
      rating: 5,
      date: "2025-01-10",
      title: "Excellent quality and fast shipping!",
      content: "I'm really impressed with the product quality and the super fast shipping. The customer service was also outstanding when I had a question.",
      helpful: 24,
      verified: true
    },
    {
      id: 2,
      author: "Michael Chen",
      rating: 4,
      date: "2025-01-08",
      title: "Great product, minor suggestions",
      content: "The product works great and meets my needs. Only suggestion would be to improve the packaging. Otherwise, very satisfied with my purchase.",
      helpful: 15,
      verified: true
    }
  ]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
        
        {/* Review Summary */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-gray-900">4.5</div>
            <div className="flex items-center gap-1">
              {renderStars(4.5)}
              <span className="ml-2 text-gray-600">(128 reviews)</span>
            </div>
          </div>
          
          <div className="mt-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Write a Review
            </button>
          </div>
        </div>

        {/* Review List */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {renderStars(review.rating)}
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                {review.verified && (
                  <span className="text-sm text-green-600 font-medium">
                    Verified Purchase
                  </span>
                )}
              </div>
              
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {review.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>By {review.author}</span>
              </div>
              
              <p className="text-gray-700 mb-4">{review.content}</p>
              
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
                <ThumbsUp className="w-4 h-4" />
                <span>Helpful ({review.helpful})</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
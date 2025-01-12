// Pricing.jsx
import React from 'react';

const Pricing = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: '$19/month',
      features: [
        '1 User',
        'Basic Features',
        'Email Support',
        'Access to all features',
      ],
    },
    {
      title: 'Pro Plan',
      price: '$49/month',
      features: [
        '5 Users',
        'Standard Features',
        'Priority Email Support',
        'Custom reports',
      ],
    },
    {
      title: 'Enterprise Plan',
      price: '$99/month',
      features: [
        'Unlimited Users',
        'All Features',
        'Dedicated Account Manager',
        '24/7 Support',
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Pricing Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
              <p className="text-xl text-gray-700 mb-6">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-gray-600 mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
import React from 'react';
import { Users, Target, Shield, Clock, Trophy, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('images/about-hero.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">About Wago Trust</h1>
            <p className="text-xl max-w-2xl">Your trusted partner in online shopping, delivering quality products and exceptional experiences since 2020.</p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, Wago Trust emerged from a simple vision: to make quality shopping accessible to everyone. What started as a small online store has grown into a trusted marketplace serving thousands of satisfied customers.
              </p>
              <p className="text-gray-600">
                We believe in the power of convenience combined with quality. Our platform brings together carefully selected products from trusted manufacturers and sellers, ensuring that every purchase meets our high standards.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="images/home.jpg" 
                alt="Our story" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-gray-300">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-blue-900" />,
                title: "Trust & Security",
                description: "We prioritize your safety with secure transactions and data protection."
              },
              {
                icon: <Target className="w-12 h-12 text-blue-900" />,
                title: "Quality First",
                description: "Every product on our platform meets strict quality standards."
              },
              {
                icon: <Users className="w-12 h-12 text-blue-900" />,
                title: "Customer Focus",
                description: "Your satisfaction is our top priority, with dedicated support always ready to help."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src={`images/2.jpg`}
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">General Manager</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Choose Wago Trust?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-blue-900" />,
                title: "Global Reach",
                description: "Access products from around the world, delivered to your doorstep."
              },
              {
                icon: <Clock className="w-12 h-12 text-blue-900" />,
                title: "Fast Delivery",
                description: "Quick and reliable shipping to get your products to you on time."
              },
              {
                icon: <Trophy className="w-12 h-12 text-blue-900" />,
                title: "Best Prices",
                description: "Competitive prices and regular deals to give you the best value."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="mb-8 text-lg">Join thousands of satisfied customers who trust Wago Trust for their shopping needs.</p>
          <button className="px-8 py-3 bg-yellow-400 text-blue-900 rounded-md font-semibold hover:bg-yellow-300 transition-colors">
            Start Shopping Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
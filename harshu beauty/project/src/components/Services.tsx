import React from 'react';
import { Crown, Sparkles, Leaf, Award } from 'lucide-react';

const Services = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Professional Care",
      description: "Expert beauticians with years of experience in bridal makeup and styling"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Premium Products",
      description: "We use only the finest quality cosmetics and beauty products for lasting results"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Natural & Organic",
      description: "Eco-friendly and skin-safe products that enhance your natural beauty"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video/Image Section */}
        <div className="text-center mb-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="h-96 bg-gradient-to-r from-rose-300 to-pink-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Sparkles className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">Experience Our Artistry</h3>
                <p className="text-lg">Watch our skilled professionals create magic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                <div className="text-rose-600 group-hover:text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
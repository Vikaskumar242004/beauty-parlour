import React from 'react';
import { Check, Crown, Sparkles } from 'lucide-react';

const Pricing = () => {
  const services = [
    { name: "Bridal Makeup", price: "₹15,000", duration: "3-4 hours" },
    { name: "Pre-Wedding Shoot", price: "₹8,000", duration: "2-3 hours" },
    { name: "Engagement Makeup", price: "₹6,000", duration: "2 hours" },
    { name: "Hair Styling", price: "₹4,000", duration: "1-2 hours" },
    { name: "Mehendi Design", price: "₹3,000", duration: "2-3 hours" },
    { name: "Facial Treatment", price: "₹2,500", duration: "1 hour" },
    { name: "Spa Package", price: "₹5,000", duration: "2 hours" },
    { name: "Party Makeup", price: "₹3,500", duration: "1.5 hours" }
  ];

  const packages = [
    {
      name: "Basic Bridal",
      price: "₹25,000",
      features: ["Bridal Makeup", "Hair Styling", "Draping", "Basic Mehendi"],
      popular: false
    },
    {
      name: "Premium Bridal",
      price: "₹45,000",
      features: ["Bridal Makeup", "Hair Styling", "Draping", "Intricate Mehendi", "Pre-Wedding Shoot", "Facial Treatment"],
      popular: true
    },
    {
      name: "Luxury Bridal",
      price: "₹75,000",
      features: ["Complete Bridal Makeup", "Hair Styling", "Draping", "Bridal Mehendi", "Pre-Wedding Shoot", "Spa Package", "Touch-up Service", "Family Makeup"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Individual Services */}
          <div className="lg:w-1/2">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-rose-800 mb-4">
                <span className="font-serif italic">Treatments</span> and prices
              </h2>
              <p className="text-gray-600">
                Visit us for professional bridal services with transparent pricing
              </p>
            </div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors duration-200">
                  <div>
                    <h3 className="font-semibold text-gray-800">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-rose-600">{service.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div className="lg:w-1/2">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-rose-800 mb-4">
                Bridal <span className="font-serif italic">Packages</span>
              </h2>
              <p className="text-gray-600">
                Complete bridal solutions for your special day
              </p>
            </div>

            <div className="space-y-6">
              {packages.map((pkg, index) => (
                <div key={index} className={`relative p-6 rounded-lg border-2 ${pkg.popular ? 'border-rose-500 bg-rose-50' : 'border-gray-200 bg-white'} hover:shadow-lg transition-all duration-300`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Crown className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <p className="text-3xl font-bold text-rose-600">{pkg.price}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition-all duration-300 ${pkg.popular ? 'bg-rose-500 text-white hover:bg-rose-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                    Choose Package
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
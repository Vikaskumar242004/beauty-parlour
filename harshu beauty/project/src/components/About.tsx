import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-6">
            <span className="font-serif italic">Elegance comes from being as</span>
            <br />
            <span className="text-gray-700">beautiful inside as outside</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Saheli Bridal Point, we believe every bride deserves to feel like royalty on her special day. 
            Our expert team combines traditional techniques with modern trends to create timeless beauty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Cards */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-rose-300 to-rose-400 flex items-center justify-center">
              <div className="text-center text-white">
                <Sparkles className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Bridal Makeup</h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center px-4">Perfect bridal looks for your special day</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-pink-300 to-pink-400 flex items-center justify-center">
              <div className="text-center text-white">
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Hair Styling</h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center px-4">Elegant hairstyles for every occasion</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-purple-300 to-purple-400 flex items-center justify-center">
              <div className="text-center text-white">
                <Sparkles className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Mehendi Art</h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center px-4">Traditional and modern henna designs</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center">
              <div className="text-center text-white">
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Spa Services</h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center px-4">Relaxing treatments for glowing skin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
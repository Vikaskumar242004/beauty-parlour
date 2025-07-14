import React from 'react';
import { Sparkles, Heart, Crown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Crown className="w-20 h-20 text-rose-600 mx-auto mb-4" />
              <Sparkles className="w-6 h-6 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-rose-800 mb-6 leading-tight">
            <span className="block font-serif italic">Saheli</span>
            <span className="block text-4xl md:text-6xl font-sans">Bridal Point</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where every bride's dream becomes reality. Experience the elegance of traditional and modern bridal artistry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-rose-600 to-rose-700 text-white px-8 py-4 rounded-full font-semibold hover:from-rose-700 hover:to-rose-800 transition-all duration-300 shadow-lg transform hover:scale-105">
              Book Your Appointment
            </button>
            <button className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-rose-600 hover:text-white transition-all duration-300">
              View Our Gallery
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Heart className="w-8 h-8 text-rose-400 animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Sparkles className="w-10 h-10 text-pink-400 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
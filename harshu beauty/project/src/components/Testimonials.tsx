import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Bride 2024",
      rating: 5,
      text: "Saheli Bridal Point made my wedding day absolutely magical! The makeup was flawless and lasted throughout the entire ceremony. The team was professional, friendly, and truly understood my vision.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Anita Patel",
      role: "Bride 2023",
      rating: 5,
      text: "I couldn't have asked for a better bridal experience. From the trial session to the wedding day, everything was perfect. The attention to detail and the quality of service exceeded my expectations.",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Meera Gupta",
      role: "Bride 2024",
      rating: 5,
      text: "The team at Saheli Bridal Point is incredible! They made me feel like a queen on my wedding day. The makeup was natural yet glamorous, and the hair styling was exactly what I dreamed of.",
      image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-100 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-6">
            <span className="font-serif italic">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear what our beautiful brides have to say about their experience with us
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="w-8 h-8 text-rose-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed pl-6">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-rose-800 mb-6">
            <span className="font-serif italic">Follow our Instagram</span>
          </h3>
          <p className="text-gray-600 mb-8">
            Stay updated with our latest bridal looks and behind-the-scenes moments
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-rose-200 to-pink-200 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-rose-600 font-semibold">Instagram Post {i}</span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
            Follow @sahelibridal
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
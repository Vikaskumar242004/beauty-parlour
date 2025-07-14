import React from 'react';
import { Trophy, Users, Calendar, Award, Star, Heart } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "2000+",
      title: "Happy Brides",
      description: "Successfully beautified over 2000 brides across the region"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: "8",
      title: "Years Experience",
      description: "Eight years of excellence in bridal makeup and styling"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      title: "Awards Won",
      description: "Recognized for outstanding service in beauty industry"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "4.9/5",
      title: "Customer Rating",
      description: "Consistently rated 4.9 stars by our satisfied clients"
    }
  ];

  const milestones = [
    {
      year: "2016",
      title: "Saheli Bridal Point Established",
      description: "Started our journey with a vision to make every bride feel special"
    },
    {
      year: "2018",
      title: "First Award Recognition",
      description: "Received 'Best Bridal Makeup Artist' award from Regional Beauty Council"
    },
    {
      year: "2020",
      title: "Expanded Services",
      description: "Added spa services and pre-wedding photography makeup to our offerings"
    },
    {
      year: "2022",
      title: "1000th Bride Milestone",
      description: "Celebrated serving our 1000th bride with a special ceremony"
    },
    {
      year: "2024",
      title: "Premium Studio Launch",
      description: "Opened our luxurious new studio with state-of-the-art facilities"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-6">
            <span className="font-serif italic">Our Achievements</span>
            <br />
            <span className="text-gray-700">in Past Years</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A journey of excellence, dedication, and countless beautiful moments created for our brides over the years.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                <div className="text-rose-600 group-hover:text-white">
                  {achievement.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-rose-600 mb-2">{achievement.number}</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h4>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-rose-200"></div>
          
          {milestones.map((milestone, index) => (
            <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-rose-600 mb-2">{milestone.year}</h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose-500 rounded-full border-4 border-white shadow-md"></div>
              
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white p-8 rounded-lg">
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Be Part of Our Success Story</h3>
            <p className="text-lg mb-6">Join thousands of happy brides who trusted us with their special day</p>
            <button className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Book Your Appointment Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
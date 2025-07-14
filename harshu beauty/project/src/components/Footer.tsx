import React from 'react';
import { Crown, Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rose-800 to-rose-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Crown className="w-8 h-8 text-rose-300" />
              <h3 className="text-2xl font-bold">Saheli Bridal Point</h3>
            </div>
            <p className="text-rose-200 leading-relaxed mb-6">
              Your trusted partner in creating magical bridal moments. We believe every bride deserves to feel like royalty on her special day. Experience the perfect blend of traditional artistry and modern elegance.
            </p>
            <div className="flex space-x-4">
              <div className="bg-rose-700 p-2 rounded-full">
                <Heart className="w-5 h-5" />
              </div>
              <div className="bg-rose-700 p-2 rounded-full">
                <Crown className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-rose-200 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-rose-200 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-rose-200 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-rose-200 hover:text-white transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-rose-200 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-300 mt-1" />
                <p className="text-rose-200 text-sm">
                  123 Beauty Lane, Fashion District<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-300" />
                <p className="text-rose-200 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-300" />
                <p className="text-rose-200 text-sm">info@sahelibridal.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-rose-700 mt-12 pt-8 text-center">
          <p className="text-rose-200 text-sm">
            © 2024 Saheli Bridal Point. All rights reserved. Made with ❤️ for beautiful brides.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Github, Twitter, Instagram, Star } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-lg mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Star className="w-6 h-6 text-purple-400" />
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ASTROKARMA
            </span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} ASTROKARMA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
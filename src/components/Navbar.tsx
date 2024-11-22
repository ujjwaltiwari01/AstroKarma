import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Star, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/prediction', label: 'Prediction' },
    { path: '/about', label: 'About' },
    { path: '/settings', label: 'Settings' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-black/20 backdrop-blur-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Star className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ASTROKARMA
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors hover:text-purple-400 ${
                    isActive ? 'text-purple-400' : 'text-gray-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Logout</span>
              </button>
            ) : (
              <NavLink
                to="/settings"
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 px-4 transition-colors ${
                    isActive ? 'text-purple-400' : 'text-gray-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
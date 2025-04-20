import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className={`p-1.5 rounded-lg ${isScrolled ? 'bg-indigo-100' : 'bg-indigo-100/80'}`}>
            <Brain className="h-6 w-6 text-indigo-600" />
          </div>
          <span className="font-bold text-xl text-gray-800">TalkSpace AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">
            Home
          </Link>
          <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">
            How It Works
          </a>
          <div className="flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 hover:text-indigo-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg py-4 px-6 flex flex-col space-y-4 border-t border-gray-100">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-indigo-600 font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <a 
            href="#" 
            className="text-gray-700 hover:text-indigo-600 font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#" 
            className="text-gray-700 hover:text-indigo-600 font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <div className="flex flex-col space-y-3 pt-2 border-t border-gray-100">
            <Link 
              to="/login" 
              className="text-indigo-600 hover:text-indigo-800 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
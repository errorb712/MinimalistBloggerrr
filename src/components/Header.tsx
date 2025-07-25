import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, BookOpen, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // ===========================================
  // CUSTOMIZATION GUIDE - NAVIGATION MENU
  // ===========================================
  // To modify navigation items, edit the array below:
  // - name: Display text for the menu item
  // - href: URL path for the menu item
  // Add/remove items as needed for your site structure
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/sales-landing' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Reviews', href: '/blog?type=affiliate' }
  ];

  // ===========================================
  // CUSTOMIZATION GUIDE - SOCIAL MEDIA LINKS
  // ===========================================
  // To update social media links, modify the href values below:
  // Replace '#' with your actual social media URLs
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <header className="sticky top-2 sm:top-4 z-50 mx-2 sm:mx-4 lg:mx-8">
      {/* Compact Navigation Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl sm:rounded-2xl border-2 sm:border-3 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
        <div className="flex justify-between items-center px-3 sm:px-6 py-2 sm:py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-lg border-2 border-gray-900 flex items-center justify-center group-hover:bg-yellow-300 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-gray-900" />
            </div>
            <span className="text-sm sm:text-lg font-black text-gray-900 tracking-tight uppercase">
              MODERNBLOG
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.slice(0, 6).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-lg border-2 ${
                  location.pathname === item.href
                    ? 'bg-gray-900 text-white border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]'
                    : 'text-gray-700 border-transparent hover:bg-gray-100 hover:border-gray-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all rounded-lg border-2 border-transparent hover:border-gray-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            
            <div className="flex items-center space-x-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all rounded-lg border-2 border-transparent hover:border-gray-300 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.2)]"
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all rounded-lg border-2 border-transparent hover:border-gray-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="px-3 sm:px-5 pb-3 sm:pb-4 border-t-2 border-gray-200">
            <div className="relative mt-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 sm:py-2.5 border-2 sm:border-3 border-gray-900 rounded-lg sm:rounded-xl focus:ring-0 focus:border-gray-900 outline-none text-sm sm:text-base font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 max-w-6xl mx-auto bg-white rounded-xl border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border-2 ${
                  location.pathname === item.href
                    ? 'text-white bg-gray-900 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]'
                    : 'text-gray-700 border-transparent hover:text-gray-900 hover:bg-gray-100 hover:border-gray-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="p-3 border-t-2 border-gray-200">
            <div className="flex items-center space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all rounded-lg border-2 border-transparent hover:border-gray-300 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.2)]"
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
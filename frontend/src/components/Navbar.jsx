import React, { useState, useEffect } from 'react';
import { Plane, Menu, X, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8 mt-4`}>
      <div className={`mx-auto max-w-7xl rounded-full transition-all duration-500 ${scrolled ? 'glass-panel py-3 px-8 shadow-2xl' : 'bg-transparent py-4 px-4'}`}>
        <div className="flex justify-between items-center h-12">

          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`p-2 rounded-full transition-colors duration-300 ${scrolled ? 'bg-primary-50 text-primary-600' : 'bg-white/20 text-white backdrop-blur-md'}`}>
              <Plane className="h-6 w-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <span className={`font-black text-2xl tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Wander<span className={scrolled ? 'text-gradient' : 'text-white/80'}>lust</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-1 items-center">
            {['Home', 'Hotels', 'Restaurants', 'Planner'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;
              return (
                <Link
                  key={item}
                  to={path}
                  className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${isActive
                      ? (scrolled ? 'bg-primary-50 text-primary-600' : 'bg-white/20 text-white')
                      : (scrolled ? 'text-gray-600 hover:bg-gray-100 hover:text-primary-600' : 'text-white/80 hover:bg-white/10 hover:text-white')
                    }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login" className={`flex items-center space-x-1.5 px-4 py-2 rounded-full font-semibold text-sm transition-colors ${scrolled ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
              <User className="w-4 h-4" />
              <span>Log in</span>
            </Link>
            <button className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg ${scrolled ? 'bg-primary-600 text-white shadow-primary-500/30 hover:shadow-primary-500/50' : 'bg-white text-primary-600 hover:bg-gray-50'}`}>
              Sign Up
            </button>
          </div>

          <div className="flex md:hidden items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-full ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'}`}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-4 right-4 mt-2 rounded-3xl glass-panel shadow-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
        <div className="px-4 py-6 space-y-2">
          {['Home', 'Hotels', 'Restaurants', 'Planner'].map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <Link key={item} to={path} className="block px-4 py-3 rounded-2xl text-base font-bold text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors">
                {item}
              </Link>
            )
          })}
          <div className="border-t border-gray-200/50 my-4 pt-4 px-2 flex flex-col space-y-3">
            <Link to="/login" className="flex items-center justify-center space-x-2 py-3 rounded-2xl text-base font-bold text-gray-700 hover:bg-gray-100 transition-colors">
              <User className="w-5 h-5" /> <span>Login</span>
            </Link>
            <button className="w-full bg-primary-600 text-white py-3 rounded-2xl font-bold text-base hover:bg-primary-700 transition-colors shadow-md">
              Sign Up Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

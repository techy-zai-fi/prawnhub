
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="w-full bg-ocean-deeper bg-opacity-90 backdrop-blur-sm py-4 px-6 md:px-12 flex justify-between items-center animate-fade-in sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2">
        <Logo />
      </Link>
      
      <div className="flex gap-8">
        <Link 
          to="/" 
          className={`nav-link text-white hover:text-prawn transition-colors py-2 ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/prices" 
          className={`nav-link text-white hover:text-prawn transition-colors py-2 ${location.pathname === '/prices' ? 'active' : ''}`}
        >
          Live Prices
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

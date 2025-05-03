
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Anchor, Fish, Waves } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ocean-deeper pt-12 pb-6 text-white relative overflow-hidden">
      {/* Wave decoration at the top */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#001845" fillOpacity="0.3" d="M0,288L48,261.3C96,235,192,181,288,154.7C384,128,480,128,576,149.3C672,171,768,213,864,208C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          <path fill="#001845" fillOpacity="0.5" d="M0,288L48,240C96,192,192,96,288,69.3C384,43,480,85,576,138.7C672,192,768,256,864,277.3C960,299,1056,277,1152,234.7C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-4" textSize="text-3xl" />
            <p className="text-gray-300 mt-4 max-w-md">
              Monitoring and tracking live prawn prices across Tamil Nadu markets. 
              Helping farmers and businesses make informed decisions.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="bg-prawn hover:bg-prawn-light text-white p-2 rounded-full transition-colors">
                <Fish size={20} />
              </a>
              <a href="#" className="bg-ocean hover:bg-ocean-dark text-white p-2 rounded-full transition-colors">
                <Waves size={20} />
              </a>
              <a href="#" className="bg-seaweed hover:opacity-80 text-white p-2 rounded-full transition-colors">
                <Anchor size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-prawn">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-prawn transition-colors">Home</Link></li>
              <li><Link to="/prices" className="text-gray-300 hover:text-prawn transition-colors">Live Prices</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-prawn transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-prawn transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-prawn">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Chennai, Tamil Nadu</p>
              <p className="mb-2">India</p>
              <p className="mb-2">Email: info@prawnhub.com</p>
              <p>Phone: +91 98765 43210</p>
            </address>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} PrawnHub. All rights reserved.</p>
          <p className="mt-2">Designed for prawn farmers and businesses across Tamil Nadu.</p>
        </div>
      </div>
      
      {/* Background bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-10">
        <div className="bubble animate-bubble-float" style={{ left: '10%', width: '30px', height: '30px', animationDuration: '15s' }}></div>
        <div className="bubble animate-bubble-float" style={{ left: '20%', width: '20px', height: '20px', animationDuration: '12s', animationDelay: '2s' }}></div>
        <div className="bubble animate-bubble-float" style={{ left: '40%', width: '25px', height: '25px', animationDuration: '18s', animationDelay: '1s' }}></div>
        <div className="bubble animate-bubble-float" style={{ left: '60%', width: '15px', height: '15px', animationDuration: '10s', animationDelay: '3s' }}></div>
        <div className="bubble animate-bubble-float" style={{ left: '80%', width: '35px', height: '35px', animationDuration: '20s', animationDelay: '4s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;

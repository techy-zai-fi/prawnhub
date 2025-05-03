import React from 'react';
import { Link } from 'react-router-dom';
import BubbleEffect from './BubbleEffect';
import OceanWaves from './OceanWaves';
import SeaPlants from './SeaPlants';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] ocean-gradient flex flex-col">
      {/* Enhanced Ocean Waves */}
      <OceanWaves />
      
      {/* Sea Plants */}
      <SeaPlants count={10} />
      
      {/* Bubbles Animation */}
      <BubbleEffect count={20} />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between flex-1 z-10 relative">
        {/* Left content */}
        <div className="w-full md:w-1/2 text-white animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 flex flex-col items-center gap-4">
            <span>
              <span className="text-orange-400">Welcome</span> <span className="text-white">to</span>
            </span>
            <span>
              <span className="text-white">Prawn</span> <span className="text-orange-400">hub</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-lg">
            Track live prawn prices across Tamil Nadu.
            Stay informed. Stay profitable.
          </p>
          <Link 
            to="/prices" 
            className="bg-prawn hover:bg-prawn-light text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Live Prices
          </Link>
        </div>
        
        {/* Improved Prawn Image */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-prawn opacity-20 blur-3xl rounded-full hidden"></div>
            <img 
              src="/lovable-uploads/f7c09392-ad2a-48dc-907f-3e0a0235fa58.png" 
              alt="Realistic Vanamei Prawn"
              className="w-[400px] h-auto relative z-10"
            />
          </div>
        </div>
      </div>
      
      {/* Enhanced Wave Animation */}
      <div className="wave-container h-24 w-full">
        <div className="wave animate-wave"></div>
        <div className="wave animate-wave" style={{ animationDelay: '-5s', opacity: 0.5 }}></div>
      </div>
    </div>
  );
};

export default Hero;

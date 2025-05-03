import React from 'react';
import { Link } from 'react-router-dom';
import BubbleEffect from './BubbleEffect';
import OceanWaves from './OceanWaves'; // Keeping OceanWaves
import plantImage from '/plant.png';
import sandImage from '/sand.png';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] ocean-gradient flex flex-col overflow-hidden"> {/* Increased min-height */}
      {/* Enhanced Ocean Waves */}
      <OceanWaves />
      
      {/* Sand Image */}
      <img
        src={sandImage}
        alt="Sand"
        className="absolute bottom-0 right-0 w-[2200px] h-[850px] z-1 object-cover"
      />

      {/* Plant Image */}
      <img
        src={plantImage}
        alt="Sea Plant"
        className="absolute bottom-0 right-5 h-80 z-2"
      />

      {/* Bubbles Animation */}
      <BubbleEffect count={20} />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between flex-1 z-10 relative">
        {/* Left content */}
        <div className="w-full md:w-1/2 text-white animate-fade-in animate-delay-03s">
          {/* Removed items-center from h1 for left alignment */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 flex flex-col gap-4">
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
              src="/public/lovable-uploads/f7c09392-ad2a-48dc-907f-3e0a0235fa58.png"
              alt="Realistic Vanamei Prawn"
              className="w-[700px] h-auto relative z-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
  textSize?: string;
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  showText = true, 
  size = 24, 
  textSize = "text-2xl", 
  textColor = "text-white"
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-prawn blur-md rounded-full opacity-50"></div>
        <div className="relative" style={{ width: size * 1.5, height: size * 1.5 }}>
          <img 
            src="/lovable-uploads/f7c09392-ad2a-48dc-907f-3e0a0235fa58.png" 
            alt="PrawnHub Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      {showText && (
        <div className={`${textSize} font-bold ml-2 flex`}>
          <span className={textColor}>Prawn</span>
          <span className="text-prawn">Hub</span>
        </div>
      )}
    </div>
  );
};

export default Logo;

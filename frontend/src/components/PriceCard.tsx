
import React from 'react';

interface PriceCardProps {
  type: string;
  price: number;
  unit: string;
  location: string;
  trend: 'up' | 'down' | 'stable';
  change?: number;
  lastUpdated: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ 
  type, 
  price, 
  unit, 
  location, 
  trend, 
  change = 0,
  lastUpdated 
}) => {
  const trendColor = 
    trend === 'up' ? 'text-green-400' : 
    trend === 'down' ? 'text-red-400' : 
    'text-blue-300';
  
  const trendIcon = 
    trend === 'up' ? '↑' : 
    trend === 'down' ? '↓' : 
    '→';
  
  return (
    <div className="price-card">
      <h3 className="text-xl font-bold text-white mb-2">{type}</h3>
      <div className="flex items-end gap-2 mb-4">
        <span className="text-3xl font-bold text-white">₹{price}</span>
        <span className="text-sm text-gray-200">per {unit}</span>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-gray-200 text-sm">{location}</div>
        <div className={`flex items-center gap-1 ${trendColor}`}>
          <span>{trendIcon}</span>
          <span>
            {change !== 0 && `${trend === 'down' ? '-' : '+'} ₹${Math.abs(change)}`}
            {change === 0 && 'Stable'}
          </span>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-300">
        Last updated: {lastUpdated}
      </div>
    </div>
  );
};

export default PriceCard;


import React from 'react';
import PriceCard from '../components/PriceCard';
import BubbleEffect from '../components/BubbleEffect';

// Sample data for our price cards
const priceData = [
  {
    id: 1,
    type: 'Tiger Prawn (Large)',
    price: 950,
    unit: 'kg',
    location: 'Chennai',
    trend: 'up' as const,
    change: 50,
    lastUpdated: 'Today, 2:30 PM'
  },
  {
    id: 2,
    type: 'White Prawn (Medium)',
    price: 720,
    unit: 'kg',
    location: 'Tuticorin',
    trend: 'down' as const,
    change: 30,
    lastUpdated: 'Today, 1:15 PM'
  },
  {
    id: 3,
    type: 'Brown Prawn (Small)',
    price: 550,
    unit: 'kg',
    location: 'Rameshwaram',
    trend: 'stable' as const,
    change: 0,
    lastUpdated: 'Today, 12:45 PM'
  },
  {
    id: 4,
    type: 'Freshwater Prawn',
    price: 820,
    unit: 'kg',
    location: 'Cuddalore',
    trend: 'up' as const,
    change: 40,
    lastUpdated: 'Today, 3:00 PM'
  },
  {
    id: 5,
    type: 'Jumbo Tiger Prawn',
    price: 1250,
    unit: 'kg',
    location: 'Nagapattinam',
    trend: 'up' as const,
    change: 100,
    lastUpdated: 'Today, 11:20 AM'
  },
  {
    id: 6,
    type: 'Medium Vannamei',
    price: 680,
    unit: 'kg',
    location: 'Mahabalipuram',
    trend: 'down' as const,
    change: 20,
    lastUpdated: 'Today, 10:45 AM'
  }
];

const LivePrices = () => {
  return (
    <div className="min-h-screen ocean-gradient relative pb-24">
      {/* Bubbles Animation */}
      <BubbleEffect count={12} />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Live Prawn Prices</h1>
        <p className="text-xl text-gray-100 mb-12 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Current market prices for various prawn types across Tamil Nadu regions. Updated in real-time from local markets.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {priceData.map((item, index) => (
            <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <PriceCard {...item} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 inline-flex items-center">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-light mr-2"></div>
            <span className="text-white">Prices update automatically every 30 minutes</span>
          </div>
        </div>
      </div>
      
      {/* Wave Animation */}
      <div className="wave-container h-24 w-full absolute bottom-0">
        <div className="wave animate-wave"></div>
        <div className="wave animate-wave" style={{ animationDelay: '-5s', opacity: 0.5 }}></div>
      </div>
    </div>
  );
};

export default LivePrices;

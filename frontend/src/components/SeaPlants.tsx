import React from 'react';
import { Leaf } from 'lucide-react';

interface SeaPlantProps {
  count?: number;
}

const SeaPlants: React.FC<SeaPlantProps> = ({ count = 8 }) => {
  const plants = Array.from({ length: count }, (_, i) => i);

  return (
    <>
      <div className="absolute bottom-0 left-0 w-full h-1/3 flex justify-around">
        {plants.map((plant) => (
          <div
            key={plant}
            className={`sea-plant ${plant % 2 === 0 ? 'seaweed' : 'coral'}`}
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${Math.random() * 2}s`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Add some floating leaf elements */}
      <div className="absolute bottom-10 left-[10%] animate-float" style={{ animationDuration: '7s', animationDelay: '0.5s' }}>
        <Leaf className="text-seaweed opacity-70" size={32} />
      </div>
      <div className="absolute bottom-20 left-[30%] animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }}>
        <Leaf className="text-seaweed opacity-60" size={24} />
      </div>
      <div className="absolute bottom-16 right-[25%] animate-float" style={{ animationDuration: '6s', animationDelay: '1.5s' }}>
        <Leaf className="text-seaweed opacity-80" size={28} />
      </div>
    </>
  );
};

export default SeaPlants;

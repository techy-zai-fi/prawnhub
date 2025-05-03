import React from 'react';

const Sand: React.FC = () => {
  return (
    <div 
      className="absolute bottom-0 right-0 w-[600px] h-[400px] z-0 overflow-hidden"
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(145deg, rgba(245, 222, 179, 0.9) 0%, rgba(210, 180, 140, 0.7) 100%)',
          borderTopLeftRadius: '300px',
          overflow: 'hidden',
        }}
      >
        {/* Grain texture overlay */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0.5px, transparent 1px),
              radial-gradient(circle at 90% 80%, rgba(0,0,0,0.1) 0.5px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            opacity: 0.4,
            filter: 'blur(0.3px)',
          }}
        ></div>
        
        {/* Subtle sand waves */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            width: '100%',
            height: '30%',
            background: 'linear-gradient(to top, rgba(210, 180, 140, 0.3), transparent)',
            borderTopLeftRadius: '150px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Sand;
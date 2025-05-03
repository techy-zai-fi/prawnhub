
import React, { useEffect, useRef } from 'react';

interface BubbleProps {
  count?: number;
}

const BubbleEffect: React.FC<BubbleProps> = ({ count = 15 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    
    // Clear any existing bubbles
    container.innerHTML = '';
    
    // Create new bubbles
    for (let i = 0; i < count; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble', 'animate-bubble-float');
      
      // Random sizes between 5px and 20px
      const size = Math.random() * 15 + 5;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Random horizontal position
      const left = Math.random() * 100;
      bubble.style.left = `${left}%`;
      
      // Random starting position
      const startDelay = Math.random() * 5;
      bubble.style.animationDelay = `${startDelay}s`;
      
      // Random animation duration
      const duration = Math.random() * 5 + 5;
      bubble.style.animationDuration = `${duration}s`;
      
      container.appendChild(bubble);
    }
  }, [count]);
  
  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden" />
  );
};

export default BubbleEffect;

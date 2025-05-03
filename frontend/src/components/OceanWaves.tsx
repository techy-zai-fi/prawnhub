
import React, { useEffect, useRef } from 'react';

const OceanWaves: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Wave properties with distinct gradient colors and slight adjustments
    const waves = [
      { y: canvas.height * 0.65, amplitude: 25, frequency: 0.02, speed: 0.07, gradientTop: 'rgba(14, 165, 233, 0.4)', gradientBottom: 'rgba(0, 40, 85, 0.7)' }, // Sky Blueish
      { y: canvas.height * 0.68, amplitude: 20, frequency: 0.03, speed: 0.09, gradientTop: 'rgba(20, 184, 166, 0.3)', gradientBottom: 'rgba(0, 50, 75, 0.6)' }, // Tealish
      { y: canvas.height * 0.72, amplitude: 30, frequency: 0.01, speed: 0.05, gradientTop: 'rgba(56, 189, 248, 0.25)', gradientBottom: 'rgba(0, 60, 95, 0.5)' }, // Light Blueish
      { y: canvas.height * 0.75, amplitude: 22, frequency: 0.025, speed: 0.08, gradientTop: 'rgba(94, 234, 212, 0.2)', gradientBottom: 'rgba(0, 70, 105, 0.4)' }, // Aqua/Turquoise
    ];

    let animationFrameId: number;
    let time = 0;

    // Animation loop
    const render = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y);
        
        for (let x = 0; x < canvas.width; x++) {
          const dx = x * wave.frequency;
          // Combine multiple sine waves for more natural movement
          // Added a third sine wave for more complexity
          const dy = Math.sin(dx + time * wave.speed) * wave.amplitude + 
                     Math.sin(dx * 1.5 + time * (wave.speed * 0.8)) * (wave.amplitude * 0.4) + 
                     Math.sin(dx * 0.5 + time * (wave.speed * 1.2)) * (wave.amplitude * 0.2); // Third sine wave
          ctx.lineTo(x, wave.y + dy);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        // Apply distinct gradient for each wave
        const gradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, canvas.height);
        gradient.addColorStop(0, wave.gradientTop);
        gradient.addColorStop(1, wave.gradientBottom);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      // Update time for animation (increased speed)
      time += 0.1; 
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 w-full h-full pointer-events-none" // Ensure canvas is behind content
    />
  );
};

export default OceanWaves;


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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Enhanced wave properties with more variety and flow
    const waves = [
      { y: canvas.height * 0.65, amplitude: 20, frequency: 0.02, speed: 0.07, color: 'rgba(14, 165, 233, 0.3)' },
      { y: canvas.height * 0.68, amplitude: 15, frequency: 0.03, speed: 0.09, color: 'rgba(14, 165, 233, 0.2)' },
      { y: canvas.height * 0.72, amplitude: 25, frequency: 0.01, speed: 0.05, color: 'rgba(14, 165, 233, 0.15)' },
      { y: canvas.height * 0.75, amplitude: 18, frequency: 0.025, speed: 0.08, color: 'rgba(14, 165, 233, 0.1)' },
    ];

    let animationFrameId: number;
    let time = 0;

    // Animation loop with improved wave flow
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw each wave with improved flow
      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y);
        
        // Draw wave path with smoother transitions
        for (let x = 0; x < canvas.width; x++) {
          const dx = x * wave.frequency;
          // Combine multiple sine waves for more natural movement
          const dy = Math.sin(dx + time * wave.speed) * wave.amplitude + 
                     Math.sin(dx * 1.5 + time * (wave.speed * 0.8)) * (wave.amplitude * 0.3);
          ctx.lineTo(x, wave.y + dy);
        }
        
        // Complete the wave path
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        // Fill wave with gradient for more depth
        const gradient = ctx.createLinearGradient(0, wave.y, 0, canvas.height);
        gradient.addColorStop(0, wave.color);
        gradient.addColorStop(1, 'rgba(0, 40, 85, 0.6)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      // Update time for animation
      time += 0.05;
      
      // Continue animation
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 w-full h-full pointer-events-none"
    />
  );
};

export default OceanWaves;

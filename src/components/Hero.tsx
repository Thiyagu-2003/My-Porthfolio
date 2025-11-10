import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles: {x: number, y: number, size: number, speed: number, connections: number[]}[] = [];
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 30)); // Adjust particle count based on screen width
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1, // Smaller particles for mobile
        speed: Math.random() * 0.3 + 0.1,
        connections: []
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.y += particle.speed;
        
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(124, 58, 237, 0.7)';
        ctx.fill();
        
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[j].x - particle.x, 2) + 
            Math.pow(particles[j].y - particle.y, 2)
          );
          
          const maxDistance = window.innerWidth < 768 ? 60 : 100; // Adjust connection distance for mobile
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(124, 58, 237, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/95 dark:from-gray-900/70 dark:to-gray-900/95 z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="block">AWS Cloud</span>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Practitioner</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-10">
          Fresh graduate passionate about cloud computing and AWS technologies, eager to start my career in cloud infrastructure and solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a 
            href="#projects" 
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base"
          >
            View Projects
          </a>
          
          <a 
            href="#contact" 
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-600 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300 text-sm sm:text-base"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      <a 
        href="#projects" 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
      >
        <ArrowDown className="text-indigo-600 dark:text-indigo-400 w-6 h-6 sm:w-8 sm:h-8" />
      </a>
    </section>
  );
};

export default Hero;
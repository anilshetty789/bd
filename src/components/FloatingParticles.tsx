import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: string;
  top: string;
  size: string;
  delay: string;
  duration: string;
  opacity: number;
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 8 + 4}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 4 + 4}s`,
      opacity: Math.random() * 0.4 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating hearts and sparkles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            opacity: particle.opacity,
            fontSize: particle.size,
          }}
        >
          {particle.id % 3 === 0 ? '💕' : particle.id % 3 === 1 ? '✨' : '💖'}
        </div>
      ))}
      
      {/* Soft glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-soft/30 rounded-full blur-3xl animate-pulse-glow animation-delay-800" />
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-rose/10 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
    </div>
  );
};

export default FloatingParticles;

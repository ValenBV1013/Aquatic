import React from 'react';

export const WaterBackground = () => {
  const bubbles = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-ocean-dark via-ocean-deep to-black">
      {/* Luz focal acuática */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
      
      {/* Burbujas flotantes */}
      {bubbles.map((_, i) => {
        const size = Math.random() * 40 + 10;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 6 + 6;

        return (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};
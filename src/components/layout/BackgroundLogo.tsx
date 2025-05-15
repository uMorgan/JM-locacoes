import React, { useState, useEffect } from 'react';

export const BackgroundLogo: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxOffset = scrollPosition * 0.05;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden">
      <img 
        src={`${process.env.PUBLIC_URL}/images/JMlogo-s-fundo.png`} 
        alt="JM Locações Background" 
        className="w-[80%] md:w-[60%] max-w-4xl opacity-[0.08] absolute select-none"
        style={{ 
          filter: 'grayscale(20%) brightness(85%)', 
          mixBlendMode: 'overlay',
          transform: `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  );
}; 
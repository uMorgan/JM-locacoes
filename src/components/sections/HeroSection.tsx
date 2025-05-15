import React, { useEffect, useState } from 'react';

interface HeroSectionProps {
  scrollParaSecao: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollParaSecao }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      className={`relative h-screen flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black/80"></div>
      
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div 
        className="relative z-10 text-center px-4"
      >
        <h2 
          className={`text-5xl md:text-6xl font-bold mb-6 text-white transition-all duration-500 delay-100 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
        >
          Especialistas em Locações de Máquinas Pesadas
        </h2>
        <p 
          className={`text-xl md:text-2xl mb-8 text-gray-200 transition-all duration-500 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
        >
          Escavadeiras, retroescavadeiras, caminhões e muito mais.
        </p>
        <button
          onClick={() => scrollParaSecao('contato')}
          className={`inline-block bg-blue-700 text-white px-8 py-3 rounded-full hover:scale-105 hover:bg-blue-600 active:scale-95 transition-all duration-300 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Solicite um Orçamento
        </button>
      </div>
    </section>
  );
}; 
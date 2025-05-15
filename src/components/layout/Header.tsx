import React, { useState, useEffect } from 'react';

interface HeaderProps {
  scrollParaSecao: (id: string) => void;
  scrollParaTopo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ scrollParaSecao, scrollParaTopo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div 
          className="cursor-pointer flex items-center hover:scale-105 transition-transform"
          onClick={scrollParaTopo}
        >
          <img 
            src={`${process.env.PUBLIC_URL}/images/JMlogo-s-fundo.png`} 
            alt="JM Locações Logo" 
            className="h-16 md:h-20 w-auto brightness-125"
          />
        </div>
        
        <button 
          className="md:hidden text-white text-2xl hover:scale-110 transition-transform"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? '✕' : '☰'}
        </button>

        <nav className="hidden md:flex space-x-8">
          {['empresa', 'servicos', 'projetos', 'contato'].map((item) => (
            <button
              key={item}
              onClick={() => scrollParaSecao(item)}
              className="nav-link capitalize text-lg font-medium hover:scale-110 hover:text-blue-400 transition-all"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {menuAberto && (
        <div
          className="md:hidden overflow-hidden bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-sm transition-all"
        >
          <nav className="flex flex-col items-center space-y-4 py-4">
            {['empresa', 'servicos', 'projetos', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollParaSecao(item)}
                className="nav-link capitalize w-full text-center py-2 hover:scale-110 hover:bg-white/10 transition-all"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}; 
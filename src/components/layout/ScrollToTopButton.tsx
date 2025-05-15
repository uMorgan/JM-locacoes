import React from 'react';

interface ScrollToTopButtonProps {
  isScrolled: boolean;
  scrollParaTopo: () => void;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ isScrolled, scrollParaTopo }) => {
  return (
    <button
      onClick={scrollParaTopo}
      className={`fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110 active:scale-90 ${
        isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
    >
      ↑
    </button>
  );
}; 
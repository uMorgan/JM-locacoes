import React from 'react';
import { CONTACT_INFO } from '../../utils/constants';
import { useInView } from 'react-intersection-observer';

export const Footer: React.FC = () => {
  const [footerRef, footerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [copyrightRef, copyrightInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <footer className="bg-black/90 text-center text-white py-12 text-sm border-t border-gray-800 relative" ref={footerRef}>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div
            className={`flex flex-col items-center bg-black/60 p-4 rounded-lg backdrop-blur-sm transition-all duration-700 transform ${
              footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/images/JMlogo-s-fundo.png`} 
              alt="JM Locações Logo" 
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-400">
              Excelência em locação de máquinas pesadas na Paraíba
            </p>
          </div>
          <div
            className={`transition-all duration-700 delay-200 transform ${
              footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Locação de Escavadeiras</li>
              <li>Retroescavadeiras</li>
              <li>Terraplanagem</li>
              <li>Demolição</li>
            </ul>
          </div>
          <div
            className={`transition-all duration-700 delay-400 transform ${
              footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <h4 className="text-lg font-bold mb-4">Contato Rápido</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <a
                  href={CONTACT_INFO.whatsappLink}
                  className="hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {CONTACT_INFO.whatsapp}
                </a>
              </p>
              <p>
                <a
                  href={CONTACT_INFO.instagramLink}
                  className="hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram: {CONTACT_INFO.instagram}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div 
          ref={copyrightRef}
          className={`pt-8 border-t border-gray-800/60 transition-all duration-700 delay-600 ${
            copyrightInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="mb-2">© {new Date().getFullYear()} JM Locações. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}; 
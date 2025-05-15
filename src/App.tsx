import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useScrollProgress } from './hooks/useScrollProgress';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { ServicosSection } from './components/sections/ServicosSection';
import { ProjetosSection } from './components/sections/ProjetosSection';
import { Footer } from './components/layout/Footer';
import { ScrollToTopButton } from './components/layout/ScrollToTopButton';
import { BackgroundLogo } from './components/layout/BackgroundLogo';
import ContactForm from './components/ContactForm';
import { Servico } from './types';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalServico, setModalServico] = useState<Servico | null>(null);
  const { scaleX } = useScrollProgress();

  const [empresaRef, empresaInView] = useInView({ 
    threshold: 0.2,
    triggerOnce: true 
  });
  const [servicosRef, servicosInView] = useInView({ 
    threshold: 0.2,
    triggerOnce: true 
  });
  const [projetosRef, projetosInView] = useInView({ 
    threshold: 0.2,
    triggerOnce: true 
  });
  const [contatoRef, contatoInView] = useInView({ 
    threshold: 0.2,
    triggerOnce: true 
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollParaSecao = (id: string) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollParaTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black/95 text-white font-sans relative">
      <BackgroundLogo />

      <div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50"
        style={{ 
          transform: `scaleX(${scaleX})`, 
          transformOrigin: 'left',
          transition: 'transform 0.1s ease-out'
        }}
      />

      <div className="relative z-10">
        <Header scrollParaSecao={scrollParaSecao} scrollParaTopo={scrollParaTopo} />
        
        <HeroSection scrollParaSecao={scrollParaSecao} />

        <section 
          ref={empresaRef}
          id="empresa" 
          className={`py-20 bg-white/90 text-black transition-all duration-1000 ${
            empresaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="section-container relative z-10">
            <h3 className="section-title text-blue-900">Sobre a JM Locações</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div 
                className={`space-y-6 transition-all duration-1000 delay-200 ${
                  empresaInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <p className="text-lg leading-relaxed">
                  Atuamos com excelência no fornecimento de máquinas pesadas para obras,
                  demolições e terraplanagens. Nossa missão é garantir qualidade,
                  segurança e atendimento personalizado para todos os nossos clientes.
                </p>
                <p className="text-lg leading-relaxed">
                  Com anos de experiência no mercado, nos destacamos pela confiabilidade
                  e compromisso com prazos e resultados. Nossa equipe altamente qualificada
                  está pronta para atender às suas necessidades com profissionalismo e dedicação.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div 
                    className="text-center p-4 bg-blue-50/90 rounded-lg hover:scale-105 transition-transform"
                  >
                    <h4 className="text-2xl font-bold text-blue-900">10+</h4>
                    <p className="text-sm text-gray-600">Anos de Experiência</p>
                  </div>
                  <div 
                    className="text-center p-4 bg-blue-50/90 rounded-lg hover:scale-105 transition-transform"
                  >
                    <h4 className="text-2xl font-bold text-blue-900">1500+</h4>
                    <p className="text-sm text-gray-600">Projetos Realizados</p>
                  </div>
                </div>
              </div>
              <div 
                className={`bg-gray-200/80 h-64 rounded-lg shadow-xl hover:scale-102 transition-all duration-1000 delay-400 ${
                  empresaInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              />
            </div>
          </div>
        </section>

        <section 
          ref={servicosRef}
          id="servicos" 
          className="py-20 bg-black/80 text-white relative"
        >
          <ServicosSection 
            servicosInView={servicosInView}
            scrollParaSecao={scrollParaSecao}
            modalServico={modalServico}
            setModalServico={setModalServico}
          />
        </section>

        <section 
          ref={projetosRef}
          id="projetos" 
          className="py-20 bg-white/85 text-black relative"
        >
          <ProjetosSection projetosInView={projetosInView} />
        </section>

        <section 
          ref={contatoRef}
          id="contato" 
          className={`py-20 bg-blue-900/85 text-white transition-all duration-1000 relative ${
            contatoInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="section-container">
            <h3 className="section-title">Entre em Contato</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div 
                className={`space-y-6 transition-all duration-1000 delay-200 ${
                  contatoInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <p className="text-lg">
                  Entre em contato conosco para solicitar um orçamento ou tirar suas dúvidas.
                  Estamos prontos para atender você!
                </p>
                <div className="space-y-4">
                  <div 
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:scale-102 hover:bg-white/15 transition-all"
                  >
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="font-bold">WhatsApp</p>
                      <a
                        href="https://wa.me/+5583991321516"
                        className="text-blue-200 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +55 83 99132-1516
                      </a>
                    </div>
                  </div>
                  <div 
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:scale-102 hover:bg-white/15 transition-all"
                  >
                    <span className="text-2xl">📷</span>
                    <div>
                      <p className="font-bold">Instagram</p>
                      <a
                        href="https://www.instagram.com/jm.locacoes.pb/"
                        className="text-blue-200 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @jm.locacoes.pb
                      </a>
                    </div>
                  </div>
                  <div 
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:scale-102 hover:bg-white/15 transition-all"
                  >
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-bold">Localização</p>
                      <p>Solânea - Paraíba, Brasil</p>
                    </div>
                  </div>
                  <div 
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:scale-102 hover:bg-white/15 transition-all"
                  >
                    <span className="text-2xl">⏰</span>
                    <div>
                      <p className="font-bold">Horário de Atendimento</p>
                      <p>Segunda a Sábado: 7h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`transition-all duration-1000 delay-400 ${
                  contatoInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <ScrollToTopButton isScrolled={isScrolled} scrollParaTopo={scrollParaTopo} />
    </div>
  );
};

export default App; 
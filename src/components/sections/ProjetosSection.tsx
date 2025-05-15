import React from 'react';
import styles from './ProjetosSection.module.css';

interface ProjetosSectionProps {
  projetosInView: boolean;
}

const projetos = [
  {
    id: 1,
    titulo: "Escavadeira PC em Ação",
    descricao: "Nossa escavadeira PC realizando trabalhos de alta precisão e eficiência em diversos tipos de terrenos.",
    imagem: `${process.env.PUBLIC_URL}/images/pc.png`,
  },
  {
    id: 2,
    titulo: "Serviço de Terraplanagem",
    descricao: "Preparação profissional de terreno com nossa equipe especializada e equipamentos modernos.",
    imagem: `${process.env.PUBLIC_URL}/images/pc.png`, // Usando a mesma imagem temporariamente
  },
  {
    id: 3,
    titulo: "Demolição Controlada",
    descricao: "Execução de demolição com segurança e eficiência, garantindo a total satisfação do cliente.",
    imagem: `${process.env.PUBLIC_URL}/images/pc.png`, // Usando a mesma imagem temporariamente
  }
];

export const ProjetosSection: React.FC<ProjetosSectionProps> = ({ projetosInView }) => {
  return (
    <div className="section-container relative z-10">
      <h3 className="section-title text-blue-900" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>Projetos Realizados</h3>
      <div 
        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 transform ${
          projetosInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {projetos.map((projeto, index) => (
          <div
            key={projeto.id}
            className={`${styles.projetoCard} transition-all duration-500 transform hover:scale-103 shadow-lg ${
              projetosInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              backgroundColor: 'rgba(30, 58, 138, 0.8)'
            }}
          >
            <div 
              className={styles.projetoImagem}
              style={{
                backgroundImage: `url(${projeto.imagem})`,
                opacity: 0.9
              }}
            />
            <div className={styles.projetoConteudo}>
              <h4 className={styles.projetoTitulo} style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                {projeto.titulo}
              </h4>
              <p className={styles.projetoDescricao} style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                {projeto.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 
import React from 'react';
import { Servico } from '../../types';

interface ServicosSectionProps {
  servicosInView: boolean;
  scrollParaSecao: (id: string) => void;
  modalServico: Servico | null;
  setModalServico: (servico: Servico | null) => void;
}

const servicos: Servico[] = [
  {
    title: "Locação de Escavadeiras",
    description: "Equipamentos modernos e bem mantidos para suas obras. Ideal para escavações profundas e movimentação de grandes volumes de terra. Operadores altamente qualificados.",
    icon: "🚜"
  },
  {
    title: "Retroescavadeiras",
    description: "Perfeitas para obras de médio e grande porte. Versáteis e eficientes para diversos tipos de trabalho. Manutenção em dia e disponibilidade imediata.",
    icon: "🏗️"
  },
  {
    title: "Caminhões",
    description: "Transporte eficiente e seguro de materiais. Frota moderna e bem mantida para suas necessidades. Motoristas experientes e pontuais.",
    icon: "🚛"
  },
  {
    title: "Terraplanagem",
    description: "Preparação e nivelamento profissional de terrenos. Equipe especializada e equipamentos de última geração. Projetos executados com precisão.",
    icon: "⛰️"
  },
  {
    title: "Demolição",
    description: "Serviços de demolição com segurança e eficiência. Planejamento detalhado e execução precisa. Remoção completa de resíduos.",
    icon: "🏚️"
  },
  {
    title: "Limpeza de Terrenos",
    description: "Limpeza e preparação completa de áreas. Remoção de vegetação e preparação para construção. Serviço rápido e profissional.",
    icon: "🌳"
  }
];

export const ServicosSection: React.FC<ServicosSectionProps> = ({
  servicosInView,
  scrollParaSecao,
  modalServico,
  setModalServico
}) => {
  return (
    <div className="section-container relative z-10">
      <h3 className="section-title text-blue-400" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>Nossos Serviços</h3>
      <div 
        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
          servicosInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {servicos.map((servico, index) => (
          <div
            key={index}
            className={`group bg-blue-900/30 backdrop-blur-sm p-6 rounded-lg hover:bg-blue-900/40 transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-2 border border-blue-900/20 ${
              servicosInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
            onClick={() => setModalServico(servico)}
          >
            <div className="text-4xl mb-4">{servico.icon}</div>
            <h4 className="text-xl font-bold mb-3 text-blue-300 group-hover:text-white transition-colors" 
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
              {servico.title}
            </h4>
            <p className="text-gray-200 group-hover:text-white transition-colors">
              {servico.description}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollParaSecao('contato');
              }}
              className="mt-4 text-blue-300 hover:text-white transition-all hover:scale-110 active:scale-90"
            >
              Solicitar orçamento →
            </button>
          </div>
        ))}
      </div>

      {modalServico && (
        <div
          className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
            modalServico ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setModalServico(null)}
        >
          <div
            className={`bg-white/95 backdrop-blur-md text-black p-8 rounded-lg max-w-2xl w-full transition-all duration-300 transform ${
              modalServico ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
            onClick={e => e.stopPropagation()}
          >
            <div className="text-6xl mb-4">{modalServico.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{modalServico.title}</h3>
            <p className="text-gray-700 mb-6">{modalServico.description}</p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg hover:scale-105 active:scale-95 transition-transform"
                onClick={() => setModalServico(null)}
              >
                Fechar
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 active:scale-95 transition-transform"
                onClick={() => {
                  setModalServico(null);
                  scrollParaSecao('contato');
                }}
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 
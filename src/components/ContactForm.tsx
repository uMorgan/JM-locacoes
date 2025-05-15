import React, { useState } from 'react';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  tipoServico: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    tipoServico: 'escavadeira'
  });

  const [enviando, setEnviando] = useState(false);
  const [mensagemStatus, setMensagemStatus] = useState('');
  const [campoFocado, setCampoFocado] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validarFormulario = (): boolean => {
    if (!formData.nome || !formData.telefone || !formData.mensagem) {
      setMensagemStatus('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    return true;
  };

  const formatarMensagemWhatsApp = (): string => {
    const mensagem = `
🏗️ *Nova Solicitação de Orçamento - JM Locações*
      
👤 *Nome:* ${formData.nome}
📱 *Telefone:* ${formData.telefone}
📧 *Email:* ${formData.email}
🚜 *Tipo de Serviço:* ${formData.tipoServico}
      
💬 *Mensagem:*
${formData.mensagem}
    `;
    
    return encodeURIComponent(mensagem);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validarFormulario()) return;
    
    setEnviando(true);
    setMensagemStatus('Redirecionando para o WhatsApp...');

    const numeroWhatsApp = '5583991321516';
    const mensagemFormatada = formatarMensagemWhatsApp();
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;

    window.open(urlWhatsApp, '_blank');
    
    setEnviando(false);
    setMensagemStatus('Mensagem enviada com sucesso!');
    
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
      tipoServico: 'escavadeira'
    });

    setTimeout(() => {
      setMensagemStatus('');
    }, 3000);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-6 opacity-0 translate-y-4 animate-fade-in-up backdrop-blur-sm bg-blue-900/50 p-6 rounded-lg shadow-lg border border-white/10"
      style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div
          className={`transition-all duration-300 ${
            campoFocado === 'nome' ? 'scale-102 border-blue-400' : ''
          }`}
        >
          <label className="block text-sm font-medium mb-2">Nome *</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            onFocus={() => setCampoFocado('nome')}
            onBlur={() => setCampoFocado(null)}
            className="w-full p-3 rounded bg-white/20 border border-white/20 focus:outline-none text-white transition-colors duration-300 backdrop-blur-sm"
            placeholder="Seu nome completo"
            required
          />
        </div>
        
        <div
          className={`transition-all duration-300 ${
            campoFocado === 'telefone' ? 'scale-102 border-blue-400' : ''
          }`}
        >
          <label className="block text-sm font-medium mb-2">Telefone *</label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            onFocus={() => setCampoFocado('telefone')}
            onBlur={() => setCampoFocado(null)}
            className="w-full p-3 rounded bg-white/20 border border-white/20 focus:outline-none text-white transition-colors duration-300 backdrop-blur-sm"
            placeholder="(00) 00000-0000"
            required
          />
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          campoFocado === 'email' ? 'scale-102 border-blue-400' : ''
        }`}
      >
        <label className="block text-sm font-medium mb-2">E-mail</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setCampoFocado('email')}
          onBlur={() => setCampoFocado(null)}
          className="w-full p-3 rounded bg-white/20 border border-white/20 focus:outline-none text-white transition-colors duration-300 backdrop-blur-sm"
          placeholder="seu@email.com"
        />
      </div>

      <div
        className={`transition-all duration-300 ${
          campoFocado === 'tipoServico' ? 'scale-102 border-blue-400' : ''
        }`}
      >
        <label className="block text-sm font-medium mb-2">Tipo de Serviço *</label>
        <select
          name="tipoServico"
          value={formData.tipoServico}
          onChange={handleChange}
          onFocus={() => setCampoFocado('tipoServico')}
          onBlur={() => setCampoFocado(null)}
          className="w-full p-3 rounded bg-white/20 border border-white/20 focus:outline-none text-white transition-colors duration-300 backdrop-blur-sm"
          required
          style={{ color: 'white' }}
        >
          <option value="escavadeira" className="bg-blue-900">Locação de Escavadeira</option>
          <option value="retroescavadeira" className="bg-blue-900">Locação de Retroescavadeira</option>
          <option value="caminhao" className="bg-blue-900">Locação de Caminhão</option>
          <option value="terraplanagem" className="bg-blue-900">Serviço de Terraplanagem</option>
          <option value="demolicao" className="bg-blue-900">Serviço de Demolição</option>
          <option value="limpeza" className="bg-blue-900">Limpeza de Terreno</option>
        </select>
      </div>

      <div
        className={`transition-all duration-300 ${
          campoFocado === 'mensagem' ? 'scale-102 border-blue-400' : ''
        }`}
      >
        <label className="block text-sm font-medium mb-2">Mensagem *</label>
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          onFocus={() => setCampoFocado('mensagem')}
          onBlur={() => setCampoFocado(null)}
          rows={4}
          className="w-full p-3 rounded bg-white/20 border border-white/20 focus:outline-none text-white transition-colors duration-300 backdrop-blur-sm"
          placeholder="Descreva o serviço que você precisa..."
          required
        ></textarea>
      </div>

      {mensagemStatus && (
        <div 
          className={`text-center p-3 rounded animate-fade-in ${
            mensagemStatus.includes('sucesso') 
              ? 'bg-green-600/40 text-green-200' 
              : 'bg-red-600/40 text-red-200'
          }`}
        >
          {mensagemStatus}
        </div>
      )}

      <button
        type="submit"
        disabled={enviando}
        className={`w-full bg-white/90 text-blue-900 py-3 px-6 rounded-full font-bold transition-all duration-300
          ${enviando ? 'opacity-75 cursor-not-allowed' : 'hover:bg-white hover:scale-102 active:scale-98'}`}
      >
        {enviando ? 'Enviando...' : 'Solicitar Orçamento'}
      </button>
    </form>
  );
};

export default ContactForm; 
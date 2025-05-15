# 🌐 JM Locações - Site Institucional

Website oficial da **JM Locações**, empresa especializada em **locação de máquinas pesadas** para obras, terraplanagem e demolição.  
Desenvolvido com foco em identidade visual marcante, usabilidade e performance.

---

## 📌 Objetivo do Site

Apresentar a JM Locações, seus serviços e projetos realizados, além de oferecer um canal direto de contato via **WhatsApp** para solicitações de orçamento.

---

## 🎨 Destaques Visuais

- 🔁 **Logo como marca d'água** com efeito **parallax** em todas as páginas
- 🧊 **Elementos com transparência** e **backdrop blur** para melhor legibilidade
- 🌫️ **Sombras de texto** para reforço visual sobre fundos translúcidos
- 🎞️ **Transições suaves** e animações nas seções com base no scroll
- 📱 **Layout responsivo**, adaptado para diferentes dispositivos

---

## 🧰 Tecnologias Utilizadas

- ⚛️ **React**
- 🟦 **TypeScript**
- 💨 **Tailwind CSS**
- 🔧 **PostCSS**
- 👀 **React Intersection Observer** (animações ativadas por rolagem)

---

## 📁 Estrutura do Projeto

```
/src
│
├── /components
│   ├── /layout         # Header, Footer, BackgroundLogo
│   └── /sections       # Seções como Hero, Serviços, Contato etc.
│
├── /hooks              # Hooks personalizados
├── /utils              # Funções utilitárias
├── /types              # Definições de tipos TypeScript
├── App.tsx             # Componente principal da aplicação
└── index.tsx           # Ponto de entrada do projeto
```

---

## ⚙️ Requisitos para Execução

- Node.js **v14.0.0** ou superior
- Gerenciador de pacotes: **npm** ou **yarn**

---

## 🛠️ Personalização

- **Imagens**: Adicione ou substitua em `/public/images`
- **Logo de Fundo**: Editar `/src/components/layout/BackgroundLogo.tsx`
- **Cores e Transparências**: Ajustar valores em Tailwind CSS (ex: `bg-white/80`)
- **Conteúdo**: Alterar os textos e seções em `/src/components`

---

## 🚀 Performance e Otimizações

- 💤 **Lazy loading** de imagens
- 👁️ **Intersection Observer** para carregamento de animações sob demanda
- 🌟 **CSS otimizado** com uso eficiente de blur, sombras e transições

---

## 📄 Licença

Todos os direitos reservados © JM Locações
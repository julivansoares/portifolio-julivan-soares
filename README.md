# Portfólio Julivan Soares

[![Next.js](https://img.shields.io/badge/Next.js-13+-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![EmailJS](https://img.shields.io/badge/EmailJS-2B3440?style=for-the-badge&logo=mail.ru)](https://www.emailjs.com/)

## 📋 Descrição

Este é o meu portfólio pessoal, desenvolvido como uma aplicação web moderna e responsiva. O projeto apresenta minhas habilidades, experiências profissionais, formação acadêmica e tecnologias que domino. Inclui uma seção de contato funcional com integração de envio de e-mails, permitindo que visitantes entrem em contato diretamente comigo.

O portfólio foi construído com foco em performance, acessibilidade e experiência do usuário, utilizando as melhores práticas de desenvolvimento web moderno.

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 13+** - Framework React para produção com renderização híbrida (SSR/SSG)
- **React 18** - Biblioteca JavaScript para construção de interfaces de usuário
- **SCSS/SASS** - Pré-processador CSS para estilos avançados e organizados
- **JavaScript ES6+** - Linguagem de programação com recursos modernos

### UI/UX e Interatividade
- **Font Awesome** - Biblioteca de ícones vetoriais escaláveis
- **React Icons** - Conjunto de ícones populares para React
- **Animate.css** - Biblioteca de animações CSS prontas para uso
- **CSS Modules** - Sistema de módulos CSS para isolamento de estilos

### Funcionalidades
- **EmailJS** - Serviço de envio de e-mails sem backend próprio
- **Next.js Image** - Componente otimizado para carregamento de imagens
- **Intersection Observer API** - API nativa para animações no scroll

### Desenvolvimento
- **Node.js** - Ambiente de execução JavaScript
- **NPM** - Gerenciador de pacotes para dependências
- **ESLint** - Ferramenta de linting para qualidade de código

## ✨ Funcionalidades

- **Design Responsivo** - Layout adaptável para desktop, tablet e mobile
- **Animações Suaves** - Efeitos de entrada no scroll para melhor experiência
- **Navegação Intuitiva** - Menu hambúrguer em dispositivos móveis
- **Formulário de Contato** - Envio direto de e-mails via EmailJS
- **Seções Organizadas** - Apresentação, sobre mim, tecnologias, experiência e contato
- **Otimização de Performance** - Carregamento otimizado de imagens e recursos
- **Acessibilidade** - Estrutura semântica HTML e atributos ARIA

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **NPM** (geralmente vem com Node.js) ou **Yarn**
- Conta no **EmailJS** (gratuita) - [Criar conta](https://www.emailjs.com/)

## 🛠️ Instalação e Execução

### 1. Clone o repositório
```bash
git clone https://github.com/julivansoares/portfolio-julivan-soares.git
cd portfolio-julivan-soares
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente
```bash
cp .env.local.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais do EmailJS:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Execute o projeto
```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
portfolio-julivan-soares/
├── public/                    # Arquivos estáticos
│   └── img/                   # Imagens do projeto
├── src/
│   ├── app/                   # Diretório do Next.js App Router
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.js          # Layout raiz da aplicação
│   │   ├── page.js            # Página principal
│   │   └── style.module.scss  # Estilos da página principal
│   └── components/            # Componentes React
│       ├── AboutMe/           # Seção "Sobre Mim"
│       ├── Contact/           # Formulário de contato
│       ├── Home/              # Seção inicial
│       ├── Nav/               # Navegação principal
│       ├── ScrollReveal/      # Componente de animações no scroll
│       ├── Skills/            # Tecnologias e habilidades
│       └── Summary/           # Experiência e formação
├── .env.local.example         # Exemplo de variáveis de ambiente
├── package.json               # Dependências e scripts
├── next.config.js             # Configuração do Next.js
└── README.md                  # Este arquivo
```

## 📧 Integração EmailJS

O portfólio inclui um formulário de contato funcional que utiliza o EmailJS para envio de e-mails sem necessidade de backend próprio.

### Configuração:

1. **Crie uma conta** no [EmailJS](https://www.emailjs.com/)
2. **Configure um serviço** (Gmail, Outlook, etc.)
3. **Crie um template** de e-mail com as seguintes variáveis:
   - `{{from_name}}` - Nome do remetente
   - `{{reply_to}}` - E-mail do remetente
   - `{{subject}}` - Assunto da mensagem
   - `{{message}}` - Conteúdo da mensagem

### Exemplo de Template EmailJS:

**Assunto:** `Nova mensagem do portfólio - {{subject}}`

**Corpo (HTML):**
```html
<h2>Você recebeu uma nova mensagem!</h2>
<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>E-mail:</strong> {{reply_to}}</p>
<p><strong>Assunto:</strong> {{subject}}</p>
<p><strong>Mensagem:</strong></p>
<p>{{message}}</p>
<hr>
<p>Enviado via portfólio Julivan Soares</p>
```

## 🚀 Deploy

Este projeto pode ser facilmente implantado em plataformas como:

- **Vercel** (recomendado para Next.js)
- **Netlify**
- **GitHub Pages** (com algumas configurações adicionais)

### Deploy no Vercel:

1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente no painel do Vercel
3. Deploy automático será realizado

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

Julivan Soares - Analista de Suporte

- **E-mail:** julivan.soares@outlook.com
- **LinkedIn:** [linkedin.com/in/julivan-soares](https://www.linkedin.com/in/julivan-soares)
- **GitHub:** [github.com/julivansoares](https://github.com/julivansoares)
- **Portfólio:** [Seu domínio quando implantado]

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
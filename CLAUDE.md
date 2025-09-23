# Sonhos em Linha - Project Documentation

## 📋 Project Overview
Website para o atelier "Sonhos em Linha" - serviços de costura e alfaiataria. Site multilíngue (PT/EN/ES/FR) com design responsivo e deploy automático no GitHub Pages.

## 🛠 Tech Stack
- **Framework**: React 19.1.0 + Vite 6.3.5
- **Language**: JavaScript (JSX)
- **Styling**: CSS Modules + Custom CSS
- **Internationalization**: i18next + react-i18next
- **Icons**: React Icons
- **Build Tool**: Vite
- **Deployment**: GitHub Actions → GitHub Pages

## 📁 Project Structure
```
sonhosemlinha.pt/
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions workflow for auto-deploy
├── public/
│   ├── hero-session-sonhos-em-linha.mp4  # Hero video
│   ├── sonhos-em-linha-2.png             # Logo/branding
│   └── [1-4].png                         # Portfolio images
├── src/
│   ├── components/             # React components
│   │   ├── AboutSection.jsx    # Sobre o atelier
│   │   ├── ContactForm.jsx     # Formulário de contacto
│   │   ├── CookieConsent.jsx   # Banner GDPR
│   │   ├── Footer.jsx          # Rodapé com links legais
│   │   ├── HeroSection.jsx     # Secção principal com vídeo
│   │   ├── LegalModal.jsx      # Modal com políticas legais
│   │   ├── PortfolioSection.jsx # Galeria de trabalhos
│   │   ├── ServicesSection.jsx  # Lista de serviços
│   │   ├── TestimonialsSection.jsx # Depoimentos
│   │   └── WhatsAppWidget.jsx   # Widget de contacto WhatsApp
│   ├── i18n/
│   │   ├── i18n.js             # Configuração i18next
│   │   └── locales/            # Ficheiros de tradução
│   │       ├── pt.json         # Português (padrão)
│   │       ├── en.json         # Inglês
│   │       ├── es.json         # Espanhol
│   │       └── fr.json         # Francês
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Estilos globais
│   └── main.jsx                # Entry point
├── dist/                       # Build output (gitignored)
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
└── .gitignore                  # Git ignore rules
```

## 🎯 Key Features
- **Multilingual**: 4 idiomas com detecção automática do browser
- **Responsive Design**: Design adaptativo para todos os dispositivos
- **GDPR Compliant**: Cookie consent e políticas de privacidade
- **WhatsApp Integration**: Widget para contacto direto
- **Smooth Scrolling**: Navegação suave entre secções
- **Video Hero**: Vídeo promocional na secção principal
- **Portfolio Gallery**: Galeria de trabalhos realizados
- **Contact Form**: Formulário de contacto integrado

## 🚀 Commands
```bash
# Development
npm run dev         # Start development server (http://localhost:5173)

# Build & Preview
npm run build       # Build for production (output: dist/)
npm run preview     # Preview production build

# Linting (if configured)
npm run lint        # Run ESLint
npm run typecheck   # Run TypeScript checks
```

## 🌐 Internationalization
### Configuration
- **Default Language**: Portuguese (pt)
- **Fallback**: Portuguese
- **Detection**: Browser language → localStorage
- **Storage**: localStorage for persistence

### Adding New Languages
1. Create new JSON file in `src/i18n/locales/[lang].json`
2. Add to resources object in `src/i18n/i18n.js`
3. Update language selector if exists

### Translation Keys Structure
```json
{
  "hero": {
    "title": "Título principal",
    "titleHighlight": "Destaque",
    "subtitle": "Subtítulo"
  },
  "nav": { ... },
  "about": { ... },
  "services": { ... }
}
```

## 📦 Dependencies
### Production
- `react` (19.1.0) - UI library
- `react-dom` (19.1.0) - React DOM renderer
- `i18next` (25.5.2) - Internationalization framework
- `i18next-browser-languagedetector` (8.2.0) - Language detection
- `react-i18next` (15.7.3) - React bindings for i18next
- `react-icons` (5.5.0) - Icon library

### Development
- `vite` (6.3.5) - Build tool and dev server
- `@vitejs/plugin-react` (4.4.1) - React plugin for Vite
- `@types/react` (19.1.2) - React TypeScript definitions
- `@types/react-dom` (19.1.2) - React DOM TypeScript definitions

## 🎨 Styling
- **Global Styles**: `src/App.css`
- **Component Styles**: Individual CSS files per component
- **CSS Variables**: For consistent theming
- **Responsive**: Mobile-first approach
- **Animations**: CSS transitions and transforms

## 🚀 Deployment
### GitHub Pages (Automatic)
1. **Trigger**: Push to `main` branch
2. **Process**: GitHub Actions → Build → Deploy
3. **URL**: `https://username.github.io/repository-name`

### Manual Deployment
```bash
npm run build
# Upload dist/ contents to web server
```

## 🔧 Environment Setup
### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Local Development
```bash
git clone <repository-url>
cd sonhosemlinha.pt
npm install
npm run dev
```

## 📱 Components Overview
### HeroSection
- Video background
- Call-to-action buttons
- Smooth scroll navigation

### AboutSection
- Company information
- Mission and values

### ServicesSection
- Service listings
- Pricing information

### PortfolioSection
- Image gallery
- Work examples

### ContactForm
- Contact form with validation
- Email integration

### WhatsAppWidget
- Floating WhatsApp button
- Direct message integration

### CookieConsent
- GDPR compliance
- Cookie management

### LegalModal
- Privacy policy
- Terms of service
- Cookie policy

## 🔒 Security & Privacy
- GDPR compliant cookie consent
- Privacy policy integration
- No sensitive data in repository
- Secure form handling

## 📊 Performance
- Vite for fast builds
- Code splitting
- Optimized assets
- Responsive images

## 🐛 Common Issues & Solutions
### Build Errors
- **JSX Characters**: Use `&gt;` instead of `>` in JSX
- **Missing Dependencies**: Run `npm install`
- **Port Conflicts**: Change port in vite.config.js

### Deployment Issues
- **GitHub Pages**: Ensure `base: './'` in vite.config.js
- **Assets Loading**: Check asset paths in build

## 📞 Contact Information
- **Website**: sonhosemlinha.pt
- **Email**: info@sonhosemlinha.pt
- **WhatsApp**: Integrated widget
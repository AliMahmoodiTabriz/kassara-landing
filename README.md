# Kassara Landing Page

Minimalist dark theme landing page for Kassara - AI-powered fortune telling startup.

## 🚀 Quick Start

```bash
# Use Node.js 20+ with NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
```

## 🎨 Features

- ✅ Multi-language support (Turkish/English)
- ✅ Minimalist dark theme
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ WhatsApp integration
- ✅ Contact form
- ✅ SEO optimized
- ✅ Smooth scroll navigation
- ✅ Modern animations

## 🛠️ Tech Stack

- React 19
- Vite
- Tailwind CSS 3
- React Router
- React Scroll
- i18next (internationalization)
- React Icons

## 🔧 Customization

- **WhatsApp number**: `src/utils/constants.js`
- **Social media links**: `src/utils/constants.js`
- **Language translations**: `src/i18n/locales/tr.json` and `en.json`
- **Logo**: `public/logo.svg`

## 📄 Pages

- `/` - Home page (Hero, About, Features, WhatsApp, Contact)
- `/privacy-policy` - Privacy Policy
- `/terms-of-service` - Terms of Service

## 🌐 Multi-language Support

The website supports Turkish (default) and English. Users can switch languages using the language selector in the navbar (TR/EN buttons).

### Adding a New Language

1. Create a new JSON file in `src/i18n/locales/` (e.g., `de.json`)
2. Copy the structure from `tr.json` or `en.json`
3. Translate all strings
4. Add the language to `src/i18n/config.js`
5. Update `LanguageSwitcher.jsx` to include the new language

## 🎨 Color Palette

- **Black** (#000000) - Main background
- **Gray-900** (#111827) - Card backgrounds
- **Gray-800** (#1f2937) - Borders
- **White** (#ffffff) - Headings and CTAs
- **Gray-400** (#9ca3af) - Body text
- **Gray-500** (#6b7280) - Secondary text

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting
```

## 📝 Project Structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer
│   ├── sections/       # Hero, About, Features, WhatsApp, Contact
│   └── ui/            # Button, Card, LanguageSwitcher
├── pages/             # Home, PrivacyPolicy, TermsOfService
├── i18n/              # Internationalization config and translations
├── utils/             # Constants and utilities
├── index.css          # Global styles
├── main.jsx           # App entry point
└── App.jsx            # Main app component with routing
```

## 📞 Contact & Support

- Email: info@kassara.app
- WhatsApp: +90 534 579 91 03

## 📄 License

© 2024 Kassara. All rights reserved.

---

Built with ❤️ in Turkey

# Modern Design Portfolio 2025

A cutting-edge, responsive portfolio website built with TypeScript, JavaScript, and CSS. Features modern 2025 design trends including dark/light mode, glassmorphism effects, and dynamic content generation.

## 🔗 Live Demo

🌐 **[View Live Portfolio](https://hamse122.github.io/Modern-Design/)** | 📱 [GitHub Repository](https://github.com/hamse122/Modern-Design)

[![Portfolio](https://img.shields.io/badge/Portfolio-2025-blue?style=for-the-badge)](https://hamse122.github.io/Modern-Design/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

## Screenshots

### Dark Mode
![Portfolio Dark Mode](screenshots/dark-mode.png)
*Modern dark theme with gradient hero section and glassmorphism effects*

### Light Mode
![Portfolio Light Mode](screenshots/light-mode.png)
*Clean light theme with smooth transitions*

### Responsive Design
![Portfolio Mobile View](screenshots/mobile-view.png)
*Fully responsive design optimized for mobile devices*

> **Note:** To add screenshots:
> 1. Take screenshots of your portfolio running in the browser
> 2. Create a `screenshots/` folder in the project root
> 3. Save screenshots as `dark-mode.png`, `light-mode.png`, and `mobile-view.png`
> 4. Replace the placeholder paths above with your actual screenshot paths

## Features

- 🎨 **Modern Design 2025** - Beautiful gradient hero section with glassmorphism effects
- 🌓 **Dark/Light Mode** - Seamless theme switching with persistent preferences
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **TypeScript-First** - 100% TypeScript with dynamic content generation
- 🎯 **Interactive Sections**:
  - Hero section with floating elements and animated avatar
  - About section with animated statistics counters
  - Skills section with animated progress bars
  - Projects showcase with interactive hover effects
  - Contact form with validation and feedback
- ✨ **Smooth Animations** - Scroll-triggered animations and transitions
- 🎭 **Mobile Menu** - Responsive hamburger menu navigation
- 🚀 **Performance Optimized** - Lightweight, fast loading, and optimized

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Build the TypeScript files:
```bash
npm run build
```

Watch for changes and rebuild automatically:
```bash
npm run watch
```

## Usage

1. Build the project: `npm run build`
2. Open `index.html` in your browser
3. Or use a local development server (recommended):
   ```bash
   # Using Node.js http-server
   npm run serve
   # OR
   npx http-server -p 8080
   
   # Using Python
   python -m http.server 8000
   ```
4. Open your browser and navigate to `http://localhost:8080` (or `http://localhost:8000` for Python)

## Project Structure

```
Modern-Design/
├── src/
│   ├── index.ts          # Main TypeScript application (690+ lines)
│   │                      # - Data models and interfaces
│   │                      # - ThemeManager class
│   │                      # - PortfolioApp class
│   │                      # - Dynamic content generation
│   └── styles.css        # Modern CSS with theme system (1000+ lines)
│                          # - CSS Custom Properties
│                          # - Dark/Light mode support
│                          # - Responsive breakpoints
├── dist/                 # Compiled JavaScript (generated)
├── index.html            # Minimal HTML entry point
├── tsconfig.json         # TypeScript compiler configuration
├── package.json          # Project dependencies and scripts
└── README.md            # Project documentation
```

## Customization

### Personal Information
Update the following in `index.html`:
- Name, title, and description in the hero section
- About section content
- Skills and technologies
- Projects in `src/index.ts`
- Contact information

### Styling
Modify CSS variables in `src/styles.css` to customize colors:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

### Projects
Edit the `projects` array in `src/index.ts` to add/remove projects:
```typescript
private projects: Project[] = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    technologies: ['TypeScript', 'React'],
    // ...
  }
];
```

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run watch` - Watch for changes and rebuild automatically
- `npm start` - Run the compiled JavaScript (Node.js)

## Technologies

- **TypeScript** - Type-safe JavaScript for better development experience
- **JavaScript** - Compiled output for browser compatibility
- **CSS** - Modern styling with custom properties, flexbox, and grid
- **Font Awesome** - Icons for social links and UI elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
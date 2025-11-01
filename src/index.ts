/**
 * Portfolio 2025 - Full TypeScript Implementation
 * Modern portfolio website with dark/light mode and dynamic content generation
 * 
 * @author Hamse Mo
 * @version 1.0.0
 */

// CSS is loaded via <link> tag in index.html

// ============ TYPE DEFINITIONS ============
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tool';
}

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface NavItem {
  id: string;
  label: string;
  href: string;
}

// ============ PORTFOLIO DATA ============
/**
 * Centralized data class containing all portfolio information
 * All content can be updated by modifying properties in this class
 */
class PortfolioData {
  static readonly personalInfo = {
    name: 'Hamse Mo',
    firstName: 'Hamse',
    lastName: 'Mo',
    title: 'Full Stack Developer',
    description: 'I craft exceptional digital experiences through innovative full-stack solutions. Specializing in modern web technologies, I transform complex challenges into elegant, scalable applications.',
    bio: [
      'As a passionate Full Stack Developer with 4+ years of experience, I specialize in building end-to-end web solutions that deliver exceptional user experiences.',
      'My expertise spans modern frontend frameworks, robust backend architectures, cloud infrastructure, and everything in between. I thrive on solving complex problems and turning ideas into reality.',
      'When I\'m not coding, I contribute to open-source projects, write technical blogs, and continuously explore emerging technologies to stay ahead of the curve.'
    ],
    location: 'Available for Remote Work',
    email: 'hamse.mo@example.com',
    phone: '+1 (234) 567-890',
    year: 2025
  };

  static readonly stats: Stat[] = [
    { value: 45, label: 'Projects Completed', suffix: '+' },
    { value: 28, label: 'Happy Clients', suffix: '+' },
    { value: 4, label: 'Years Experience', suffix: '+' },
    { value: 100, label: 'Coffee Cups', suffix: '+ ☕' }
  ];

  static readonly skills: Skill[] = [
    // Frontend
    { name: 'TypeScript', level: 95, category: 'frontend' },
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'Next.js', level: 88, category: 'frontend' },
    { name: 'Vue.js', level: 85, category: 'frontend' },
    { name: 'CSS/SCSS', level: 95, category: 'frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'frontend' },
    // Backend
    { name: 'Node.js', level: 92, category: 'backend' },
    { name: 'Express', level: 90, category: 'backend' },
    { name: 'Python', level: 85, category: 'backend' },
    { name: 'PostgreSQL', level: 88, category: 'backend' },
    { name: 'MongoDB', level: 85, category: 'backend' },
    { name: 'Redis', level: 80, category: 'backend' },
    // Tools
    { name: 'Git', level: 95, category: 'tool' },
    { name: 'Docker', level: 85, category: 'tool' },
    { name: 'AWS', level: 82, category: 'tool' },
    { name: 'CI/CD', level: 88, category: 'tool' }
  ];

  static readonly projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Complete full-stack e-commerce solution with real-time inventory, payment processing, order management, and analytics dashboard. Built with microservices architecture.',
      technologies: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      image: '🛒',
      featured: true,
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'SaaS Analytics Dashboard',
      description: 'Real-time analytics platform with interactive data visualization, custom reporting, and automated insights. Supports multiple data sources and export formats.',
      technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Chart.js'],
      image: '📊',
      featured: true,
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Collaborative Task Manager',
      description: 'Team collaboration tool with real-time updates, kanban boards, time tracking, and automated workflows. Built with WebSocket for instant synchronization.',
      technologies: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
      image: '✅',
      featured: true,
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Full-featured social networking application with user profiles, posts, comments, real-time messaging, and content moderation. Scalable cloud architecture.',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'AWS S3', 'Redis'],
      image: '📱',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Learning Management System',
      description: 'Comprehensive LMS with video streaming, progress tracking, quizzes, certificates, and analytics. Supports multiple course formats and payment integration.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'FFmpeg', 'Stripe', 'AWS'],
      image: '🎓',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'API Gateway & Management',
      description: 'Centralized API management system with rate limiting, authentication, monitoring, and documentation. Built for microservices architecture.',
      technologies: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'Redis', 'Docker'],
      image: '🔌',
      link: '#',
      github: '#'
    }
  ];

  static readonly socialLinks: SocialLink[] = [
    { name: 'GitHub', url: '#', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: '#', icon: 'fab fa-linkedin' },
    { name: 'Twitter', url: '#', icon: 'fab fa-x-twitter' },
    { name: 'Email', url: 'mailto:hamse.mo@example.com', icon: 'fas fa-envelope' }
  ];

  static readonly navItems: NavItem[] = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];
}

// ============ THEME MANAGER ============
class ThemeManager {
  private currentTheme: 'light' | 'dark' = 'dark';
  private themeToggle: HTMLElement | null = null;

  constructor() {
    this.loadTheme();
  }

  private loadTheme(): void {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved) {
      this.currentTheme = saved;
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = prefersDark ? 'dark' : 'light';
    }
    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
  }

  private createThemeToggle(): void {
    this.themeToggle = document.createElement('button');
    this.themeToggle.className = 'theme-toggle';
    this.themeToggle.setAttribute('aria-label', 'Toggle theme');
    this.themeToggle.innerHTML = this.currentTheme === 'dark' 
      ? '<i class="fas fa-sun"></i>' 
      : '<i class="fas fa-moon"></i>';
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme();
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.innerHTML = this.currentTheme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
    }
  }

  getToggle(): HTMLElement | null {
    return this.themeToggle;
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.currentTheme;
  }
}

// ============ PORTFOLIO APP ============
class PortfolioApp {
  private themeManager: ThemeManager;
  private app: HTMLElement;

  constructor() {
    this.app = document.getElementById('app')!;
    this.themeManager = new ThemeManager();
    this.render();
    this.initialize();
  }

  private render(): void {
    this.app.innerHTML = `
      ${this.renderNavbar()}
      ${this.renderHero()}
      ${this.renderAbout()}
      ${this.renderSkills()}
      ${this.renderProjects()}
      ${this.renderContact()}
      ${this.renderFooter()}
    `;
  }

  private renderNavbar(): string {
    const navItems = PortfolioData.navItems.map(item => 
      `<li><a href="${item.href}" class="nav-link" data-section="${item.id}">${item.label}</a></li>`
    ).join('');
    
    return `
      <nav class="navbar" id="navbar">
        <div class="nav-container">
          <div class="logo">
            <span class="logo-text">${PortfolioData.personalInfo.firstName[0]}${PortfolioData.personalInfo.lastName[0]}</span>
            <span class="logo-badge">2025</span>
          </div>
          <ul class="nav-menu" id="navMenu">
            ${navItems}
          </ul>
          <div class="nav-actions">
            <button class="theme-toggle" aria-label="Toggle theme">
              <i class="fas fa-${this.themeManager.getCurrentTheme() === 'dark' ? 'sun' : 'moon'}"></i>
            </button>
            <div class="hamburger" id="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  private renderHero(): string {
    const socialLinks = PortfolioData.socialLinks.map(link =>
      `<a href="${link.url}" class="social-link" aria-label="${link.name}" target="_blank" rel="noopener"><i class="${link.icon}"></i></a>`
    ).join('');

    return `
      <section id="home" class="hero">
        <div class="hero-background"></div>
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">Portfolio 2025</div>
            <h1 class="hero-title">
              <span class="greeting">Hello, I'm</span>
              <span class="name">${PortfolioData.personalInfo.name}</span>
            </h1>
            <p class="hero-subtitle">${PortfolioData.personalInfo.title}</p>
            <p class="hero-description">${PortfolioData.personalInfo.description}</p>
            <div class="hero-buttons">
              <a href="#projects" class="btn btn-primary">
                <span>View My Work</span>
                <i class="fas fa-arrow-right"></i>
              </a>
              <a href="#contact" class="btn btn-outline">
                <span>Get In Touch</span>
                <i class="fas fa-envelope"></i>
              </a>
            </div>
            <div class="social-links">
              ${socialLinks}
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-avatar">
              <div class="avatar-gradient"></div>
              <i class="fas fa-code"></i>
            </div>
            <div class="floating-elements">
              <div class="float-icon" style="--delay: 0s"><i class="fab fa-react"></i></div>
              <div class="float-icon" style="--delay: 1s"><i class="fab fa-node-js"></i></div>
              <div class="float-icon" style="--delay: 2s"><i class="fab fa-python"></i></div>
            </div>
          </div>
        </div>
        <div class="scroll-indicator">
          <a href="#about" aria-label="Scroll down">
            <i class="fas fa-chevron-down"></i>
          </a>
        </div>
      </section>
    `;
  }

  private renderAbout(): string {
    const stats = PortfolioData.stats.map(stat =>
      `<div class="stat-item">
        <div class="stat-number" data-target="${stat.value}">0${stat.suffix || ''}</div>
        <div class="stat-label">${stat.label}</div>
      </div>`
    ).join('');

    const bio = PortfolioData.personalInfo.bio.map(p => `<p>${p}</p>`).join('');

    return `
      <section id="about" class="section about">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">About Me</span>
            <h2 class="section-title">Building Digital Excellence</h2>
          </div>
          <div class="about-content">
            <div class="about-text">
              ${bio}
              <div class="about-stats">
                ${stats}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private renderSkills(): string {
    const frontend = PortfolioData.skills.filter(s => s.category === 'frontend');
    const backend = PortfolioData.skills.filter(s => s.category === 'backend');
    const tools = PortfolioData.skills.filter(s => s.category === 'tool');

    const renderSkillCategory = (skills: Skill[], title: string) => {
      const skillItems = skills.map(skill => `
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-percentage">${skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" data-width="${skill.level}" style="width: 0%"></div>
          </div>
        </div>
      `).join('');

      return `
        <div class="skill-category">
          <h3 class="skill-category-title">
            <i class="fas fa-${title === 'Frontend' ? 'paint-brush' : title === 'Backend' ? 'server' : 'tools'}"></i>
            ${title}
          </h3>
          <div class="skill-items">${skillItems}</div>
        </div>
      `;
    };

    return `
      <section id="skills" class="section skills">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Skills</span>
            <h2 class="section-title">Technologies & Expertise</h2>
          </div>
          <div class="skills-grid">
            ${renderSkillCategory(frontend, 'Frontend')}
            ${renderSkillCategory(backend, 'Backend')}
            ${renderSkillCategory(tools, 'Tools & DevOps')}
          </div>
        </div>
      </section>
    `;
  }

  private renderProjects(): string {
    const featuredProjects = PortfolioData.projects.filter(p => p.featured);
    const otherProjects = PortfolioData.projects.filter(p => !p.featured);

    const renderProjectCard = (project: Project) => `
      <div class="project-card" data-project-id="${project.id}">
        <div class="project-header">
          <div class="project-icon">${project.image}</div>
          <div class="project-badge">Featured</div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-technologies">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            ${project.link ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Live</a>` : ''}
            ${project.github ? `<a href="${project.github}" class="project-link" target="_blank" rel="noopener"><i class="fab fa-github"></i> Code</a>` : ''}
          </div>
        </div>
      </div>
    `;

    return `
      <section id="projects" class="section projects">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Portfolio</span>
            <h2 class="section-title">Featured Projects</h2>
          </div>
          <div class="projects-grid" id="projectsGrid">
            ${featuredProjects.map(renderProjectCard).join('')}
            ${otherProjects.map(renderProjectCard).join('')}
          </div>
        </div>
      </section>
    `;
  }

  private renderContact(): string {
    return `
      <section id="contact" class="section contact">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Contact</span>
            <h2 class="section-title">Let's Work Together</h2>
          </div>
          <div class="contact-content">
            <div class="contact-info">
              <p class="contact-description">I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
              <div class="contact-details">
                <div class="contact-item">
                  <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:${PortfolioData.personalInfo.email}">${PortfolioData.personalInfo.email}</a>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon"><i class="fas fa-phone"></i></div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:${PortfolioData.personalInfo.phone.replace(/\s/g, '')}">${PortfolioData.personalInfo.phone}</a>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
                  <div>
                    <h4>Location</h4>
                    <span>${PortfolioData.personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <form class="contact-form" id="contactForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" required>
                </div>
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" required>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                <span>Send Message</span>
                <i class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    `;
  }

  private renderFooter(): string {
    const socialLinks = PortfolioData.socialLinks.slice(0, 3).map(link =>
      `<a href="${link.url}" class="footer-social-link" aria-label="${link.name}" target="_blank" rel="noopener"><i class="${link.icon}"></i></a>`
    ).join('');

    return `
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <p>&copy; ${PortfolioData.personalInfo.year} ${PortfolioData.personalInfo.name}. All rights reserved.</p>
            <div class="footer-social">
              ${socialLinks}
            </div>
          </div>
          <div class="footer-bottom">
            <p>Built with <i class="fas fa-heart"></i> using TypeScript, CSS, and modern web technologies</p>
          </div>
        </div>
      </footer>
    `;
  }

  private initialize(): void {
    try {
      this.setupNavigation();
      this.setupThemeToggle();
      this.setupContactForm();
      this.setupAnimations();
      this.setupSmoothScroll();
    } catch (error) {
      console.error('Error initializing portfolio app:', error);
      // Fallback: at least show the content
      if (this.app) {
        this.app.innerHTML = '<div class="error-message"><h1>Portfolio</h1><p>An error occurred loading the portfolio. Please refresh the page.</p></div>';
      }
    }
  }

  private setupThemeToggle(): void {
    setTimeout(() => {
      const toggle = document.querySelector('.theme-toggle');
      if (toggle) {
        toggle.addEventListener('click', () => {
          this.themeManager.toggleTheme();
        });
      }
    }, 100);
  }

  private setupNavigation(): void {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
      });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu && hamburger) {
          navMenu.classList.remove('active');
          hamburger.classList.remove('active');
        }
      });
    });

    // Navbar scroll effect with throttling for performance
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    let ticking = false;
    
    const updateNavbar = () => {
      if (navbar) {
        const scrollTop = window.scrollY;
        navbar.classList.toggle('scrolled', scrollTop > 100);
        lastScrollTop = scrollTop;
      }
      ticking = false;
    };
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    }, { passive: true });
  }

  private setupContactForm(): void {
    const form = document.getElementById('contactForm') as HTMLFormElement;
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const button = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      const originalHTML = button.innerHTML;
      
      button.innerHTML = '<i class="fas fa-check"></i> Sent!';
      button.disabled = true;
      
      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.disabled = false;
        form.reset();
      }, 3000);
    });
  }

  private setupAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    // Section animations
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
      sectionObserver.observe(section);
    });

    // Skill bars animation
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progress = entry.target as HTMLElement;
          const width = progress.getAttribute('data-width');
          if (width) {
            setTimeout(() => {
              progress.style.width = `${width}%`;
            }, 300);
            skillObserver.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.skill-progress').forEach(bar => {
      skillObserver.observe(bar);
    });

    // Stats counter animation
    const animateCounter = (element: HTMLElement, target: number) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = `${target}`;
          clearInterval(timer);
        } else {
          element.textContent = `${Math.floor(current)}`;
        }
      }, 30);
    };

    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stat = entry.target as HTMLElement;
          const target = parseInt(stat.getAttribute('data-target') || '0');
          const suffix = stat.textContent?.match(/[+☕]/)?.[0] || '';
          animateCounter(stat, target);
          statObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.stat-number').forEach(stat => {
      statObserver.observe(stat);
    });
  }

  private setupSmoothScroll(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLAnchorElement;
        const targetId = target.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offsetTop = (targetElement as HTMLElement).offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});

export default PortfolioApp;
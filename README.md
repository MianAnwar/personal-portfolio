# 🚀 Professional Portfolio Website

A modern, feature-rich personal portfolio application built with Angular 20 and cutting-edge web technologies. This portfolio showcases your experience, skills, projects, and professional achievements with stunning animations and interactive elements.

## 📚 Documentation

- **[Setup & Customization Guide](./SETUP_GUIDE.md)** - Complete guide for personalizing your portfolio
- **[Deployment Guide](./DEPLOYMENT.md)** - Instructions for deploying to various platforms
- **[Project Details](./PROJECT_README.md)** - Additional project information and notes

## 📸 Screenshots

### Dark Mode
![Portfolio Dark Mode - Hero Section](https://github.com/MianAnwar/personal-portfolio/blob/main/screenshots/dark-home-page.png?raw=true)
*Hero section with animated typing effect and dark theme*

![Portfolio Dark Mode - Full Page](https://github.com/MianAnwar/personal-portfolio/blob/main/screenshots/dark-full-part1.png?raw=true)
*Complete portfolio overview in dark mode*

### Light Mode
![Portfolio Light Mode - Hero Section](https://github.com/MianAnwar/personal-portfolio/blob/main/screenshots/light-home-page.png?raw=true)
*Hero section with light theme*

![Portfolio Light Mode - Full Page](https://github.com/MianAnwar/personal-portfolio/blob/main/screenshots/light-full-part1.png?raw=true)
*Complete portfolio overview in light mode*

## ✨ Features

### Core Sections
- **🎯 Hero Section** - Eye-catching introduction with animated typing effect
- **👤 About** - Personal bio with profile image and statistics
- **📊 Animated Statistics** - Count-up animations triggered on scroll
- **💡 Skills** - Interactive radar chart and categorized skill bars
- **💼 Experience** - Beautiful timeline of work history
- **🛠️ Services** - Showcase of services offered with pricing
- **🏆 Certifications** - Professional achievements and credentials
- **📱 Projects** - Interactive 3D project cards with filtering
- **📝 Blog** - Article showcase with category filtering
- **⭐ Testimonials** - Client reviews and ratings
- **❓ FAQ** - Accordion-style frequently asked questions
- **🌐 Social Proof** - GitHub stats, badges, and social metrics
- **📧 Contact** - Functional contact form with validation

### Advanced Features
- **🌓 Dark/Light Mode** - Smooth theme switching with local storage persistence
- **📱 Fully Responsive** - Optimized for all devices
- **🎬 Scroll Animations** - AOS (Animate On Scroll) throughout
- **📈 Chart.js Integration** - Interactive skills visualization
- **3️⃣ 3D Tilt Effects** - Vanilla Tilt on project cards
- **⬆️ Back-to-Top Button** - Smooth scrolling navigation
- **⚡ Loading Screen** - Professional animated loader
- **🚀 SSR Ready** - Server-side rendering enabled
- **📥 Resume Download** - Direct PDF download functionality

## 🛠️ Technology Stack

- **Framework:** Angular 20.3.0 (Standalone Components, Zoneless)
- **Language:** TypeScript 5.8.1
- **Styling:** SCSS with custom theme system
- **UI Library:** Angular Material 20.2.11
- **Animations:** AOS (Animate On Scroll) 2.3.4
- **Charts:** Chart.js with ng2-charts
- **3D Effects:** Vanilla Tilt 1.8.3
- **State Management:** Angular Signals
- **HTTP Client:** RxJS 7.8.0
- **Build Tool:** Angular CLI with Vite
- **SSR:** Angular Universal

## 📦 Installation

To start a local development server, run:

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 🎨 Customization Guide

### 1. Personal Information
Update your personal data in `/src/app/services/portfolio-data.service.ts`:
- Name, title, bio
- Skills and experience
- Projects and certifications
- Social media links
- Contact information

### 2. Profile Image
Place your profile image in `/public/images/` as `profile.jpg`

### 3. Resume PDF
Place your resume in `/public/documents/` as `resume.pdf`

### 4. Project Screenshots
Add project images to `/public/images/projects/`

### 5. GitHub Stats
Update GitHub username in `/src/app/components/social-proof/social-proof.ts`:
```typescript
githubUsername = 'your-actual-username';
```

### 6. Theme Colors
Customize colors in `/src/styles.scss`

## 🚀 Build & Deploy

### Development Build
```bash
npm start
```

### Production Build
```bash
npm run build
```

### Deploy to Netlify/Vercel
Output directory: `dist/personal-portfolio/browser`

## 🐛 Troubleshooting

- **Images not loading**: Place images in `/public/` folder
- **Resume download not working**: Ensure `resume.pdf` exists in `/public/documents/`
- **Dark mode not persisting**: Check browser localStorage is enabled

## 📄 License

MIT License - feel free to use this portfolio for your own projects!

---

**Built with ❤️ using Angular 20**

## Angular CLI Information

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.8.

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

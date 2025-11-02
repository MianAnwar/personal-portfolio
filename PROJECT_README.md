# Personal Portfolio - Mian Muhammad Anwar

A modern, responsive portfolio website built with Angular to showcase professional experience, skills, and projects.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Component-Based**: Modular architecture with reusable Angular components
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **SSR Enabled**: Server-Side Rendering for improved performance and SEO
- **Dark Theme Support**: Optional dark mode (ready to implement)
- **Contact Form**: Reactive forms with validation
- **Smooth Scrolling**: Enhanced user experience with smooth navigation

## 📋 Sections

1. **Hero** - Eye-catching introduction with animated typing effect
2. **About** - Professional bio and career highlights
3. **Skills** - Technical skills with visual proficiency indicators
4. **Experience** - Professional work history and education timeline
5. **Projects** - Portfolio showcase with filtering capabilities
6. **Contact** - Contact form and social media links
7. **Footer** - Quick navigation and additional information

## 🛠️ Technologies Used

- **Angular 20** - Frontend framework
- **TypeScript** - Programming language
- **SCSS** - Styling
- **Angular Material** - UI component library
- **RxJS** - Reactive programming
- **Angular Animations** - Smooth transitions
- **Angular SSR** - Server-side rendering

## 📦 Project Structure

```
src/
├── app/
│   ├── components/          # All UI components
│   │   ├── header/         # Navigation header
│   │   ├── hero/           # Hero section
│   │   ├── about/          # About section
│   │   ├── skills/         # Skills section
│   │   ├── experience/     # Experience timeline
│   │   ├── projects/       # Projects showcase
│   │   ├── contact/        # Contact form
│   │   └── footer/         # Footer
│   ├── services/           # Business logic services
│   ├── models/             # TypeScript interfaces
│   └── shared/             # Shared components/utilities
├── assets/
│   ├── images/             # Image files
│   └── documents/          # Documents (resume, etc.)
└── styles.scss             # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Angular CLI

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## 🔧 Configuration

### Update Personal Information

1. **Portfolio Data Service** (`src/app/services/portfolio-data.service.ts`)
   - Update skills, experiences, projects, and education data

2. **Hero Component** (`src/app/components/hero/hero.ts`)
   - Customize name, titles, and introduction text

3. **Contact Information**
   - Update email, location, and social media links throughout the application

### Add Resume

Place your resume PDF in `src/assets/documents/resume.pdf`

### Add Images

- Add your photo to `src/assets/images/`
- Update image references in components
- Add project screenshots to `src/assets/images/projects/`

## 📝 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run serve:ssr:personal-portfolio` - Run SSR server

## 🎨 Customization

### Colors

Update the color scheme in `src/theme.scss` and `src/styles.scss`:
- Primary color: `--primary-color`
- Accent color: `--accent-color`
- Text color: `--text-color`

### Fonts

Fonts are loaded from Google Fonts. Update in `src/index.html` if needed.

## 📱 Responsive Breakpoints

- Mobile: < 576px
- Tablet: 576px - 968px
- Desktop: > 968px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

- **Netlify**: Connect your repository and deploy automatically
- **Vercel**: Import project and deploy with one click
- **Firebase Hosting**: Use Firebase CLI to deploy
- **GitHub Pages**: Deploy static build

## 🔄 Future Enhancements

- [ ] Implement dark/light theme toggle
- [ ] Add blog section
- [ ] Integrate CMS for easy content management
- [ ] Add testimonials section
- [ ] Implement email service (EmailJS or SendGrid)
- [ ] Add project detail modals
- [ ] Integrate Google Analytics
- [ ] Add PWA capabilities
- [ ] Multi-language support

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Mian Muhammad Anwar**
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [@yourusername]

## 🙏 Acknowledgments

- Angular Team for the amazing framework
- Design inspiration from various portfolio websites
- Icons from Material Icons and custom SVGs

---

**Note**: Remember to update all placeholder content with your actual information before deploying!

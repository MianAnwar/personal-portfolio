import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Skill,
  Experience,
  Project,
  Education,
  SocialLink
} from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  // Skills data
  private skills: Skill[] = [
    { name: 'Angular', level: 90, category: 'frontend', icon: 'angular' },
    { name: 'React', level: 85, category: 'frontend', icon: 'react' },
    { name: 'TypeScript', level: 90, category: 'frontend', icon: 'typescript' },
    { name: 'JavaScript', level: 95, category: 'frontend', icon: 'javascript' },
    { name: 'HTML5/CSS3', level: 95, category: 'frontend', icon: 'html5' },
    { name: 'Node.js', level: 85, category: 'backend', icon: 'nodejs' },
    { name: 'Express.js', level: 80, category: 'backend', icon: 'express' },
    { name: 'MongoDB', level: 75, category: 'database', icon: 'mongodb' },
    { name: 'SQL', level: 80, category: 'database', icon: 'database' },
    { name: 'Git', level: 90, category: 'tools', icon: 'git' },
    { name: 'Docker', level: 70, category: 'tools', icon: 'docker' },
    { name: 'AWS', level: 65, category: 'tools', icon: 'aws' }
  ];

  // Experience data
  private experiences: Experience[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      location: 'Remote',
      startDate: '2022-01',
      endDate: 'Present',
      description: 'Leading frontend development initiatives and mentoring junior developers.',
      responsibilities: [
        'Architected and developed scalable Angular applications',
        'Implemented responsive UI components using Angular Material',
        'Collaborated with cross-functional teams to deliver features',
        'Conducted code reviews and mentored junior developers'
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'NgRx']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      location: 'City, Country',
      startDate: '2020-06',
      endDate: '2021-12',
      description: 'Developed full-stack web applications for various clients.',
      responsibilities: [
        'Built responsive web applications using modern frameworks',
        'Designed and implemented RESTful APIs',
        'Integrated third-party services and APIs',
        'Optimized application performance and SEO'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL']
    }
  ];

  // Projects data
  private projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      longDescription: 'A comprehensive e-commerce platform built with Angular and Node.js, featuring product catalog, shopping cart, secure checkout, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      category: ['web', 'fullstack'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application',
      longDescription: 'Real-time task management system with team collaboration features, drag-and-drop interface, and notifications.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      technologies: ['React', 'Firebase', 'Material-UI'],
      category: ['web', 'frontend'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information dashboard',
      longDescription: 'Interactive weather dashboard showing current conditions, forecasts, and historical data with beautiful visualizations.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      technologies: ['Angular', 'Chart.js', 'OpenWeather API'],
      category: ['web', 'frontend'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
      featured: false
    }
  ];

  // Education data
  private education: Education[] = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      location: 'City, Country',
      startDate: '2016',
      endDate: '2020',
      description: 'Focused on software engineering and web development',
      gpa: '3.8/4.0'
    }
  ];

  // Social links
  private socialLinks: SocialLink[] = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/yourusername' },
    { name: 'Email', icon: 'email', url: 'mailto:your.email@example.com' }
  ];

  // Observable streams
  private skillsSubject = new BehaviorSubject<Skill[]>(this.skills);
  private experiencesSubject = new BehaviorSubject<Experience[]>(this.experiences);
  private projectsSubject = new BehaviorSubject<Project[]>(this.projects);
  private educationSubject = new BehaviorSubject<Education[]>(this.education);
  private socialLinksSubject = new BehaviorSubject<SocialLink[]>(this.socialLinks);

  // Public observables
  skills$ = this.skillsSubject.asObservable();
  experiences$ = this.experiencesSubject.asObservable();
  projects$ = this.projectsSubject.asObservable();
  education$ = this.educationSubject.asObservable();
  socialLinks$ = this.socialLinksSubject.asObservable();

  constructor() {}

  // Getters
  getSkills(): Skill[] {
    return this.skills;
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  getExperiences(): Experience[] {
    return this.experiences;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  getProjectsByCategory(category: string): Project[] {
    return this.projects.filter(project => project.category.includes(category));
  }

  getEducation(): Education[] {
    return this.education;
  }

  getSocialLinks(): SocialLink[] {
    return this.socialLinks;
  }
}

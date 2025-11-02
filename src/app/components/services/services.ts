import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price?: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Full-stack web applications with modern frameworks and best practices',
      features: [
        'Responsive design & mobile-first approach',
        'RESTful API development',
        'Database design & optimization',
        'Progressive Web Apps (PWA)',
        'Performance optimization'
      ],
      price: 'From $5,000'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: [
        'React Native & Flutter apps',
        'Native iOS/Android development',
        'App Store deployment',
        'Push notifications & analytics',
        'Offline-first architecture'
      ],
      price: 'From $8,000'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality',
      features: [
        'User research & personas',
        'Wireframing & prototyping',
        'Interactive mockups',
        'Design systems & style guides',
        'Usability testing'
      ],
      price: 'From $3,000'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies',
      features: [
        'AWS, Azure, GCP deployment',
        'CI/CD pipeline setup',
        'Docker & Kubernetes',
        'Serverless architecture',
        'Auto-scaling & load balancing'
      ],
      price: 'From $4,000'
    },
    {
      icon: '🔒',
      title: 'Security Audits',
      description: 'Comprehensive security assessments and penetration testing',
      features: [
        'Vulnerability scanning',
        'Code security review',
        'OWASP compliance',
        'Security best practices',
        'Detailed audit reports'
      ],
      price: 'From $2,500'
    },
    {
      icon: '📊',
      title: 'Consulting',
      description: 'Technical consulting and architecture planning for your projects',
      features: [
        'Technology stack selection',
        'Architecture design',
        'Performance optimization',
        'Code review & refactoring',
        'Team training & mentoring'
      ],
      price: 'From $150/hour'
    }
  ];
}

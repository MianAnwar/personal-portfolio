import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: string;
  credentialUrl?: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrls: ['./certifications.scss']
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      icon: '☁️',
      credentialUrl: '#'
    },
    {
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2024',
      icon: '🌐',
      credentialUrl: '#'
    },
    {
      name: 'Angular Certified Developer',
      issuer: 'Angular',
      date: '2023',
      icon: '🅰️',
      credentialUrl: '#'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2023',
      icon: '🍃',
      credentialUrl: '#'
    },
    {
      name: 'Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2024',
      icon: '⎈',
      credentialUrl: '#'
    },
    {
      name: 'Scrum Master Certified',
      issuer: 'Scrum Alliance',
      date: '2023',
      icon: '🎯',
      credentialUrl: '#'
    }
  ];

  achievements = [
    { icon: '🏆', value: '50+', label: 'Projects Completed' },
    { icon: '⭐', value: '98%', label: 'Client Satisfaction' },
    { icon: '👥', value: '30+', label: 'Happy Clients' },
    { icon: '💼', value: '5+', label: 'Years Experience' }
  ];
}

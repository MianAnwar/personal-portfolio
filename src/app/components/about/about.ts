import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  highlights = [
    'Full Stack Web Development',
    'Modern Frontend Frameworks (Angular, React)',
    'Backend Development (Node.js, Express)',
    'Database Design & Management',
    'RESTful API Development',
    'Responsive & Mobile-First Design',
    'Version Control & CI/CD',
    'Agile & Scrum Methodologies'
  ];
}

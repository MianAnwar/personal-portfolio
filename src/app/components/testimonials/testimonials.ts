import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Tech Corp',
      image: 'https://i.pravatar.cc/150?img=5',
      text: 'Working with Mian was an absolute pleasure. His technical expertise and attention to detail resulted in a product that exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupHub',
      image: 'https://i.pravatar.cc/150?img=12',
      text: 'Outstanding developer! Mian delivered our complex web application on time and with exceptional quality. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Creative Director',
      company: 'Design Studio',
      image: 'https://i.pravatar.cc/150?img=9',
      text: 'Mian transformed our design concepts into a beautiful, functional website. His communication and problem-solving skills are top-notch.',
      rating: 5
    }
  ];

  ngOnInit() {}

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}

import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  navLinks = [
    { label: 'Home', path: '#home' },
    { label: 'About', path: '#about' },
    { label: 'Skills', path: '#skills' },
    { label: 'Experience', path: '#experience' },
    { label: 'Services', path: '#services' },
    { label: 'Projects', path: '#projects' },
    { label: 'Contact', path: '#contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.closeMobileMenu();

    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

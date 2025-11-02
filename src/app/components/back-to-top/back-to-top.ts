import { Component, HostListener, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      *ngIf="isVisible"
      class="back-to-top"
      (click)="scrollToTop()"
      aria-label="Back to top">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </button>
  `,
  styles: [`
    .back-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      background: var(--gradient-primary);
      border: none;
      border-radius: 50%;
      color: white;
      cursor: pointer;
      box-shadow: var(--shadow-lg);
      transition: var(--transition);
      z-index: 999;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeInUp 0.3s ease-out;

      &:hover {
        transform: translateY(-5px) scale(1.1);
        box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);
      }

      &:active {
        transform: translateY(-3px) scale(1.05);
      }

      svg {
        animation: bounce 2s infinite;
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }

    @media (max-width: 768px) {
      .back-to-top {
        bottom: 20px;
        right: 20px;
        width: 45px;
        height: 45px;
      }
    }
  `]
})
export class BackToTopComponent {
  isVisible = false;
  private platformId = inject(PLATFORM_ID);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isVisible = window.pageYOffset > 300;
    }
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}

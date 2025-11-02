import { Component, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="theme-toggle"
      (click)="toggleTheme()"
      [attr.aria-label]="isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
      title="Toggle theme">
      <div class="toggle-track">
        <div class="toggle-thumb" [class.dark]="isDark()">
          <svg *ngIf="!isDark()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg *ngIf="isDark()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
      </div>
    </button>
  `,
  styles: [`
    .theme-toggle {
      position: fixed;
      top: 90px;
      right: 30px;
      z-index: 998;
      background: var(--card-bg);
      border: 2px solid var(--border-color);
      border-radius: 50px;
      padding: 4px;
      cursor: pointer;
      box-shadow: var(--shadow-md);
      transition: var(--transition);

      &:hover {
        transform: scale(1.05);
        box-shadow: var(--shadow-lg);
        border-color: var(--primary-color);
      }

      @media (max-width: 768px) {
        top: 70px;
        right: 20px;
      }
    }

    .toggle-track {
      width: 60px;
      height: 30px;
      background: var(--bg-secondary);
      border-radius: 50px;
      position: relative;
      transition: var(--transition);
    }

    .toggle-thumb {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 24px;
      height: 24px;
      background: var(--gradient-primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

      svg {
        color: white;
      }

      &.dark {
        transform: translateX(30px);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  isDark = signal(false);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Check saved preference
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
      this.isDark.set(isDarkMode);
      this.applyTheme(isDarkMode);
    }
  }

  toggleTheme() {
    const newTheme = !this.isDark();
    this.isDark.set(newTheme);
    this.applyTheme(newTheme);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    }
  }

  private applyTheme(isDark: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      if (isDark) {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
    }
  }
}

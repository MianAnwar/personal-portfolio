import { Component, OnInit, PLATFORM_ID, inject, signal, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Stat {
  icon: string;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

@Component({
  selector: 'app-stats-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          @for (stat of stats; track stat.label) {
            <div class="stat-card"
                 #statCard
                 [attr.data-aos]="'zoom-in'"
                 [attr.data-aos-delay]="$index * 100">
              <div class="stat-icon" [style.color]="stat.color">
                {{ stat.icon }}
              </div>
              <div class="stat-value" [style.color]="stat.color">
                {{ currentValues()[$index] }}{{ stat.suffix }}
              </div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .stats-section {
      padding: 80px 0;
      background: var(--bg-color);

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;

        @media (max-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
      }

      .stat-card {
        text-align: center;
        padding: 30px;
        background: var(--card-bg);
        border-radius: 20px;
        box-shadow: var(--shadow-md);
        transition: var(--transition);

        &:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: var(--shadow-lg);

          .stat-icon {
            transform: scale(1.2) rotate(10deg);
          }
        }

        .stat-icon {
          font-size: 3rem;
          margin-bottom: 15px;
          display: inline-block;
          transition: var(--transition);
          filter: drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3));
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
          font-variant-numeric: tabular-nums;

          @media (max-width: 768px) {
            font-size: 2rem;
          }
        }

        .stat-label {
          font-size: 1rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
      }
    }
  `]
})
export class StatsCounterComponent implements OnInit, AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  @ViewChildren('statCard', { read: ElementRef }) statCards!: QueryList<ElementRef>;

  stats: Stat[] = [
    { icon: '🎯', value: 50, suffix: '+', label: 'Projects Completed', color: '#6366f1' },
    { icon: '⭐', value: 98, suffix: '%', label: 'Client Satisfaction', color: '#f59e0b' },
    { icon: '👥', value: 30, suffix: '+', label: 'Happy Clients', color: '#10b981' },
    { icon: '⚡', value: 5, suffix: '+', label: 'Years Experience', color: '#8b5cf6' }
  ];

  currentValues = signal<number[]>(new Array(this.stats.length).fill(0));
  private hasAnimated = false;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  private setupIntersectionObserver() {
    if (!isPlatformBrowser(this.platformId) || this.hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe the first stat card
    if (this.statCards && this.statCards.first) {
      observer.observe(this.statCards.first.nativeElement);
    } else {
      // Fallback: observe after a short delay
      setTimeout(() => {
        if (this.statCards && this.statCards.first) {
          observer.observe(this.statCards.first.nativeElement);
        }
      }, 100);
    }
  }

  private animateCounters() {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    this.stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValues = [...this.currentValues()];

        if (currentStep >= steps) {
          newValues[index] = stat.value;
          this.currentValues.set(newValues);
          clearInterval(timer);
        } else {
          newValues[index] = Math.floor(increment * currentStep);
          this.currentValues.set(newValues);
        }
      }, interval);
    });
  }
}

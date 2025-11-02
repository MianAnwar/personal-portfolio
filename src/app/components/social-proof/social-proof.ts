import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface SocialProof {
  label: string;
  value: string;
  icon: string;
  color: string;
  link?: string;
}

@Component({
  selector: 'app-social-proof',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="social-proof-section">
      <div class="container">
        <div class="proof-header" data-aos="fade-up">
          <h3>Trusted by Developers & Companies Worldwide</h3>
        </div>

        <div class="proof-grid">
          @for (proof of socialProofs; track proof.label) {
            <div class="proof-card"
                 [attr.data-aos]="'zoom-in'"
                 [attr.data-aos-delay]="$index * 50">
              @if (proof.link) {
                <a [href]="proof.link" target="_blank" class="proof-link">
                  <div class="proof-icon" [style.color]="proof.color">
                    {{ proof.icon }}
                  </div>
                  <div class="proof-value" [style.color]="proof.color">
                    {{ proof.value }}
                  </div>
                  <div class="proof-label">{{ proof.label }}</div>
                </a>
              } @else {
                <div class="proof-content">
                  <div class="proof-icon" [style.color]="proof.color">
                    {{ proof.icon }}
                  </div>
                  <div class="proof-value" [style.color]="proof.color">
                    {{ proof.value }}
                  </div>
                  <div class="proof-label">{{ proof.label }}</div>
                </div>
              }
            </div>
          }
        </div>

        <!-- GitHub Stats Cards -->
        <div class="github-stats" data-aos="fade-up" data-aos-delay="300">
          <h4>GitHub Activity</h4>
          <div class="stats-cards">
            <img
              src="https://github-readme-stats.vercel.app/api?username={{ githubUsername }}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1e293b&title_color=6366f1&icon_color=f59e0b&text_color=f9fafb"
              alt="GitHub Stats"
              loading="lazy"
              class="github-card">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user={{ githubUsername }}&theme=tokyonight&hide_border=true&background=1e293b&ring=6366f1&fire=f59e0b&currStreakLabel=f9fafb"
              alt="GitHub Streak"
              loading="lazy"
              class="github-card">
          </div>

          <!-- Top Languages -->
          <div class="languages-card" data-aos="fade-up" data-aos-delay="400">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username={{ githubUsername }}&layout=compact&theme=tokyonight&hide_border=true&bg_color=1e293b&title_color=6366f1&text_color=f9fafb"
              alt="Top Languages"
              loading="lazy"
              class="github-card">
          </div>
        </div>

        <!-- Technology Badges -->
        <div class="tech-badges" data-aos="fade-up" data-aos-delay="500">
          <h4>Technologies & Certifications</h4>
          <div class="badges-grid">
            <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular">
            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
            <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
            <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
            <img src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white" alt=".NET">
            <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
            <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
            <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS">
            <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .social-proof-section {
      padding: 60px 0;
      background: var(--bg-color);

      .proof-header {
        text-align: center;
        margin-bottom: 40px;

        h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-color);
        }
      }

      .proof-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 20px;
        margin-bottom: 60px;

        @media (max-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      .proof-card {
        background: var(--card-bg);
        border-radius: 15px;
        padding: 25px 20px;
        text-align: center;
        box-shadow: var(--shadow-sm);
        transition: var(--transition);

        &:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }

        .proof-link,
        .proof-content {
          text-decoration: none;
          display: block;
        }

        .proof-icon {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .proof-value {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .proof-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
      }

      .github-stats,
      .tech-badges {
        margin-bottom: 40px;

        h4 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 25px;
          text-align: center;
        }

        .stats-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 20px;
          margin-bottom: 20px;

          @media (max-width: 768px) {
            grid-template-columns: 1fr;
          }
        }

        .languages-card {
          display: flex;
          justify-content: center;
        }

        .github-card {
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: var(--shadow-md);
          transition: var(--transition);

          &:hover {
            transform: scale(1.02);
            box-shadow: var(--shadow-lg);
          }
        }
      }

      .badges-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;

        img {
          transition: var(--transition);

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  `]
})
export class SocialProofComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  githubUsername = 'yourusername'; // Update with actual GitHub username

  socialProofs: SocialProof[] = [
    {
      label: 'GitHub Stars',
      value: '500+',
      icon: '⭐',
      color: '#f59e0b',
      link: 'https://github.com/yourusername'
    },
    {
      label: 'GitHub Followers',
      value: '200+',
      icon: '👥',
      color: '#6366f1'
    },
    {
      label: 'npm Downloads',
      value: '10K+',
      icon: '📦',
      color: '#ef4444'
    },
    {
      label: 'Stack Overflow',
      value: '2K+',
      icon: '💬',
      color: '#f97316'
    },
    {
      label: 'LinkedIn',
      value: '500+',
      icon: '🔗',
      color: '#0077b5',
      link: 'https://linkedin.com/in/yourusername'
    }
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Can fetch real stats from APIs here
      this.loadGitHubStats();
    }
  }

  private loadGitHubStats() {
    // Placeholder for loading real GitHub stats
    // You can use GitHub API to fetch real data
    console.log('GitHub stats would be loaded here');
  }
}

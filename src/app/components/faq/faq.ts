import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="faq" class="faq-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>Got questions? I've got answers</p>
        </div>

        <div class="faq-container">
          <div class="faq-list">
            @for (faq of faqs(); track $index) {
              <div class="faq-item"
                   [class.active]="faq.isOpen"
                   [attr.data-aos]="'fade-up'"
                   [attr.data-aos-delay]="$index * 50">
                <div class="faq-question" (click)="toggleFAQ($index)">
                  <h3>{{ faq.question }}</h3>
                  <div class="toggle-icon" [class.rotate]="faq.isOpen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                <div class="faq-answer" [class.show]="faq.isOpen">
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            }
          </div>

          <div class="faq-cta" data-aos="fade-left" data-aos-delay="200">
            <div class="cta-content">
              <div class="cta-icon">💬</div>
              <h3>Still have questions?</h3>
              <p>Can't find the answer you're looking for? Feel free to reach out!</p>
              <a href="#contact" class="btn-primary">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .faq-section {
      padding: 100px 0;
      background: var(--bg-secondary);

      .section-header {
        text-align: center;
        margin-bottom: 60px;

        h2 {
          font-size: 2.5rem;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.2rem;
          color: var(--text-secondary);
        }
      }

      .faq-container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 40px;
        align-items: start;

        @media (max-width: 968px) {
          grid-template-columns: 1fr;
        }
      }

      .faq-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .faq-item {
        background: var(--card-bg);
        border-radius: 15px;
        box-shadow: var(--shadow-sm);
        overflow: hidden;
        transition: var(--transition);
        border: 2px solid transparent;

        &.active {
          border-color: var(--primary-color);
          box-shadow: var(--shadow-md);
        }

        &:hover {
          box-shadow: var(--shadow-md);
        }
      }

      .faq-question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 30px;
        cursor: pointer;
        user-select: none;
        transition: var(--transition);

        &:hover {
          background: var(--bg-secondary);
        }

        h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-color);
          margin: 0;
          padding-right: 20px;
        }

        .toggle-icon {
          flex-shrink: 0;
          transition: var(--transition);
          color: var(--primary-color);

          &.rotate {
            transform: rotate(180deg);
          }

          svg {
            display: block;
          }
        }
      }

      .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;

        &.show {
          max-height: 500px;
          transition: max-height 0.4s ease-in;
        }

        p {
          padding: 0 30px 25px;
          margin: 0;
          color: var(--text-secondary);
          line-height: 1.7;
        }
      }

      .faq-cta {
        position: sticky;
        top: 100px;

        @media (max-width: 968px) {
          position: static;
        }

        .cta-content {
          background: var(--gradient-primary);
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          color: white;
          box-shadow: var(--shadow-lg);

          .cta-icon {
            font-size: 3.5rem;
            margin-bottom: 20px;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
          }

          h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
          }

          p {
            margin-bottom: 25px;
            opacity: 0.95;
            line-height: 1.6;
          }

          .btn-primary {
            display: inline-block;
            padding: 12px 30px;
            background: white;
            color: var(--primary-color);
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: var(--transition);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

            &:hover {
              transform: translateY(-3px);
              box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
            }
          }
        }
      }
    }
  `]
})
export class FaqComponent {
  faqs = signal<FAQ[]>([
    {
      question: 'What services do you offer?',
      answer: 'I offer full-stack web development, mobile app development, UI/UX design, cloud solutions, security audits, and technical consulting. I can help with everything from initial planning to deployment and maintenance.',
      isOpen: false
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I provide detailed estimates after understanding your requirements.',
      isOpen: false
    },
    {
      question: 'Do you work with startups or only established companies?',
      answer: 'I work with both! I love helping startups bring their ideas to life and also enjoy collaborating with established companies on new projects or improving existing systems.',
      isOpen: false
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in Angular, React, Node.js, TypeScript, and modern web technologies. I also have experience with cloud platforms (AWS, Azure), databases (MongoDB, PostgreSQL), and mobile development (React Native).',
      isOpen: false
    },
    {
      question: 'Do you provide maintenance and support after project completion?',
      answer: 'Yes! I offer ongoing maintenance and support packages. This includes bug fixes, updates, performance monitoring, and feature enhancements to ensure your application continues to run smoothly.',
      isOpen: false
    },
    {
      question: 'How do you handle project communication?',
      answer: 'I believe in transparent communication. I provide regular updates via your preferred channel (email, Slack, etc.), weekly progress meetings, and use project management tools to keep everything organized and trackable.',
      isOpen: false
    },
    {
      question: 'What are your payment terms?',
      answer: 'Typically, I work with a 50% upfront payment to start the project and 50% upon completion. For longer projects, we can arrange milestone-based payments. I\'m flexible and can discuss terms that work for both parties.',
      isOpen: false
    },
    {
      question: 'Can you help with an existing project or only start from scratch?',
      answer: 'I can definitely help with existing projects! Whether you need bug fixes, new features, performance optimization, or code refactoring, I have experience jumping into existing codebases and making improvements.',
      isOpen: false
    }
  ]);

  toggleFAQ(index: number) {
    const currentFaqs = this.faqs();
    currentFaqs[index].isOpen = !currentFaqs[index].isOpen;
    this.faqs.set([...currentFaqs]);
  }
}

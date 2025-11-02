import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { LoaderComponent } from './components/loader/loader';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { StatsCounterComponent } from './components/stats-counter/stats-counter';
import { SkillsComponent } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { ServicesComponent } from './components/services/services';
import { CertificationsComponent } from './components/certifications/certifications';
import { ProjectsComponent } from './components/projects/projects';
import { BlogComponent } from './components/blog/blog';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { FaqComponent } from './components/faq/faq';
import { SocialProofComponent } from './components/social-proof/social-proof';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { BackToTopComponent } from './components/back-to-top/back-to-top';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoaderComponent,
    ThemeToggleComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    StatsCounterComponent,
    SkillsComponent,
    ExperienceComponent,
    ServicesComponent,
    CertificationsComponent,
    ProjectsComponent,
    BlogComponent,
    TestimonialsComponent,
    FaqComponent,
    SocialProofComponent,
    ContactComponent,
    FooterComponent,
    BackToTopComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  title = 'personal-portfolio';
  private platformId = inject(PLATFORM_ID);

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 100
      });
    }
  }
}

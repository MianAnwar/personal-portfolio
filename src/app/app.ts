import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { LoaderComponent } from './components/loader/loader';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { CertificationsComponent } from './components/certifications/certifications';
import { ProjectsComponent } from './components/projects/projects';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { BackToTopComponent } from './components/back-to-top/back-to-top';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoaderComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    CertificationsComponent,
    ProjectsComponent,
    TestimonialsComponent,
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

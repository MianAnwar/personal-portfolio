import { Component, OnInit, AfterViewInit, inject, PLATFORM_ID, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Project } from '../../models/portfolio.models';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  private portfolioService = inject(PortfolioDataService);
  private platformId = inject(PLATFORM_ID);

  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;

  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedCategory = 'all';
  categories = ['all', 'web', 'fullstack', 'frontend'];

  ngOnInit() {
    this.allProjects = this.portfolioService.getProjects();
    this.filteredProjects = this.allProjects;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initTilt();
    }
  }

  initTilt() {
    setTimeout(() => {
      this.projectCards.forEach((card) => {
        VanillaTilt.init(card.nativeElement, {
          max: 10,
          speed: 400,
          glare: true,
          'max-glare': 0.3,
          scale: 1.05
        });
      });
    }, 100);
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredProjects = this.allProjects;
    } else {
      this.filteredProjects = this.portfolioService.getProjectsByCategory(category);
    }

    // Reinitialize tilt after filtering
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.initTilt(), 200);
    }
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    // Set a data URL for a simple gray placeholder SVG
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="%239ca3af"%3EProject Image%3C/text%3E%3C/svg%3E';
    // Prevent infinite loop
    img.onerror = null;
  }

  ngOnDestroy() {
    // Cleanup tilt instances
    if (isPlatformBrowser(this.platformId)) {
      this.projectCards?.forEach((card) => {
        const element = card.nativeElement as any;
        if (element.vanillaTilt) {
          element.vanillaTilt.destroy();
        }
      });
    }
  }
}

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

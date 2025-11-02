import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements OnInit {
  private portfolioService = inject(PortfolioDataService);

  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedCategory = 'all';
  categories = ['all', 'web', 'fullstack', 'frontend'];

  ngOnInit() {
    this.allProjects = this.portfolioService.getProjects();
    this.filteredProjects = this.allProjects;
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredProjects = this.allProjects;
    } else {
      this.filteredProjects = this.portfolioService.getProjectsByCategory(category);
    }
  }
}

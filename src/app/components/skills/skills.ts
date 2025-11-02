import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Skill } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements OnInit {
  private portfolioService = inject(PortfolioDataService);

  allSkills: Skill[] = [];
  frontendSkills: Skill[] = [];
  backendSkills: Skill[] = [];
  databaseSkills: Skill[] = [];
  toolsSkills: Skill[] = [];

  ngOnInit() {
    this.allSkills = this.portfolioService.getSkills();
    this.frontendSkills = this.portfolioService.getSkillsByCategory('frontend');
    this.backendSkills = this.portfolioService.getSkillsByCategory('backend');
    this.databaseSkills = this.portfolioService.getSkillsByCategory('database');
    this.toolsSkills = this.portfolioService.getSkillsByCategory('tools');
  }

  getSkillWidth(level: number): string {
    return `${level}%`;
  }
}

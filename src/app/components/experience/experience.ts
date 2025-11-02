import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Experience, Education } from '../../models/portfolio.models';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent implements OnInit {
  private portfolioService = inject(PortfolioDataService);

  experiences: Experience[] = [];
  education: Education[] = [];

  ngOnInit() {
    this.experiences = this.portfolioService.getExperiences();
    this.education = this.portfolioService.getEducation();
  }
}

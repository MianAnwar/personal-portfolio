import { Component, OnInit, inject, ViewChild, ElementRef, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Skill } from '../../models/portfolio.models';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  private portfolioService = inject(PortfolioDataService);
  private platformId = inject(PLATFORM_ID);

  @ViewChild('radarChart') radarChartRef!: ElementRef<HTMLCanvasElement>;

  allSkills: Skill[] = [];
  frontendSkills: Skill[] = [];
  backendSkills: Skill[] = [];
  databaseSkills: Skill[] = [];
  toolsSkills: Skill[] = [];

  radarChart: Chart | null = null;

  ngOnInit() {
    this.allSkills = this.portfolioService.getSkills();
    this.frontendSkills = this.portfolioService.getSkillsByCategory('frontend');
    this.backendSkills = this.portfolioService.getSkillsByCategory('backend');
    this.databaseSkills = this.portfolioService.getSkillsByCategory('database');
    this.toolsSkills = this.portfolioService.getSkillsByCategory('tools');
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createRadarChart();
    }
  }

  createRadarChart() {
    const ctx = this.radarChartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    // Select top skills for radar chart
    const topSkills = [...this.frontendSkills, ...this.backendSkills]
      .sort((a, b) => b.level - a.level)
      .slice(0, 8);

    const config: ChartConfiguration = {
      type: 'radar',
      data: {
        labels: topSkills.map(s => s.name),
        datasets: [{
          label: 'Skill Level',
          data: topSkills.map(s => s.level),
          fill: true,
          backgroundColor: 'rgba(99, 102, 241, 0.2)',
          borderColor: 'rgb(99, 102, 241)',
          borderWidth: 2,
          pointBackgroundColor: 'rgb(99, 102, 241)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(99, 102, 241)',
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20,
              font: {
                size: 12
              }
            },
            pointLabels: {
              font: {
                size: 14,
                weight: 'bold'
              }
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.parsed.r}%`
            }
          }
        }
      }
    };

    this.radarChart = new Chart(ctx, config);
  }

  getSkillWidth(level: number): string {
    return `${level}%`;
  }

  ngOnDestroy() {
    if (this.radarChart) {
      this.radarChart.destroy();
    }
  }
}

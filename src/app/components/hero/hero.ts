import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit {
  titles: string[] = [
    'Full Stack Developer',
    'Angular Expert',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];
  currentTitleIndex = 0;
  currentTitle = '';
  isDeleting = false;
  typingSpeed = 100;

  ngOnInit() {
    this.typeTitle();
  }

  typeTitle() {
    const fullTitle = this.titles[this.currentTitleIndex];

    if (!this.isDeleting) {
      this.currentTitle = fullTitle.substring(0, this.currentTitle.length + 1);

      if (this.currentTitle === fullTitle) {
        setTimeout(() => {
          this.isDeleting = true;
          this.typeTitle();
        }, 2000);
        return;
      }
    } else {
      this.currentTitle = fullTitle.substring(0, this.currentTitle.length - 1);

      if (this.currentTitle === '') {
        this.isDeleting = false;
        this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
      }
    }

    const speed = this.isDeleting ? 50 : this.typingSpeed;
    setTimeout(() => this.typeTitle(), speed);
  }

  scrollToSection(sectionId: string) {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  downloadResume() {
    // This will download the resume from assets folder
    const link = document.createElement('a');
    link.href = 'assets/documents/resume.pdf';
    link.download = 'Mian_Muhammad_Anwar_Resume.pdf';
    link.click();
  }
}

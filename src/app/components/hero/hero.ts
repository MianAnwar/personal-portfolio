import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  private cdr = inject(ChangeDetectorRef);

  titles: string[] = [
    'Full Stack Developer',
    'Angular Expert',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];
  currentTitleIndex = 0;
  currentTitle = '';
  isDeleting = false;
  private typingTimeout: any;

  ngOnInit() {
    setTimeout(() => this.typeTitle(), 500);
  }

  ngOnDestroy() {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
  }

  typeTitle() {
    const fullTitle = this.titles[this.currentTitleIndex];

    if (!this.isDeleting) {
      this.currentTitle = fullTitle.substring(0, this.currentTitle.length + 1);
      this.cdr.detectChanges(); // Explicitly trigger change detection

      if (this.currentTitle === fullTitle) {
        this.isDeleting = true;
        this.typingTimeout = setTimeout(() => this.typeTitle(), 2000);
        return;
      }
    } else {
      this.currentTitle = fullTitle.substring(0, this.currentTitle.length - 1);
      this.cdr.detectChanges(); // Explicitly trigger change detection

      if (this.currentTitle === '') {
        this.isDeleting = false;
        this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
      }
    }

    this.typingTimeout = setTimeout(() => this.typeTitle(), 100);
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

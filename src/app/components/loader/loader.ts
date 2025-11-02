import { Component, OnInit, ChangeDetectorRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrls: ['./loader.scss']
})
export class LoaderComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  isLoading = signal(true);

  ngOnInit() {
    // Hide loader after 2 seconds - using setTimeout with zone to avoid change detection issues
    setTimeout(() => {
      this.isLoading.set(false);
      this.cdr.detectChanges();
    }, 2000);
  }
}

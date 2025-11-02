import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { SocialLink } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private portfolioService = inject(PortfolioDataService);

  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  socialLinks: SocialLink[] = [];

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.socialLinks = this.portfolioService.getSocialLinks();
  }

  get f() {
    return this.contactForm.controls;
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    try {
      // Simulate form submission
      // In production, you would integrate with EmailJS or a backend API
      await new Promise(resolve => setTimeout(resolve, 2000));

      this.submitMessage = 'Thank you for your message! I will get back to you soon.';
      this.contactForm.reset();
    } catch (error) {
      this.submitMessage = 'Sorry, there was an error sending your message. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}

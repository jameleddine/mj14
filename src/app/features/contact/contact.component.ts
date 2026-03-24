import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="py-20 text-center">
      <h2 class="text-3xl font-bold mb-6">Contact</h2>

      <p class=" mb-4">
        Open to opportunities and collaborations
      </p>

      <a href="mailto:mejri.jameleddine@gmail.com"
         class="text-accent underline">
        mejri.jameleddine@gmail.com
      </a>
    </section>
  `
})
export class ContactComponent {}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports:[CommonModule],
  template: `
    <section class="py-20 text-center">
      <h2 class="text-3xl font-bold mb-10">Skills</h2>

      <div class="flex flex-wrap justify-center gap-4">
        <span *ngFor="let skill of skills"
              class="bg-gray-800 text-white px-4 py-2 rounded-full">
          {{ skill }}
        </span>
      </div>
    </section>
  `
})
export class SkillsComponent {
  skills = ['AWS', 'Docker', 'Grafana', 'Prometheus', 'Angular', 'Java'];
}
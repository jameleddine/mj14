import { Component } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
   imports: [CommonModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent {

      constructor(public theme: ThemeService) {}

    toggleTheme() {
    this.theme.toggleTheme();
  }
}
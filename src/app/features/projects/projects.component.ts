import { Component } from '@angular/core';
import projects from '../../data/projects.json';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  imports:[CommonModule]
})
export class ProjectsComponent {
  projects = projects;
}
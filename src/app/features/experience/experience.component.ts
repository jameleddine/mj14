import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experiences = [
    {
      company: "VW / Porsche",
      role: "Backend Integration & Technical Lead",
      period: "2025 - Present",
      description: [
        "Led architecture and backend integration for connected vehicle services",
        "Coordinated international teams across Europe, North America, and China",
        "Ensured high availability and performance of distributed systems",
        "Acted as technical interface between stakeholders and development teams"
      ]
    },
    {
      company: "BMW Group",
      role: "DevOps / Technical Lead",
      period: "2021 - 2025",
      description: [
        "Developed scalable backend services and web applications",
        "Improved system observability using Grafana, Dynatrace, and Kibana",
        "Implemented CI/CD pipelines and DevOps best practices",
        "Mentored developers and supported team growth"
      ]
    },
    {
      company: "TLF",
      role: "Scrum Master",
      period: "2021",
      description: [
        "Managed Agile processes and sprint planning",
        "Defined functional requirements and technical constraints",
        "Led documentation and API integration efforts"
      ]
    },
    {
      company: "X-cite",
      role: "Frontend Engineer",
      period: "2019 - 2020",
      description: [
        "Built React components and integrated APIs",
        "Implemented real-time tracking and geolocation features",
        "Worked on 3D visualization of buildings and floors"
      ]
    }
  ];
}
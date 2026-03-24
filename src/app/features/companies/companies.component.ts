import { Component } from '@angular/core';
import companies from '../../data/companies.json';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-companies',
  standalone: true,
  templateUrl: './companies.component.html',
  imports:[CommonModule]
})
export class CompaniesComponent {
  companies = companies;
}
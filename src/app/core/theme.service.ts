import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDark = true;

  constructor() {
    if (this.isBrowser()) {
      const savedTheme = localStorage.getItem('theme');
      this.isDark = savedTheme ? savedTheme === 'dark' : true;
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;

    if (this.isBrowser()) {
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    }

    this.applyTheme();
  }

  private applyTheme() {
    if (!this.isBrowser()) return;

    const html = document.documentElement;

    if (this.isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  isDarkMode() {
    return this.isDark;
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }
}
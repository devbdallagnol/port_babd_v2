import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <nav [class.scrolled]="isScrolled">
      <div class="nav-container">
        <div class="logo">
          <span class="gradient-text">Bruno.dev</span>
        </div>
        
        <div class="nav-links" [class.active]="isMenuOpen">
          <a href="#home" (click)="toggleMenu()">Home</a>
          <a href="#experience" (click)="toggleMenu()">Experiência</a>
          <a href="#projects" (click)="toggleMenu()">Projetos</a>
          <a href="#skills" (click)="toggleMenu()">Skills</a>
          <a href="#contact" class="btn-primary" (click)="toggleMenu()">Contato</a>
        </div>

        <button class="mobile-toggle" (click)="toggleMenu()">
          <lucide-icon [name]="isMenuOpen ? 'X' : 'Menu'"></lucide-icon>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 20px 0;
      transition: all 0.3s ease;
    }
    nav.scrolled {
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(10px);
      padding: 12px 0;
      border-bottom: 1px solid var(--glass-border);
    }
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: 800;
    }
    .nav-links {
      display: flex;
      gap: 32px;
      align-items: center;
    }
    .nav-links a {
      color: var(--text-muted);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }
    .nav-links a:hover {
      color: var(--text);
    }
    .mobile-toggle {
      display: none;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
    }
    @media (max-width: 768px) {
      .mobile-toggle { display: block; }
      .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        width: 80%;
        background: var(--background);
        flex-direction: column;
        justify-content: center;
        transition: 0.3s;
      }
      .nav-links.active { right: 0; }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;
  readonly Menu = Menu;
  readonly X = X;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
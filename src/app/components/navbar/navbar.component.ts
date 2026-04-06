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
          <a href="#contact" class="btn-primary nav-btn" (click)="toggleMenu()">Contato</a>
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
      padding: 24px 0;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    nav.scrolled {
      background: rgba(2, 6, 23, 0.8);
      backdrop-filter: blur(12px);
      padding: 16px 0;
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
      letter-spacing: -0.02em;
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
      transition: all 0.3s ease;
      font-size: 0.95rem;
    }
    .nav-links a:hover:not(.btn-primary) {
      color: var(--primary);
    }
    
    /* Ajuste específico para o botão de contato na nav */
    .nav-links a.nav-btn {
      color: #ffffff !important; /* Força o branco puro */
      padding: 10px 24px;
      font-weight: 700;
      font-size: 0.9rem;
      box-shadow: 0 4px 15px rgba(14, 165, 233, 0.2);
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
        border-left: 1px solid var(--glass-border);
      }
      .nav-links.active { right: 0; }
      .nav-links a.nav-btn { width: 80%; text-align: center; }
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
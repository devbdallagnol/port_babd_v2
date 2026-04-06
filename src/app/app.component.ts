import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-skills></app-skills>
      <app-contact></app-contact>
    </main>
    <footer>
      <div class="footer-content">
        <p>&copy; 2026 Bruno Dall'Agnol. Todos os direitos reservados.</p>
        <div class="footer-links">
          <a href="https://github.com/devdallagnol" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/bruno-a-b-dall-agnol" target="_blank">LinkedIn</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    main {
      overflow-x: hidden;
    }
    footer {
      padding: 40px 20px;
      border-top: 1px solid var(--glass-border);
      margin-top: 60px;
    }
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text-muted);
      font-size: 0.875rem;
    }
    .footer-links { display: flex; gap: 24px; }
    .footer-links a { color: var(--text-muted); text-decoration: none; }
    .footer-links a:hover { color: var(--primary); }
    @media (max-width: 768px) {
      .footer-content { flex-direction: column; gap: 20px; text-align: center; }
    }
  `]
})
export class AppComponent {}
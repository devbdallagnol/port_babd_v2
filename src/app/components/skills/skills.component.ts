import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills">
      <div class="section-header">
        <span class="badge">Expertise</span>
        <h2>Minhas <span class="gradient-text">Habilidades</span></h2>
      </div>

      <div class="skills-container">
        <div class="skills-category glass-card">
          <h3>Front-End</h3>
          <div class="skill-list">
            @for (skill of frontend; track skill.name) {
              <div class="skill-item">
                <div class="skill-info">
                  <span>{{ skill.name }}</span>
                  <span>{{ skill.level }}%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="skills-category glass-card">
          <h3>Back-End & Data</h3>
          <div class="skill-list">
            @for (skill of backend; track skill.name) {
              <div class="skill-item">
                <div class="skill-info">
                  <span>{{ skill.name }}</span>
                  <span>{{ skill.level }}%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header { text-align: center; margin-bottom: 60px; }
    h2 { font-size: 3rem; margin-top: 12px; }
    .skills-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
    .skills-category { padding: 40px; }
    .skills-category h3 { margin-bottom: 32px; font-size: 1.5rem; color: var(--primary); }
    .skill-list { display: flex; flex-direction: column; gap: 24px; }
    .skill-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      font-weight: 500;
    }
    .progress-bar {
      height: 8px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      overflow: hidden;
    }
    .progress {
      height: 100%;
      background: linear-gradient(to right, var(--primary), var(--secondary));
      border-radius: 10px;
      transition: width 1s ease-out;
    }
    @media (max-width: 768px) {
      .skills-container { grid-template-columns: 1fr; }
    }
  `]
})
export class SkillsComponent {
  frontend = [
    { name: 'React', level: 90 },
    { name: 'Angular', level: 75 },
    { name: 'TypeScript', level: 85 },
    { name: 'Sass/CSS3', level: 95 }
  ];
  backend = [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'SQL/PostgreSQL', level: 88 },
    { name: 'MongoDB', level: 80 }
  ];
}
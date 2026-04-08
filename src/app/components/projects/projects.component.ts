import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, Github } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="projects">
      <div class="section-header">
        <span class="badge">Portfólio</span>
        <h2>Projetos em <span class="gradient-text">Destaque</span></h2>
      </div>

      <div class="projects-grid">
        @for (project of projects; track project.title) {
          <div class="project-card glass-card">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title">
              <div class="project-overlay">
                <div class="overlay-links">
                  <a [href]="project.github" target="_blank" class="icon-btn"><lucide-icon name="Github"></lucide-icon></a>
                  <a [href]="project.demo" target="_blank" class="icon-btn"><lucide-icon name="ExternalLink"></lucide-icon></a>
                </div>
              </div>
            </div>
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tags">
                @for (tag of project.tags; track tag) {
                  <span class="tag">{{ tag }}</span>
                }
              </div>
            </div>
          </div>
        }
      </div>

      <div class="view-more-container">
        <a href="https://github.com/devbdallagnol" target="_blank" class="btn-view-more glass-card">
          <span>Ver todos os projetos no GitHub.</span>
          <div class="icon-circle">
            <lucide-icon name="Github" size="20"></lucide-icon>
          </div>
        </a>
      </div>
    </section>
  `,
  styles: [`
    .section-header { text-align: center; margin-bottom: 60px; }
    h2 { font-size: 3rem; margin-top: 12px; }
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 32px;
      margin-bottom: 60px;
    }
    .project-card { overflow: hidden; }
    .project-image {
      position: relative;
      height: 240px;
      overflow: hidden;
    }
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .project-card:hover .project-image img { transform: scale(1.1); }
    .project-overlay {
      position: absolute;
      inset: 0;
      background: rgba(14, 165, 233, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .project-card:hover .project-overlay { opacity: 1; }
    .overlay-links { display: flex; gap: 16px; }
    .icon-btn {
      width: 48px;
      height: 48px;
      background: white;
      color: var(--primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s;
    }
    .icon-btn:hover { transform: scale(1.1); }
    .project-info { padding: 28px; }
    .project-info h3 { margin-bottom: 12px; font-size: 1.5rem; font-weight: 700; }
    .project-info p { color: var(--text-muted); margin-bottom: 24px; font-size: 0.95rem; }
    .project-tags { display: flex; flex-wrap: wrap; gap: 8px; }
    .tag {
      font-size: 0.75rem;
      background: rgba(14, 165, 233, 0.1);
      color: var(--primary);
      padding: 6px 14px;
      border-radius: 100px;
      font-weight: 600;
      border: 1px solid rgba(14, 165, 233, 0.2);
    }

    .view-more-container {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    .btn-view-more {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 12px 12px 12px 32px;
      text-decoration: none;
      color: var(--text);
      font-weight: 600;
      border-radius: 100px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid var(--glass-border);
    }

    .btn-view-more:hover {
      border-color: var(--primary);
      background: rgba(14, 165, 233, 0.1);
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 10px 30px rgba(14, 165, 233, 0.2);
    }

    .icon-circle {
      width: 48px;
      height: 48px;
      background: var(--primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: transform 0.4s ease;
    }

    .btn-view-more:hover .icon-circle {
      transform: rotate(360deg);
    }

    @media (max-width: 768px) {
      .btn-view-more {
        padding: 10px 10px 10px 24px;
        font-size: 0.9rem;
      }
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Dash Fifa 23 (Python)',
      description: 'Dashboard interativo para análise de estatísticas de jogadores do Fifa 23 utilizando Streamlit.',
      image: 'assets/dashboard-fifa-23.png',
      tags: ['Python', 'Streamlit', 'Pandas'],
      github: 'https://github.com/ITDallAgnol/ASIMOV_Dash_Fifa_2023',
      demo: '#'
    },
    {
      title: 'Disney Clone',
      description: 'Interface moderna replicando a experiência do Disney+ com foco em UI/UX.',
      image: 'assets/disney-clone.png',
      tags: ['React', 'Styled Components', 'Firebase'],
      github: 'https://github.com/devbdallagnol/disney-clone',
      demo: '#'
    },
    {
      title: 'Sales Report Dashboard',
      description: 'Sistema de relatórios de vendas com visualização de dados em tempo real.',
      image: 'assets/sales-desktop.png',
      tags: ['Python', 'Plotly', 'Data Analysis'],
      github: 'https://github.com/devbdallagnol/sales_report_st',
      demo: '#'
    }
  ];
}
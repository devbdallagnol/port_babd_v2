import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Briefcase, Calendar } from 'lucide-angular';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="experience">
      <div class="section-header">
        <span class="badge">Trajetória</span>
        <h2>Experiência <span class="gradient-text">Profissional</span></h2>
      </div>

      <div class="timeline">
        @for (exp of experiences; track exp.company) {
          <div class="timeline-item glass-card">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="exp-header">
                <div class="company-info">
                  <div class="company-logo">
                    <lucide-icon name="Briefcase"></lucide-icon>
                  </div>
                  <div>
                    <h3>{{ exp.role }}</h3>
                    <p class="company-name">{{ exp.company }}</p>
                  </div>
                </div>
                <div class="period">
                  <lucide-icon name="Calendar" size="16"></lucide-icon>
                  {{ exp.period }}
                </div>
              </div>
              <p class="exp-desc">{{ exp.description }}</p>
              <div class="tech-stack">
                @for (tech of exp.tech; track tech) {
                  <span class="tech-tag">{{ tech }}</span>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .section-header { text-align: center; margin-bottom: 60px; }
    h2 { font-size: 3rem; margin-top: 12px; }
    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
      padding-left: 40px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 2px;
      background: linear-gradient(to bottom, var(--primary), var(--secondary));
    }
    .timeline-item {
      margin-bottom: 40px;
      padding: 32px;
      position: relative;
    }
    .timeline-dot {
      position: absolute;
      left: -47px;
      top: 40px;
      width: 12px;
      height: 12px;
      background: var(--primary);
      border-radius: 50%;
      box-shadow: 0 0 15px var(--primary);
    }
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 20px;
    }
    .company-info { display: flex; gap: 16px; align-items: center; }
    .company-logo {
      width: 48px;
      height: 48px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary);
    }
    .company-name { color: var(--primary); font-weight: 600; }
    .period {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--text-muted);
      font-size: 0.875rem;
      background: rgba(255, 255, 255, 0.05);
      padding: 6px 12px;
      border-radius: 100px;
    }
    .exp-desc { color: var(--text-muted); margin-bottom: 20px; }
    .tech-stack { display: flex; flex-wrap: wrap; gap: 8px; }
    .tech-tag {
      background: rgba(255, 255, 255, 0.05);
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 0.75rem;
      color: var(--text);
      border: 1px solid var(--glass-border);
    }
    @media (max-width: 768px) {
      .exp-header { flex-direction: column; gap: 16px; }
    }
  `]
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Desenvolvedor Full Stack / Freelancer',
      company: 'Autônomo',
      period: '2015 - Presente',
      description: 'Desenvolvimento de aplicações web completas, automação de processos e consultoria técnica para diversos clientes.',
      tech: ['React', 'Node.js', 'Python', 'SQL', 'AWS']
    },
    {
      role: 'Desenvolvedor Full Stack',
      company: 'Easy2Tech',
      period: '2022 - 2023',
      description: 'Automação de dados financeiros (CRA, CRI, Debêntures) utilizando tecnologias modernas para otimização de processos.',
      tech: ['Python', 'Pandas', 'React', 'PostgreSQL']
    },
    {
      role: 'Desenvolvedor Front-End',
      company: 'CT Boas Novas',
      period: '2023 - 2024',
      description: 'Desenvolvimento e manutenção de site institucional focado em performance e experiência do usuário.',
      tech: ['HTML5', 'CSS3', 'JS', 'Sass']
    }
  ];
}
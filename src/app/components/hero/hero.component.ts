import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Download, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section id="home" class="hero">
      <div class="hero-content">
        <div class="badge">Disponível para novos projetos</div>
        <h1>
          Bruno A. B. <span class="gradient-text">Dall'Agnol</span>
        </h1>
        <p class="subtitle">
          Full Stack Developer | Data Analysis Specialist | Tech Innovator
        </p>
        <p class="description">
          Transformando dados complexos em soluções digitais elegantes. Especialista em React, Node.js, Python e SQL com foco em inovação e performance.
        </p>
        
        <div class="cta-group">
          <a href="#projects" class="btn-primary">Ver Projetos</a>
          <div class="social-links">
            <a href="https://github.com/devdallagnol" target="_blank" class="glass-card social-btn">
              <lucide-icon name="Github"></lucide-icon>
            </a>
            <a href="https://linkedin.com/in/bruno-a-b-dall-agnol" target="_blank" class="glass-card social-btn">
              <lucide-icon name="Linkedin"></lucide-icon>
            </a>
          </div>
        </div>

        <div class="stats">
          <div class="stat-item">
            <span class="stat-value">500+</span>
            <span class="stat-label">Conexões</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">1.3k+</span>
            <span class="stat-label">Contribuições</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">9+</span>
            <span class="stat-label">Anos Exp.</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="image-container">
          <img src="assets/profile.jpg" alt="Bruno Dall'Agnol" class="profile-img">
          <div class="floating-card card-1 glass-card">
            <div class="icon-box"><lucide-icon name="Code"></lucide-icon></div>
            <span>Full Stack</span>
          </div>
          <div class="floating-card card-2 glass-card">
            <div class="icon-box"><lucide-icon name="Database"></lucide-icon></div>
            <span>Data Analysis</span>
          </div>
        </div>
      </div>

      <a href="#experience" class="scroll-indicator">
        <lucide-icon name="ChevronDown"></lucide-icon>
      </a>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      align-items: center;
      gap: 40px;
      position: relative;
    }
    .badge {
      background: rgba(99, 102, 241, 0.1);
      color: var(--primary);
      padding: 8px 16px;
      border-radius: 100px;
      font-size: 0.875rem;
      font-weight: 600;
      display: inline-block;
      margin-bottom: 24px;
      border: 1px solid rgba(99, 102, 241, 0.2);
    }
    h1 {
      font-size: 4.5rem;
      line-height: 1.1;
      margin-bottom: 16px;
      font-weight: 800;
    }
    .subtitle {
      font-size: 1.5rem;
      color: var(--text-muted);
      margin-bottom: 24px;
    }
    .description {
      font-size: 1.125rem;
      color: var(--text-muted);
      max-width: 600px;
      margin-bottom: 40px;
    }
    .cta-group {
      display: flex;
      gap: 20px;
      align-items: center;
      margin-bottom: 60px;
    }
    .social-links {
      display: flex;
      gap: 12px;
    }
    .social-btn {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      color: var(--text);
    }
    .stats {
      display: flex;
      gap: 48px;
    }
    .stat-value {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      color: var(--text);
    }
    .stat-label {
      color: var(--text-muted);
      font-size: 0.875rem;
    }
    .hero-visual {
      position: relative;
      display: flex;
      justify-content: center;
    }
    .image-container {
      position: relative;
      width: 400px;
      height: 400px;
    }
    .profile-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      animation: morph 8s ease-in-out infinite;
      border: 4px solid var(--glass-border);
    }
    @keyframes morph {
      0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
      50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
      100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
    }
    .floating-card {
      position: absolute;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      animation: float 4s ease-in-out infinite;
    }
    .card-1 { top: 10%; left: -20%; animation-delay: 0s; }
    .card-2 { bottom: 20%; right: -10%; animation-delay: 2s; }
    .icon-box {
      width: 32px;
      height: 32px;
      background: var(--primary);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .scroll-indicator {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      color: var(--text-muted);
      animation: bounce 2s infinite;
    }
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
      40% { transform: translateY(-10px) translateX(-50%); }
      60% { transform: translateY(-5px) translateX(-50%); }
    }
    @media (max-width: 1024px) {
      .hero { grid-template-columns: 1fr; text-align: center; padding-top: 120px; }
      .hero-content { display: flex; flex-direction: column; align-items: center; }
      h1 { font-size: 3rem; }
      .cta-group { flex-direction: column; }
      .stats { justify-content: center; }
      .image-container { width: 300px; height: 300px; margin-top: 40px; }
    }
  `]
})
export class HeroComponent {
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Download = Download;
  readonly ChevronDown = ChevronDown;
}
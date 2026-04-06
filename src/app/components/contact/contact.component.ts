import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Mail, MapPin, Send } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FormsModule],
  template: `
    <section id="contact">
      <div class="contact-container glass-card">
        <div class="contact-info">
          <h2>Vamos <span class="gradient-text">Conversar?</span></h2>
          <p>Estou sempre aberto a novas oportunidades e colaborações técnicas. Vamos construir algo incrível juntos!</p>
          
          <div class="info-items">
            <div class="info-item">
              <div class="icon-box"><lucide-icon name="Mail"></lucide-icon></div>
              <div>
                <p class="label">E-mail Profissional</p>
                <p class="value">bruno.agnol&#64;hotmail.com</p>
              </div>
            </div>
            <div class="info-item">
              <div class="icon-box"><lucide-icon name="MapPin"></lucide-icon></div>
              <div>
                <p class="label">Localização</p>
                <p class="value">São José dos Campos, SP</p>
              </div>
            </div>
          </div>
        </div>

        <form class="contact-form" (submit)="onSubmit($event)">
          <div class="form-group">
            <input type="text" placeholder="Seu Nome" required>
          </div>
          <div class="form-group">
            <input type="email" placeholder="Seu E-mail" required>
          </div>
          <div class="form-group">
            <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn-primary">
            Enviar Mensagem
            <lucide-icon name="Send" size="18"></lucide-icon>
          </button>
        </form>
      </div>
    </section>
  `,
  styles: [`
    .contact-container {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      padding: 80px;
      gap: 80px;
    }
    h2 { font-size: 3.5rem; margin-bottom: 24px; font-weight: 800; }
    .contact-info p { color: var(--text-muted); margin-bottom: 48px; font-size: 1.1rem; }
    .info-items { display: flex; flex-direction: column; gap: 32px; }
    .info-item { display: flex; gap: 24px; align-items: center; }
    .icon-box {
      width: 64px;
      height: 64px;
      background: rgba(14, 165, 233, 0.1);
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary);
      border: 1px solid rgba(14, 165, 233, 0.2);
    }
    .label { font-size: 0.875rem; color: var(--text-muted); margin-bottom: 4px; }
    .value { font-weight: 600; font-size: 1.1rem; }
    .contact-form { display: flex; flex-direction: column; gap: 24px; }
    input, textarea {
      width: 100%;
      padding: 18px;
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid var(--glass-border);
      border-radius: 14px;
      color: white;
      outline: none;
      transition: all 0.3s ease;
      font-size: 1rem;
    }
    input:focus, textarea:focus { 
      border-color: var(--primary);
      background: rgba(15, 23, 42, 1);
      box-shadow: 0 0 20px rgba(14, 165, 233, 0.1);
    }
    @media (max-width: 1024px) {
      .contact-container { grid-template-columns: 1fr; padding: 40px; gap: 60px; }
    }
  `]
})
export class ContactComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso! (Simulação)');
  }
}
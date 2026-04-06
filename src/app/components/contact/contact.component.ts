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
          <p>Estou sempre aberto a novas oportunidades e colaborações. Vamos construir algo incrível juntos!</p>
          
          <div class="info-items">
            <div class="info-item">
              <div class="icon-box"><lucide-icon name="Mail"></lucide-icon></div>
              <div>
                <p class="label">E-mail</p>
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
      padding: 60px;
      gap: 60px;
    }
    h2 { font-size: 3rem; margin-bottom: 20px; }
    .contact-info p { color: var(--text-muted); margin-bottom: 40px; }
    .info-items { display: flex; flex-direction: column; gap: 32px; }
    .info-item { display: flex; gap: 20px; align-items: center; }
    .icon-box {
      width: 56px;
      height: 56px;
      background: rgba(99, 102, 241, 0.1);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary);
    }
    .label { font-size: 0.875rem; color: var(--text-muted); }
    .value { font-weight: 600; }
    .contact-form { display: flex; flex-direction: column; gap: 20px; }
    input, textarea {
      width: 100%;
      padding: 16px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--glass-border);
      border-radius: 12px;
      color: white;
      outline: none;
      transition: border-color 0.2s;
    }
    input:focus, textarea:focus { border-color: var(--primary); }
    @media (max-width: 1024px) {
      .contact-container { grid-template-columns: 1fr; padding: 40px; }
    }
  `]
})
export class ContactComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso! (Simulação)');
  }
}
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
          <div class="badge">Contato</div>
          <h2>Vamos <span class="gradient-text">Conversar?</span></h2>
          <p class="contact-desc">
            Estou sempre aberto a novas oportunidades e colaborações técnicas. 
            Vamos construir algo incrível juntos!
          </p>
          
          <div class="info-items">
            <div class="info-item glass-card">
              <div class="icon-box">
                <lucide-icon name="Mail"></lucide-icon>
              </div>
              <div class="info-text">
                <span class="label">E-mail Profissional</span>
                <span class="value">bruno.agnol&#64;hotmail.com</span>
              </div>
            </div>

            <div class="info-item glass-card">
              <div class="icon-box">
                <lucide-icon name="MapPin"></lucide-icon>
              </div>
              <div class="info-text">
                <span class="label">Localização</span>
                <span class="value">São José dos Campos, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div class="form-wrapper">
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
            <button type="submit" class="btn-primary submit-btn">
              Enviar Mensagem
              <lucide-icon name="Send" size="18"></lucide-icon>
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-container {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      padding: 60px;
      gap: 60px;
      align-items: center;
    }
    
    h2 { 
      font-size: 3.5rem; 
      margin: 16px 0 24px; 
      font-weight: 800; 
      line-height: 1.1;
    }
    
    .contact-desc { 
      color: var(--text-muted); 
      margin-bottom: 40px; 
      font-size: 1.1rem;
      max-width: 450px;
    }
    
    .info-items { 
      display: flex; 
      flex-direction: column; 
      gap: 20px; 
    }
    
    .info-item { 
      display: flex; 
      gap: 20px; 
      align-items: center; 
      padding: 20px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.03);
    }
    
    .info-item:hover {
      background: rgba(14, 165, 233, 0.05);
      border-color: var(--primary);
    }
    
    .icon-box {
      width: 56px;
      height: 56px;
      background: rgba(14, 165, 233, 0.1);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary);
      border: 1px solid rgba(14, 165, 233, 0.2);
      flex-shrink: 0;
    }
    
    .info-text {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .label { 
      font-size: 0.8rem; 
      color: var(--text-muted); 
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
    }
    
    .value { 
      font-weight: 600; 
      font-size: 1.05rem; 
      color: var(--text);
    }
    
    .form-wrapper {
      background: rgba(255, 255, 255, 0.02);
      padding: 40px;
      border-radius: 24px;
      border: 1px solid var(--glass-border);
    }
    
    .contact-form { 
      display: flex; 
      flex-direction: column; 
      gap: 20px; 
    }
    
    input, textarea {
      width: 100%;
      padding: 16px 20px;
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid var(--glass-border);
      border-radius: 12px;
      color: white;
      outline: none;
      transition: all 0.3s ease;
      font-size: 1rem;
    }
    
    input:focus, textarea:focus { 
      border-color: var(--primary);
      background: rgba(15, 23, 42, 0.9);
      box-shadow: 0 0 20px rgba(14, 165, 233, 0.1);
    }
    
    .submit-btn {
      width: 100%;
      justify-content: center;
      padding: 16px;
      font-size: 1.1rem;
      margin-top: 10px;
    }
    
    @media (max-width: 1024px) {
      .contact-container { 
        grid-template-columns: 1fr; 
        padding: 40px 24px; 
        gap: 40px; 
      }
      h2 { font-size: 2.8rem; }
      .form-wrapper { padding: 30px 20px; }
    }
  `]
})
export class ContactComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso! (Simulação)');
  }
}
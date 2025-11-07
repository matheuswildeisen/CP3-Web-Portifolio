import React from 'react';
import SectionTitle from '../components/SectionTitle';

export default function Bio() {
  return (
    <section id="bio" className="bio">
      <SectionTitle text="Sobre Mim" />
      <div className="bio-content">
        <img src="/assets/perfil.jpeg" alt="Matheus von Koss Wildeisen" className="bio-image" />
        <div className="bio-text">
          <h3>Olá! 👋</h3>
          <p>
            Sou <strong>Matheus von Koss Wildeisen</strong>, um entusiasta da tecnologia e estudante de
            Engenharia de Software na FIAP. Aos 19 anos, estou construindo minha carreira como desenvolvedor
            full-stack, combinando criatividade e pensamento analítico para criar soluções inovadoras.
          </p>
          
          <h3>Minha Jornada 🚀</h3>
          <p>
            Desde cedo me interessei por tecnologia, começando com projetos de IoT e automação. 
            Essa paixão me levou a explorar diversas áreas do desenvolvimento de software, desde
            front-end moderno até sistemas embarcados.
          </p>

          <h3>Objetivos Profissionais 🎯</h3>
          <p>
            Busco me especializar em desenvolvimento full-stack, com foco em:
          </p>
          <ul>
            <li>Desenvolvimento web moderno com React e TypeScript</li>
            <li>Arquitetura de sistemas distribuídos</li>
            <li>IoT e sistemas embarcados</li>
            <li>DevOps e práticas ágeis</li>
          </ul>

          <h3>Interesses 💡</h3>
          <div className="interests-grid">
            <div className="interest-item">
              <span>🌐 Web Development</span>
            </div>
            <div className="interest-item">
              <span>🤖 IoT & Automação</span>
            </div>
            <div className="interest-item">
              <span>📱 Mobile Apps</span>
            </div>
            <div className="interest-item">
              <span>☁️ Cloud Computing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

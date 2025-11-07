import React from 'react';
import SectionTitle from '../components/SectionTitle';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  repoLink: string;
  demoLink?: string;
  status: 'Concluído' | 'Em desenvolvimento';
  date: string;
  techStack: string[];
  features: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'CP5-Edge-Computing',
      description: 'Sistema IoT para monitoramento ambiental em uma vinheria inteligente.',
      longDescription: 'Um sistema completo de monitoramento ambiental utilizando ESP32 e MQTT para coleta e análise de dados em tempo real em uma vinheria inteligente. O projeto inclui sensores de temperatura, umidade e luminosidade.',
      repoLink: 'https://github.com/matheuswildeisen/CP5-Edge-Computing',
      demoLink: 'https://www.youtube.com/watch?v=demo1',
      status: 'Concluído',
      date: 'Out 2024',
      techStack: ['ESP32', 'MQTT', 'Python', 'Node.js', 'React', 'Arduino'],
      features: [
        'Monitoramento em tempo real de temperatura e umidade',
        'Dashboard interativo com gráficos e alertas',
        'Sistema de notificação por email',
        'Armazenamento de dados históricos'
      ]
    },
    {
      title: 'GS-Front-End',
      description: 'Interface moderna e responsiva para aplicação web.',
      longDescription: 'Desenvolvimento de uma interface web moderna e responsiva utilizando as melhores práticas de UI/UX. O projeto foi desenvolvido com foco em performance e acessibilidade.',
      repoLink: 'https://github.com/matheuswildeisen/GS-Front-End',
      demoLink: 'https://www.youtube.com/watch?v=demo2',
      status: 'Concluído',
      date: 'Set 2024',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
      features: [
        'Layout totalmente responsivo',
        'Animações suaves e interativas',
        'Temas claro e escuro',
        'Otimização de performance'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'Site pessoal e portfólio profissional.',
      longDescription: 'Desenvolvimento do meu site pessoal e portfólio utilizando React e TypeScript. O projeto apresenta minha experiência, habilidades e projetos de forma interativa.',
      repoLink: 'https://github.com/matheuswildeisen/CP3-Web-Portifolio',
      status: 'Em desenvolvimento',
      date: 'Nov 2024',
      techStack: ['React', 'TypeScript', 'CSS3', 'Vite'],
      features: [
        'Design moderno e minimalista',
        'Navegação por rotas com React Router',
        'Seções organizadas de projetos e habilidades',
        'Otimizado para SEO'
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <SectionTitle text="Meus Projetos" />
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-links">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>GitHub</span>
                </a>
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>

            <div className="project-meta">
              <div className="meta-item">
                <span>📅</span> {project.date}
              </div>
              <div className="meta-item">
                <span>🚀</span> {project.status}
              </div>
            </div>

            <p className="project-description">
              {project.longDescription}
            </p>

            <div className="project-features">
              <strong>Principais funcionalidades:</strong>
              <ul className="feature-list">
                {project.features.map((feature, index) => (
                  <li key={index} className="feature-item">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'CP5-Edge-Computing',
      description: 'Sistema IoT para monitoramento ambiental em uma vinheria inteligente com ESP32 e MQTT.',
      link: 'https://github.com/matheuswildeisen/CP5-Edge-Computing',
    },
    {
      title: 'GS-Front-End',
      description: 'Projeto de front-end com HTML e CSS, focado em layout e estilização responsiva.',
      link: 'https://github.com/matheuswildeisen/GS-Front-End',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}

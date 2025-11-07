import React from 'react';
import Hero from '../modules/Hero';
import { Link } from 'react-router-dom';

function HomeSection({ title, description, to }: { title: string; description: string; to: string }) {
  return (
    <div className="home-section">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={to} className="section-link">Ver mais →</Link>
    </div>
  );
}

export default function Home() {
  const sections = [
    {
      title: "Sobre Mim",
      description: "Desenvolvedor Full-Stack apaixonado por tecnologia e inovação.",
      to: "/sobre"
    },
    {
      title: "Formação",
      description: "Estudante de Engenharia de Software na FIAP.",
      to: "/formacao"
    },
    {
      title: "Projetos",
      description: "Portfólio de projetos em desenvolvimento web e IoT.",
      to: "/projetos"
    },
    {
      title: "Skills",
      description: "Experiência em diversas tecnologias e frameworks modernos.",
      to: "/skills"
    },
    {
      title: "Contato",
      description: "Vamos conversar sobre seu próximo projeto?",
      to: "/contato"
    }
  ];

  return (
    <div className="home">
      <Hero />
      <div className="home-sections container">
        {sections.map((section, index) => (
          <HomeSection key={index} {...section} />
        ))}
      </div>
    </div>
  );
}
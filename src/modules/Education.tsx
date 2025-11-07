import React from 'react';
import SectionTitle from '../components/SectionTitle';

export default function Education() {
  const educations = [
    {
      course: "Engenharia de Software",
      institution: "FIAP – Faculdade de Informática e Administração Paulista",
      period: "2024 - Presente",
      location: "São Paulo, BR",
      description: "Curso focado em desenvolvimento de software, engenharia de requisitos, arquitetura de sistemas e gestão de projetos ágeis.",
      skills: ["Java", "Python", "React", "Agile", "DevOps", "Cloud Computing"]
    }
  ];

  const certifications: { name: string; issuer: string; date: string }[] = [];

  return (
    <section id="education" className="education">
      <SectionTitle text="Formação Acadêmica" />
      
      <div className="education-grid">
        {educations.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.course}</h3>
            <div className="institution">{edu.institution}</div>
            <div className="period">{edu.period} • {edu.location}</div>
            <p className="description">{edu.description}</p>
            <div className="skills-list">
              {edu.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="certifications">
        <SectionTitle text="Certificações e Cursos" />
        <div className="certification-list">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <div className="cert-icon">🏆</div>
              <div className="cert-info">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer} • {cert.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

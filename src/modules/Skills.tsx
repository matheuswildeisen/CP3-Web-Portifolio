import React from 'react';
import SectionTitle from '../components/SectionTitle';

interface Skill {
  name: string;
  level: 'Básico' | 'Intermediário' | 'Avançado';
  icon: string;
  description: string;
}

interface SkillsGroup {
  title: string;
  description: string;
  skills: Skill[];
}

export default function Skills() {
  const skillsGroups: SkillsGroup[] = [
    {
      title: "Desenvolvimento Frontend",
      description: "Tecnologias e frameworks para criação de interfaces modernas e responsivas",
      skills: [
        {
          name: "HTML",
          level: "Intermediário",
          icon: "🌐",
          description: "Estruturação semântica, acessibilidade e SEO"
        },
        {
          name: "CSS",
          level: "Intermediário",
          icon: "🎨",
          description: "Layouts responsivos, Flexbox, Grid, animações"
        },
        {
          name: "JavaScript",
          level: "Básico",
          icon: "📜",
          description: "ES6+, manipulação DOM, eventos, Promises"
        },
        {
          name: "React",
          level: "Básico",
          icon: "⚛️",
          description: "Hooks, Context API, React Router"
        },
        {
          name: "Tailwind CSS",
          level: "Básico",
          icon: "🎯",
          description: "Utility-first CSS, customização"
        }
      ]
    },
    {
      title: "Desenvolvimento Backend",
      description: "Linguagens e frameworks para desenvolvimento de APIs e serviços",
      skills: [
        {
          name: "Java",
          level: "Básico",
          icon: "☕",
          description: "POO, Collections, Streams API"
        },
        {
          name: "Node.js",
          level: "Básico",
          icon: "🟢",
          description: "Express, APIs RESTful, MongoDB"
        },
        {
          name: "Python",
          level: "Básico",
          icon: "🐍",
          description: "FastAPI, Data Science, Automação"
        }
      ]
    },
    {
      title: "DevOps & Ferramentas",
      description: "Ferramentas e práticas para desenvolvimento e implantação",
      skills: [
        {
          name: "Git",
          level: "Básico",
          icon: "📚",
          description: "Versionamento, branches, pull requests"
        },
        {
          name: "Docker",
          level: "Básico",
          icon: "🐳",
          description: "Containerização, Docker Compose"
        },
        {
          name: "Arduino",
          level: "Básico",
          icon: "🤖",
          description: "IoT, sensores, automação"
        }
      ]
    }
  ];

  const getLevelPercentage = (level: string) => {
    switch (level) {
      case 'Avançado': return 100;
      case 'Intermediário': return 70;
      case 'Básico': return 40;
      default: return 0;
    }
  };

  return (
    <section id="skills" className="skills">
      <SectionTitle text="Minhas Habilidades" />
      <div className="skills-container">
        {skillsGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="skills-group">
            <h3>{group.title}</h3>
            <p className="group-description">{group.description}</p>
            <div className="skills-grid">
              {group.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-card">
                  <h4>
                    <span>{skill.icon}</span>
                    {skill.name}
                  </h4>
                  <div className="skill-level">
                    <div className="level-label">
                      <span>Nível</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${getLevelPercentage(skill.level)}%` }}
                      />
                    </div>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

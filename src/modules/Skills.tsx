import React from 'react';
import SkillCard from '../components/SkillCard';

type Skill = { name: string; level: 'Básico' | 'Intermediário' | 'Avançado' };
type SkillsGroup = Record<string, Skill[]>;

export default function Skills() {
  const skills: SkillsGroup = {
    Frontend: [
      { name: 'HTML', level: 'Intermediário' },
      { name: 'CSS', level: 'Intermediário' },
      { name: 'Bootstrap', level: 'Básico' },
      { name: 'Tailwind', level: 'Básico' },
      { name: 'JavaScript', level: 'Básico' },
      { name: 'React', level: 'Básico' },
    ],
    Backend: [
      { name: 'Java', level: 'Básico' },
      { name: 'Spring Boot', level: 'Básico' },
      { name: 'Node.js', level: 'Básico' },
      { name: 'Python', level: 'Básico' },
    ],
    DevOps: [
      { name: 'Git', level: 'Básico' },
      { name: 'Bash', level: 'Básico' },
      { name: 'Docker', level: 'Básico' },
      { name: 'Arduino', level: 'Básico' },
    ],
  };

  return (
    <section id="skills" className="skills">
      <h2>Abilidades</h2>
      {Object.entries(skills).map(([group, items]) => (
        <div key={group}>
          <h3>{group}</h3>
          <div className="skills-grid">
            {items.map((skill: Skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

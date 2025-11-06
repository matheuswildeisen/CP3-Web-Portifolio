import React from 'react';

interface SkillCardProps {
  name: string;
  level: 'Básico' | 'Intermediário' | 'Avançado';
}

export default function SkillCard({ name, level }: SkillCardProps) {
  const progress = level === 'Avançado' ? 100 : level === 'Intermediário' ? 70 : 40;

  return (
    <div className="skill-card">
      <h4>{name}</h4>
      <p>{level}</p>
      <progress value={progress} max="100" />
    </div>
  );
}

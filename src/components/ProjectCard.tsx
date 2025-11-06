import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
    </div>
  );
}

import React from 'react';
import SectionTitle from '../components/SectionTitle';

export default function Bio() {
  return (
    <section id="bio" className="bio">
      <SectionTitle text="Sobre Mim" />
      <p>
        Sou <strong>Matheus von Koss Wildeisen</strong>, estudante de Engenharia de Software na FIAP,
        apaixonado por tecnologia e desenvolvimento full-stack. Desde cedo me interessei por criar soluções
        que conectam o mundo físico ao digital, explorando áreas como IoT, Front-end moderno e sistemas inteligentes.
        Estou sempre em busca de novos desafios que me permitam aprender, evoluir e contribuir para projetos inovadores.
      </p>
    </section>
  );
}

import React from 'react';
import SectionTitle from '../components/SectionTitle';

export default function Education() {
  return (
    <section id="education" className="education">
      <SectionTitle text="Formação Acadêmica" />
      <p>
        <strong>Curso:</strong> Engenharia de Software<br />
        <strong>Instituição:</strong> FIAP – Faculdade de Informática e Administração Paulista<br />
        <strong>Status:</strong> Cursando 1º ano<br />
        <strong>Local:</strong> São Paulo, BR
      </p>
    </section>
  );
}

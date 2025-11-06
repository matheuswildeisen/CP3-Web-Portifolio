import React from 'react';

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="topbar-inner container">
        <a className="brand" href="#hero">
          <img src="/assets/perfil.jpeg" alt="logo" className="brand-img" />
          <span className="brand-text">Matheus</span>
        </a>

        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#hero">Início</a></li>
            <li><a href="#bio">Sobre</a></li>
            <li><a href="#education">Formação</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

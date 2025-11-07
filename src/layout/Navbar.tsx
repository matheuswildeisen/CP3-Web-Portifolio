import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="topbar-inner container">
        <Link className="brand" to="/">
          <img src="/assets/perfil.jpeg" alt="logo" className="brand-img" />
          <span className="brand-text">Matheus</span>
        </Link>

        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/formacao">Formação</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

import React from 'react';
import '../design/Header.css';

export default function Header() {

  const anchor = document.querySelector('#pricing')
  anchor?.scrollIntoView({behavior: 'smooth', block: 'center'});

  return (
    <header>
      <nav>
        <div className="logo">LogoHébergement</div>
        <ul className="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="/#features">Fonctionnalités</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>
      <section className="hero">
        <h1>Bienvenue sur Plateforme d'Hébergement Web</h1>
        <p>Le meilleur choix pour héberger vos sites web en toute sécurité.</p>
        <a href="#pricing" className="cta">Voir les tarifs</a>
      </section>
    </header>
  );
}

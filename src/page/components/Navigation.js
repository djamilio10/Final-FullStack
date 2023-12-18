import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar">
      <h2>SUNU ART</h2>
      <ul>
        <NavLink to="/Accueil">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/Artistes">
          <li>Artistes</li>
        </NavLink>
        <NavLink to="/Oeuvres-d'arts">
          <li>Oeuvres d'Arts</li>
        </NavLink>
        <NavLink to="/Expositions">
          <li>Expositions</li>
        </NavLink>
        <NavLink to="/Connexion">
          <li>Connexion</li>
        </NavLink>
        <NavLink to="/Inscription">
          <li>Inscription</li>
        </NavLink>
        <NavLink to="/Contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;

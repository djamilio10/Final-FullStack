import React from "react";
import Navigation from "./components/Navigation";

const Connexion = () => {
  return (
    <div>
      <Navigation />
      <main>
        <div className="container">
          <div className="contact-box">
            <div className="left"></div>
            <div className="right">
              <h2 id="hh">Connexion</h2>
              <form action="" id="connexion">
                <input
                  type="email"
                  className="field"
                  placeholder="Entrez votre email"
                />
                <input
                  type="password"
                  className="field"
                  placeholder="Entrez votre mot de passe"
                />
                <input className="btn" type="submit" value="Connexion" />
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Connexion;

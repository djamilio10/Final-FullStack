import React from "react";
import Navigation from "./components/Navigation";

const Artistes = () => {
  return (
    <div>
      <Navigation />
      <main id="main2">
        <div className="wrapper">
          <div className="services">
            <a href="#">
              <span className="single-img img-one">
                <span className="img-text">
                  <h4>Mariama Ba</h4>
                  <h3>
                    <p>
                      <i>PEINTRE</i>
                    </p>
                  </h3>
                  <p>
                    Mariama est une peintre dont les œuvres sont une célébration
                    vibrante de la culture et de la nature.
                  </p>
                  <p>
                    Ses couleurs éclatantes et sa maîtrise du mouvement créent
                    des tableaux dynamiques qui capturent l'énergie et la
                    vitalité de ses sujets.{" "}
                  </p>
                </span>
              </span>
            </a>
            <a href="#">
              <span className="single-img img-two">
                <span className="img-text">
                  <h4>Mohamed Fall</h4>
                  <h3>
                    <p>
                      <i>PEINTRE</i>
                    </p>
                  </h3>
                  <p>
                    Mohamed un peintre dont les toiles sont des voyages
                    artistiques envoûtants.
                  </p>
                  <p>
                    Ses coups de pinceau audacieux et expressifs donnent vie à
                    des paysages abstraits qui transcendent les frontières de la
                    réalité.{" "}
                  </p>
                </span>
              </span>
            </a>
            <a href="#">
              <span className="single-img img-three">
                <span className="img-text">
                  <h4>PIERRE DIABOU</h4>
                  <h3>
                    <p>
                      <i>SCULPTEUR</i>
                    </p>
                  </h3>
                  <p>
                    Pierre est un sculpteur dont les créations sont empreintes
                    d'une sensibilité à la fois brute et délicate.
                  </p>
                  <p>
                    Il donne vie à des formes organiques et abstraites qui
                    semblent transcender la réalité.
                  </p>
                </span>
              </span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Artistes;

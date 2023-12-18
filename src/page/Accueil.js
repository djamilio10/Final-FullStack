import React from "react";
import Navigation from "./components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Accueil = () => {
  return (
    <div>
      <Navigation />

      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h1>
              JOIN THE{" "}
              <span className="text-highlight">
                MOVEMENT THE FUTURE OF SENEGALAISE
              </span>
              ART IS HERE
            </h1>
          </div>
          <div className="main__img--container">
            <img src="images/art4.png" alt="cat" id="main__img" />
          </div>
        </div>
      </div>

      {/* <!-- tableaux Section --> */}
      <div className="images">
        <h1>Exploré notre Collection de tableaux</h1>
        <div className="images__container">
          <div className="images__card">
            <h2>20.000fr</h2>
            <p>
              <a className="acheter" href=""></a>
            </p>
          </div>
          <div className="images__card">
            <h2>18.000fr</h2>
            <p>
              <a className="acheter" href=""></a>
            </p>
          </div>
          <div className="images__card">
            <h2>35.000fr</h2>
            <p>
              <a className="acheter" href=""></a>
            </p>
          </div>
          <div className="images__card">
            <h2>25.000fr</h2>
            <p>
              <a className="acheter" href=""></a>
            </p>
          </div>
          <div className="images__card">
            <h2>15.000fr</h2>
            <p>
              <a className="acheter" href=""></a>
            </p>
          </div>
          <div className="images__card">
            <h2>27.000fr</h2>
            <p>
              <a className="acheter" href=""></a>
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Sculpture Section --> */}
      <div className="images">
        <h1>Exploré notre Collection de sculptures</h1>
        <div className="images__container">
          <div className="images__card2">
            <h2>20.000fr</h2>
            <p>
              <a className="acheter" href=""></a>
            </p>
          </div>
          <div className="images__card2">
            <h2>18.000fr</h2>
            <p>
              <a className="acheter" href=""></a>
            </p>
          </div>
          <div className="images__card2">
            <h2>35.000fr</h2>
            <p>
              <a className="acheter" href=""></a>
            </p>
          </div>
          <div className="images__card2">
            <h2>25.000fr</h2>
            <p>
              <a className="acheter" href=""></a>
            </p>
          </div>
          <div className="images__card2">
            <h2>15.000fr</h2>
            <p>
              <a className="acheter" href=""></a>
            </p>
          </div>
          <div className="images__card2">
            <h2>27.000fr</h2>
            <p>
              <a className="acheter" href=""></a>
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Footer Section --> */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>SUNU ART</h4>
              <ul>
                <p className="website__rights2">
                  <i>
                    Notre site Web pour les artistes sénégalais a été créé pour
                    promouvoir l'art sénégalais.
                  </i>
                </p>
                <p className="website__rights2">
                  <i>
                    et offrir une plateforme de qualité aux artistes pour
                    présenter leur travail et se connecter
                  </i>
                </p>
                <p className="website__rights2">
                  <i>
                    {" "}
                    avec des collectionneurs passionnés. Nous sommes fiers de
                    mettre en valeur la richesse{" "}
                  </i>
                </p>
                <p className="website__rights2">
                  <i>
                    et la diversité de l'art sénégalais, qui reflète la culture
                    vibrante et l'histoire riche de ce pays.
                  </i>
                </p>
              </ul>
            </div>
            <div className="footer-col">
              <h4>AIDE</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>SUIVEZ-NOUS</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                  <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                </a>
                <>
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </>
              </div>
            </div>
          </div>
        </div>
        <div className="nnn__nnn">
          <p className="website__rights">SUNU ART 2023. All rights reserved</p>
          <p className="website__rights2">
            <i>DISIGNED BY DJAMIL</i>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Accueil;

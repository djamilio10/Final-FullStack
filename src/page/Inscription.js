import React, { useState } from "react";
import Navigation from "./components/Navigation";
import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";

const Inscription = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [cgvChecked, setCgvChecked] = useState(false);

  const handleCgvChange = () => {
    setCgvChecked(!cgvChecked);
  };

  return (
    <div>
      <Navigation />
      <main>
        <div className="container">
          <div className="contact-box">
            <div className="left"></div>
            <div className="right">
              <h2 id="hh">Inscription</h2>
              <form action="">
                <input
                  type="text"
                  className="field"
                  placeholder="Entrez votre nom"
                />
                <input
                  type="text"
                  className="field"
                  placeholder="Entrez votre Prenom"
                />
                <input
                  type="email"
                  className="field"
                  placeholder="Votre email"
                />
                <input
                  type="password"
                  className="field"
                  placeholder="Votre mot de passe"
                />
                <input
                  type="password"
                  className="field"
                  placeholder="confirmez votre mot de passe"
                />
                <PhoneInput
                  className="field"
                  placeholder="numero de telephone"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
                {/* ... Autres champs du formulaire ... */}
                <input
                  type="radio"
                  id="CGV"
                  checked={cgvChecked}
                  onChange={handleCgvChange}
                />
                <label htmlFor="CGV" id="cgv">
                  Veuillez accepter les conditions générales
                </label>

                <input className="btn" type="submit" value="Inscription" />
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inscription;

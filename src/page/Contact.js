import React, { useState } from "react";
import Navigation from "./components/Navigation";

import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  return (
    <div>
      <Navigation />
      <main>
        <div className="container">
          <div className="contact-box">
            <div className="left"></div>
            <div className="right">
              <h2 id="hh">Contactez-Nous</h2>
              <form action="" id="contact">
                <input
                  type="email"
                  className="field"
                  placeholder="Entrez votre nom"
                />
                <input
                  type="text"
                  className="field"
                  placeholder="Votre email"
                />
                <PhoneInput
                  className="field"
                  placeholder="numero de telephone"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
                <textarea className="field" placeholder="Message"></textarea>
                <input type="submit" className="btn" value="Contactez-Nous" />
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

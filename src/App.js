import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Accueil from "./page/Accueil";
import Artistes from "./page/Artistes";
import Connexion from "./page/Connexion";
import Contact from "./page/Contact";
import Inscription from "./page/Inscription";
import Expositions from "./page/Expositions";
import Oeuvres from "./page/Oeuvres";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Artistes" element={<Artistes />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Exposition" element={<Expositions />} />
        <Route path="/Oeuvres" element={<Oeuvres />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

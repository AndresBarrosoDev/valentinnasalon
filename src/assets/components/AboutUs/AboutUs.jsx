import React, { useState, useEffect } from "react";
import "./AboutUs.css";

export const AboutUs = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const phrases = [
    "Disfruta de un momento para ti en nuestro acogedor y elegante salón.",
    "Déjate consentir por nuestros expertos en belleza y cuidado personal.",
    "Renueva tu estilo con los mejores cortes y peinados.",
    "Calidad, estilo y profesionalismo en un solo lugar. Ven y descúbrelo.",
    "Visítanos y transforma tu imagen con la ayuda de nuestros profesionales.",
    "Ven a pasar un buen momento, mientras te embelleces."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setFade(false);
      }, 800); // Tiempo de la animación de fade-out
    }, 5000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [phrases.length]);

  return (
    <div className="about-us animate-home-component">
      <h1 className={`about-us-title ${fade ? 'fade-out' : ''}`}>
        {phrases[currentPhraseIndex]}
      </h1>
    </div>
  );
};

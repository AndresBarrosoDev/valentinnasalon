import React from "react";
import "./Location.css";

export const Location = () => {
  return (
    <div className="location animate-home-component">
      <h1 className="location-title">Encuentra aquí nuestro Salón:</h1>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.158684878466!2d-70.65439239297474!3d-33.49724832996495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662db73903203dd%3A0x63da20ec0826901f!2sValentinna%20Sal%C3%B3n!5e0!3m2!1ses-419!2scl!4v1715584621484!5m2!1ses-419!2scl"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

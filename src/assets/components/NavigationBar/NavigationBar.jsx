import React from "react";
import "./NavigationBar.css";
import "./NavigationBarButtons.css";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="main-bar">
        <Link to="/">
          <div className="logo">
            <h1 className="valentinna">Valentinna</h1>
            <h1 className="salon">Salón</h1>
          </div>
        </Link>
        <div className="actions">
          <a href="https://valentinnasalon.cl/" className="contacto-button">
            Contacto
          </a>
          <a href="https://valentinnasalon.cl/" className="reservas-button">
            Reservar
          </a>
        </div>
      </div>
      <Menu></Menu>
    </div>
  );
};

import React from "react";
import "./NavigationBar.css";
import "./NavigationBarButtons.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Menu from "./Menu/Menu";

export const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="main-bar">
        <div className="logo">
          <h1 className="valentinna">Valentinna</h1>
          <h1 className="salon">Salón</h1>
        </div>
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

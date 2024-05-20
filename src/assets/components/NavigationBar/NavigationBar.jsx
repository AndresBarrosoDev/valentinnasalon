import React from "react";
import "./NavigationBar.css";
import "./NavigationBarButtons.css";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="main-bar">
        <div className="logo">
          <h1 className="valentinna">Valentinna</h1>
          <h1 className="salon">Salón</h1>
        </div>
        <div className="actions">
          <a href="http://localhost:3000/" className="contacto-button">
            Contacto
          </a>
          <a href="http://localhost:3000/" className="reservas-button">
            Reservar
          </a>
        </div>
      </div>
      <div className="menu">
        <a href="http://localhost:3000/" className="menu-button menu-button-with-icon">
          Peluquería
          <ChevronDownIcon w={5} h={5} color="gray.300" className="down-icon" />
        </a>
        <a href="http://localhost:3000/" className="menu-button menu-button-with-icon">
          Estética
          <ChevronDownIcon w={5} h={5} color="gray.300" className="down-icon" />
        </a>
        <a href="http://localhost:3000/" className="menu-button">
          Barberia
        </a>
        <a href="http://localhost:3000/" className="menu-button menu-button-with-icon">
          Salón
          <ChevronDownIcon w={5} h={5} color="gray.300" className="down-icon" />
        </a>
      </div>
    </div>
  );
};

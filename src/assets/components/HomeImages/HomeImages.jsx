import React from "react";
import { Button } from "@chakra-ui/react";
import "./HomeMainImage.css";
import "./HomeImages.css";
import "./HomeImagesBackgrounds.css";

import SecondImage from "../../images/second-image.jpg"
import ThirdImage from "../../images/third-image.jpg";
import FourthImage from "../../images/fourth-image.jpg";
import FifthImage from "../../images/fifth-image.jpg";

export const HomeImages = () => {
  return (
    <div className="home-images-container">
      <div className="main-image first-background-home-image">
        <h1 className="main-image-title">Tu salón en San Miguel</h1>
        <h1 className="main-image-title">¡Ven a visitarnos!</h1>
        <h3 className="main-image-subtitle">¡Ponte en las manos de nuestro gran equipo de estilistas!</h3>
        <button class="main-image-button"><p>RESERVA ONLINE CON UN -10%</p></button>
      </div>
      <div>
        <div className="link-images-container">
          <a
            href="https://valentinnasalon.cl/"
            className="link-image second-background-home-image"
          >
            <div className="link-images-text">Peluquería</div>
            <img src={SecondImage} alt="" />
          </a>
          <a
            href="https://valentinnasalon.cl/"
            className="link-image third-background-home-image"
          >
            <div className="link-images-text">Estética</div>
            <img src={ThirdImage} alt="" />
          </a>
          <a
            href="https://valentinnasalon.cl/"
            className="link-image fourth-background-home-image"
          >
            <div className="link-images-text">Barbería</div>
            <img src={FourthImage} alt="" />
          </a>
          <a
            href="https://valentinnasalon.cl/"
            className="link-image fifth-background-home-image"
          >
            <div className="link-images-text">Salón</div>
            <img src={FifthImage} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./Footer.css";
import "./FooterSocials.css";
import instagram from "../../images/icons/instagram.svg";
import whatsapp from "../../images/icons/whatsapp.svg";
import tiktok from "../../images/icons/tiktok.svg";
export const Footer = () => {
  const openLink = (event, url) => {
    event.preventDefault();
    setTimeout(() => {
      window.open(url, "_blank");
    }, 500);
  };

  return (
    <div className="footer animate-home-component">
      <div className="moving-text-animation">
        <span>Nos vemos pronto</span>
      </div>
      <div className="footer-socials-trademark">
        
        <div className="footer-trademark">
          <h2 className="footer-text">
            Av. Almirante Lynch 1167, San Miguel (Santiago de Chile) - Telf.
            +56953677486
          </h2>
          <h2 className="footer-text">© 2024, Valentinna Salón</h2>
        </div>

        <div className="footer-socials">
          <a
            className="social instagram svg"
            href
            onClick={(event) =>
              openLink(event, "https://www.instagram.com/valentinna_salon/")
            }
          >
            <object
              data={instagram}
              width="50"
              height="33"
              aria-label="Link to Valentinna Salon's instagram account"
            ></object>
          </a>
          <a
            className="social whatsapp svg"
            href
            onClick={(event) => openLink(event, "https://wa.me/56953677486")}
          >
            <object
              data={whatsapp}
              width="50"
              height="33"
              aria-label="Link to Valentinna Salon's whatsapp account"
            ></object>
          </a>
          <a
            className="social tiktok svg"
            href
            onClick={(event) => openLink(event, "https://tiktok.com")}
          >
            <object
              data={tiktok}
              width="50"
              height="33"
              aria-label="Link to Valentinna Salon's tiktok account"
            ></object>
          </a>
        </div>
      </div>
    </div>
  );
};

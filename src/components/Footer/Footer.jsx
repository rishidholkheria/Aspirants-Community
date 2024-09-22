import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="quickLinks">
          <p>PGs and Apartments</p>
          <ul>
            <li>PGs/Apartments in Karol Bagh</li>
            <li>PGs/Apartments in Rajinder nagar</li>
            <li>PGs/Apartments in Patel Nagar</li>
          </ul>
        </div>

        <div className="quickLinks">
          <p>Services</p>
          <ul>
            <li>PGs/Apartments in Karol Bagh</li>
            <li>PGs/Apartments in Rajinder nagar</li>
            <li>PGs/Apartments in Patel Nagar</li>
          </ul>
        </div>

        <div className="quickLinks">
          <p>Advertise your service</p>
          <div className="adcontactbtns">
            <a href="">
              <button>Call Now</button>
            </a>
            <a href="mailto: orn.connect@gmail.com">
              <button>Mail Us</button>
            </a>
          </div>
        </div>
      </div>

      <div className="footerLogo">
        <img id="footerLogo" src={Logo} alt="logo" />
      </div>

      <div className="cwdev">
        <p className="copyrights">© Copyrights - oldrajindernagar.com </p>
        <a className="adminBtn" href="https://orn-admin-12.web.app/" target="_blank">
          <p className="adminText"> - Admin Portal</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;

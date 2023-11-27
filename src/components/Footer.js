import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <img
          className="footer-logo"
          src={require("../assets/Footer-logo.png")}
          alt="Little Lemon logo"
        />

        <div className="footer-section footer-links">
          <h2>QUICK LINKS</h2>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/menu" className="footer-link">
            Menu
          </Link>
          <Link to="/reservations" className="footer-link">
            Reservations
          </Link>
          <Link to="/order-online" className="footer-link">
            Order online
          </Link>
          <Link to="/login" className="footer-link">
            Login
          </Link>
        </div>
        <div className="footer-section footer-contact">
          <h2>CONTACT</h2>
          <p className="contact-info">
            <img
              className="contact-icon"
              src={require("../assets/icons/location.png")}
              alt="Location icon"
            />
            2232 Abbey Road, NY
          </p>
          <a className="contact-info" href="tel:123-456-7890">
            <img
              className="contact-icon"
              src={require("../assets/icons/phone.png")}
              alt="Phone icon"
            />
            +44 5578 999 21
          </a>
          <a className="contact-info" href="mailto:info@littlelemon.com">
            <img
              className="contact-icon"
              src={require("../assets/icons/email.png")}
              alt="Email icon"
            />
            info@littlelemon.com
          </a>
        </div>
        <div className="footer-section footer-connect">
          <h2>CONNECT WITH US</h2>
          <div className="connect-container">
            <a href="https://www.facebook.com">
              <img
                className="contact-icon"
                src={require("../assets/icons/facebook.png")}
                alt="Facebook icon"
              />
            </a>
            <a href="https://www.instagram.com">
              <img
                className="contact-icon"
                src={require("../assets/icons/instagram.png")}
                alt="Instagram icon"
              />
            </a>
            <a href="https://www.x.com">
              <img
                className="contact-icon"
                src={require("../assets/icons/twitter.png")}
                alt="Twitter icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

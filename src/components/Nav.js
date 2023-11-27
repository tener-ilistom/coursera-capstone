import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Hamburger from "../assets/icons/hamburger.svg";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`${menuOpen ? "" : "hidden"} navigation-bar`}>
        <Link to="/" className="nav-link underline">
          Home
        </Link>
        <Link to="/about" className="nav-link underline">
          About
        </Link>
        <Link to="/menu" className="nav-link underline">
          Menu
        </Link>
        <Link to="/reservations" className="nav-link underline">
          Reservations
        </Link>
        <Link to="/login" className="nav-link underline">
          Login
        </Link>
        <Link to="/order-online" className="nav-link">
          <div className="button-secondary">ORDER ONLINE</div>
        </Link>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <img src={Hamburger} alt="Hamburger menu" />
      </div>
    </>
  );
}

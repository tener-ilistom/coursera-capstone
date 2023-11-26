import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navigation-bar">
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
  );
}

import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navigation-bar">
      <Link to="/" className="nav-link">
        HOME
      </Link>
      <Link to="/about" className="nav-link">
        ABOUT
      </Link>
      <Link to="/menu" className="nav-link">
        MENU
      </Link>
      <Link to="/reservations" className="nav-link">
        RESERVATIONS
      </Link>
      <Link to="/order-online" className="nav-link">
        ORDER ONLINE
      </Link>
      <Link to="/login" className="nav-link">
        LOGIN
      </Link>
    </nav>
  );
}

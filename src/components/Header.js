import React from "react";
import Logo from "../assets/Logo.svg";
import Nav from "./Nav";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img className="header-logo" src={Logo} alt="Little Lemon logo" />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

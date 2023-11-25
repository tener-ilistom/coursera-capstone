import React from "react";
import Logo from "../assets/Logo.svg";
import Nav from "./Nav";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Little Lemon logo" />
      <Nav />
    </div>
  );
}

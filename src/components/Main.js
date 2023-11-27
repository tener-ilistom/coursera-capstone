import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <div className="main-container">
        <div className="main-text-container">
          <h1 className="main-title">Little Lemon</h1>
          <h2 className="sub-title main-sub">New York</h2>
          <p className="main-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit
            risus ut elit aliquam dapibus. Mauris egestas neque a euismod
            semper. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </p>
          <Link to="/reservations" className="no-underline">
            <div className="button-primary main-button">RESERVE A TABLE</div>
          </Link>
        </div>
        <img
          className="main-img"
          src={require("../assets/Hero-img.png")}
          alt="Main restaurant"
        />
      </div>
    </main>
  );
}

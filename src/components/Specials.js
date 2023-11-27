import React from "react";
import { Link } from "react-router-dom";
import "./Specials.css";

export default function Specials() {
  return (
    <section className="specials">
      <div className="specials-title">
        <h2 className="sub-title">Our specials this week:</h2>
        <Link to="/menu" className="no-underline">
          <div className="button-primary menu-button">OUR MENU</div>
        </Link>
      </div>
      <div className="specials-cards">
        <div className="specials-card">
          <div className="card-img-container">
            <img
              className="specials-img"
              src={require("../assets/Greek-salad.png")}
              alt="Greek salad"
            />
          </div>
          <div className="card-text-container">
            <h2 className="sub-title card-title">
              Greek salad<span className="card-price">$9.90</span>
            </h2>
            <p className="card-text">
              Donec ac vestibulum nibh. Etiam nec felis neque. Nam scelerisque
              mi lacinia, blandit tellus ac, commodo arcu. Interdum et malesuada
              fames ac ante ipsum primis.
            </p>
            <div className="button-secondary order-button">
              Order for delivery
            </div>
          </div>
        </div>
        <div className="specials-card">
          <div className="card-img-container">
            <img
              className="specials-img"
              src={require("../assets/Bruchetta.jpg")}
              alt="Bruchetta"
            />
          </div>
          <div className="card-text-container">
            <h2 className="sub-title card-title">
              Bruchetta<span className="card-price">$11.90</span>
            </h2>
            <p className="card-text">
              Nulla scelerisque est nec lacinia lacinia. Etiam maximus porttitor
              erat, et sollicitudin est blandit vel. Fusce eget sem id augue
              euismod aliquam.
            </p>
            <div className="button-secondary order-button">
              Order for delivery
            </div>
          </div>
        </div>
        <div className="specials-card">
          <div className="card-img-container">
            <img
              className="specials-img"
              src={require("../assets/Lemon-dessert.jpg")}
              alt="Lemon dessert"
            />
          </div>
          <div className="card-text-container">
            <h2 className="sub-title card-title">
              Lemon dessert<span className="card-price">$7.90</span>
            </h2>
            <p className="card-text">
              Nam malesuada ante sed blandit eleifend. Sed pellentesque ex erat,
              ac efficitur ligula placerat eu. Nullam semper pretium justo, in
              auctor lectus. Curabitur eu aliquet arcu.
            </p>
            <div className="button-secondary order-button">
              Order for delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

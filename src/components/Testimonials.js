import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="sub-title testimonials-title">
          See what people say about us:
        </h2>
        <div className="testimonial-card-container">
          <div className="testimonial-card">
            <div className="card-top">
              <p className="testimonial-text">
                "Donec gravida vel sapien vitae vehicula. Vestibulum id sodales
                velit. Nulla et mollis magna, a tristique quam."
              </p>
            </div>
            <img
              className="testimonial-img"
              src={require("../assets/Veronica.jpg")}
              alt="Testimonial"
            />
            <p className="testimonial-name">Veronica</p>
            <div className="rating">⭐⭐⭐⭐⭐</div>
          </div>

          <div className="testimonial-card">
            <div className="card-top">
              <p className="testimonial-text">
                "Nullam sit amet feugiat lacus, quis auctor felis. Mauris eget
                elit rhoncus, maximus elit eget, pretium quam."
              </p>
            </div>
            <img
              className="testimonial-img"
              src={require("../assets/Mark.jpg")}
              alt="Testimonial"
            />
            <p className="testimonial-name">Mark</p>
            <div className="rating">⭐⭐⭐⭐⭐</div>
          </div>

          <div className="testimonial-card">
            <div className="card-top">
              <p className="testimonial-text">
                "Morbi ac efficitur lorem. Nulla ut varius sapien. Cras
                sagittis, orci ut tempus aliquet, ligula arcu tempor nisl."
              </p>
            </div>
            <img
              className="testimonial-img"
              src={require("../assets/Eliza.jpg")}
              alt="Testimonial"
            />
            <p className="testimonial-name">Eliza</p>
            <div className="rating">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </section>
  );
}

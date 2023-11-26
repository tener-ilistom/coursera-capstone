import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us-text-container">
        <h1 className="main-title">Little Lemon</h1>
        <h2 className="sub-title">New York</h2>
        <p className="about-us-text">
          Proin at aliquet quam, non dignissim metus. Nam dictum enim ut purus
          tincidunt ornare. Sed vel placerat ipsum. Suspendisse condimentum
          pharetra consectetur. Etiam interdum auctor egestas. Vestibulum et mi
          interdum, porta diam a, placerat sem. Aliquam erat volutpat. Donec sit
          amet cursus tortor. Praesent eget odio posuere, consequat erat vel,
          pellentesque enim. Donec id sem ornare, luctus enim vitae, sodales
          leo.
        </p>
      </div>
      <div className="about-us-img-container">
        <img
          className="about-us-img"
          src={require("../assets/Chef2.png")}
          alt="Chef 2"
        />
        <img
          className="about-us-img"
          src={require("../assets/Chef1.png")}
          alt="Chef 1"
        />
      </div>
    </section>
  );
}

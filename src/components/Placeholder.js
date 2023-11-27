import React from "react";
import "./Placeholder.css";

export default function Nav() {
  return (
    <section className="placeholder-container">
      <img src={require("../assets/404.png")} alt="404" />
    </section>
  );
}

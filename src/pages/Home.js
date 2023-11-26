import React from "react";
import Main from "../components/Main";
import AboutUs from "../components/AboutUs";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Main />
      <Specials />
      <Testimonials />
      <AboutUs />
    </>
  );
}

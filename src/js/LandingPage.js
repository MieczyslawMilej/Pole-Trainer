import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import poletrainer_hero_image from "./../images/poletrainer_hero_image.png";

export default function LandingPage() {
  return (
    <div className="landing_wrapper">
      <header>
        <Nav />
        <Hero/>
        <img className="hero_img" src={poletrainer_hero_image} alt="kobieta" />
      </header>
    </div>
  );
}

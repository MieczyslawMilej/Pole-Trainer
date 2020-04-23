import React, { useEffect, useRef } from "react";

import Nav from "./Nav";
import Hero from "./Hero";
import { TimelineLite, TweenMax, Power3 } from "gsap";

import poletrainer_hero_image from "./../images/poletrainer_hero_image.png";

export default function LandingPage() {
  let landing = useRef(null);
  let heroImage = useRef(null);
  let tl = new TimelineLite({ delay: 0.3 });
  useEffect(() => {
    // console.log(heroImage);

    TweenMax.to(landing, 0, { css: { visibility: "visible" } });

    tl.from(heroImage, 3, { opacity: 0, ease: Power3.easeOut}, 1.2)
  }, []);

  return (
    <div className="landing_wrapper" ref={el => (landing = el)}>
      <header>
        <Nav />
        <Hero />
        <img
          ref={el => (heroImage = el)}
          className="hero_img"
          src={poletrainer_hero_image}
          alt="kobieta"
        />
      </header>
    </div>
  );
}

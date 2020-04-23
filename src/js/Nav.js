import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { TimelineLite, TweenMax, Power3 } from "gsap";

import logo_pole_trainer from "./../images/logo_pole_trainer.svg";

export default function Nav() {
  let nav = useRef(null);
  let tl = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    const firstLink = nav.firstElementChild.firstElementChild;
    const lastLink = nav.lastElementChild.firstElementChild;
    const logo = nav.firstElementChild.nextSibling;
    // console.log(nav);

    TweenMax.to(nav, 5, { css: { opacity: "1" } });

    tl.from(logo, 0.8, { y: -200, ease: Power3.easeOut })
      .from(logo, 1.5, { opacity: 0, ease: Power3.easeOut }, 0.3)
      .from(firstLink, 0.8, { x: -100, ease: Power3.easeOut }, 0.3)
      .from(firstLink, 2, { opacity: 0, ease: Power3.easeOut }, 0.6)
      .from(lastLink, 0.8, { x: 100, ease: Power3.easeOut }, 0.3)
      .from(lastLink, 2, { opacity: 0, ease: Power3.easeOut }, 0.6);
  }, []);

  return (
    <nav ref={el => (nav = el)}>
      <Link className="nav_link" to="/pole_studios">
        <div>Studia w Krakowie</div>
      </Link>
      <Link className="logo" to="/">
        <img className="logo_img" src={logo_pole_trainer} alt="logo" />
      </Link>
      <Link className="nav_link" to="/trainers">
        <div>Dla trenerów</div>
      </Link>
    </nav>
  );
}

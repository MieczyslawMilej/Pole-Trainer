import React, {useEffect, useRef} from "react";
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import { Link } from "react-router-dom";

export default function Hero() {


  let hero = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    const h1 = hero.firstElementChild;
    const p = h1.nextSibling;
    const button = p.nextSibling;
    const socialLinks = button.nextSibling;
    const rectangle1 = socialLinks.nextSibling;
    const rectangle2 = rectangle1.nextSibling;
    const circle1 = rectangle2.nextSibling;
    const circle2 = circle1.nextSibling;
    console.log(circle1, circle2);


    tl.from(h1, 2, { opacity: 0, ease: Power3.easeOut})
    .from(p, .8, { x: -100, ease: Power3.easeOut }, 1)
    .from(p, 3, { opacity: 0, ease: Power3.easeOut}, 1)
    .from(button, .8, { x: -300, ease: Power3.easeOut }, 1)
    .from(button, 3, { opacity: 0, ease: Power3.easeOut}, 1)
    .from(socialLinks, .8, { y: 800, ease: Power3.easeOut }, 0.6)
    .from(rectangle1, 2, { opacity: 0, ease: Power3.easeOut}, .5)
    .from(rectangle2, 2, { opacity: 0, ease: Power3.easeOut}, .5)
    .from(circle1, 1, { y: -800, ease: Power3.easeOut }, .2)
    .from(circle2, 1, { y: 800, ease: Power3.easeOut }, .2)

  }, [tl]);
//{ y: 800, ease: Power3.easeOut }

  return (
    <section className="hero_section" ref={el => hero = el}>
      <h1>pole trainer</h1>
      <p className="sub_title">
        ćwicz z kim chesz,
        <br />
        gdzie chcesz!
      </p>
      <Link className="" style={{display: "inline-block"}} to="/main_app">

        <button className="btn">znajdź trenera</button>
      </Link>
      <div className="links">
        <a className="social" href="https://www.facebook.com/" target="_blank">
          Facebook
        </a>
        <a className="social" href="https://www.instagram.com/" target="_blank">
          Instagram
        </a>
      </div>
      <div className="rectangle first_rectang" />
      <div className="rectangle second_rectang" />
      <div className="circle first_circle" />
      <div className="circle second_circle" />
    </section>
  );
}

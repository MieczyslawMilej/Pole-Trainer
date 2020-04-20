import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero_section">
      <h1>pole trainer</h1>
      <p className="sub_title">
        ćwicz z kim chesz,
        <br />
        gdzie chcesz!
      </p>
      <Link className="btn cta_btn" to="/main_app">
        znajdź trenera
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

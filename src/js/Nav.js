import React from "react";
import { Link } from "react-router-dom";
import logo_pole_trainer from "./../images/logo_pole_trainer.svg";

export default function Nav() {
  const logo = <img src={logo_pole_trainer} alt="logo" />;

  return (
    <nav>
      <Link to="/pole_studios">Studia w Krakowie</Link>
      <Link to="/">{logo}</Link>
      <Link to="/trainers">Dla trenerów</Link>
    </nav>
  );
}

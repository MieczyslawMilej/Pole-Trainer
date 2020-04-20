import React from "react";
import { Link } from "react-router-dom";
import logo_pole_trainer from "./../images/logo_pole_trainer.svg";

export default function Nav() {

  return (
    <nav>
      <Link className="nav_link" to="/pole_studios">Studia w Krakowie</Link>
      <Link className="logo" to="/"><img src={logo_pole_trainer} alt="logo" /></Link>
      <Link className="nav_link" to="/trainers">Dla trenerów</Link>
    </nav>
  );
}

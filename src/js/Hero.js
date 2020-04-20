import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <h1>pole trainer</h1>
      <p>ćwicz z kim chesz,</p>
      <p>gdzie chcesz!</p>
      <Link to="/main_app">znajdź trenera</Link>
      <a href="https://www.facebook.com/">Facebook</a>
      <a href="https://www.instagram.com/">Instagram</a>
      <div className="rectangle"/>
      <div className="circle"/>
    </>
  );
}

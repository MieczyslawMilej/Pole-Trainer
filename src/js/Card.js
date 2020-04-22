import React from "react";

export default function Card() {
  return (
    <div className="card">
      <div className="avatar"></div>
      <div>
        <p className="bold">Nazwisko</p>
        <p className="">Imię</p>
        <div className="price">50zł/H</div>
        <div className="rating">
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Card() {
  return (
    <div className="card">
      <div className="avatar"></div>
      <div className="description_wrapper">
        <p className="description bold">Nazwisko</p>
        <p className="description">Imię</p>
        <div className="rating">
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
        </div>
        <div className="price">50zł/H</div>
      </div>
    </div>
  );
}

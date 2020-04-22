import React from "react";

export default function Card({ data }) {

  const {picture, surname, name, price} = data;
  return (
    <div className="card">
      <div className="avatar">
        <img className="avatar_img" src={picture} alt="avatar" />
      </div>
      <div className="description_wrapper">
        <p className="description bold">{surname}</p>
        <p className="description">{name}</p>
        <div className="rating">
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
        </div>
        <div className="price">{price}zł/H</div>
      </div>
    </div>
  );
}

import React, { useRef, useEffect, useState } from "react";
import { TweenMax, TimelineMax, Power3 } from "gsap";
import Modal from "./Modal";

export default function Card({ data }) {
  const { picture, surname, name, price } = data;
  let cardRef = useRef(null);

  useEffect(() => {
      TweenMax.staggerFrom(cardRef, 5, { opacity: 0, ease: Power3.easeOut}, 0.5)
  },[])


  return (
    <>
    <div
      className="card"
      ref={element => {
        cardRef = element;
      }}
    >
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
    <Modal cardData={data}/>
    </>
  );
}

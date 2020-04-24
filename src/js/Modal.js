import React, { useRef, useEffect, useState } from "react";
import { TweenMax, TimelineMax, Power3 } from "gsap";

import cross from "./../images/cross.svg";

export default function Modal({ cardData, showModal, setShowModal }) {
  const {
    picture,
    surname,
    name,
    price,
    bio,
    classes,
    schedule,
    experience,
    facebook,
    instagram,
    phone
  } = cardData;

  //
  // let bg = useRef(null);
  // let tl = new TimelineMax({ delay: 0.8 });
  //
  // useEffect(() => {
  //
  //
  //   tl.from(bg.current, 1, { opacity: 0, ease: Power3.easeOut})
  //   // .from(wrapperRef, .8, { x: -100, ease: Power3.easeOut }, 1)
  //
  // }, [tl]);

  return (
    <div
      className="modal"
      style={{ display: !showModal ? "none" : "flex" }}
      onClick={() => setShowModal(false)}
    >
      <div className="modal_wrapper">
        <div className="left_section">
          <div className="avatar">
            <img src={picture} alt="avatar" />
          </div>
          <div className="small_info">
            <div className="price_info">
              <p className="price">{price}zł/H</p>
              <p className="price grey">Stawka godzinowa</p>
            </div>
            <div className="experience_info">
              <p className="experience">{experience} LAT</p>
              <p className="experience grey">Doświadczenie</p>
            </div>
            <div className="city_info">
              <p className="city">KRAKÓW</p>
              <p className="city grey">Miasto</p>
            </div>
          </div>
          <div className="contact grey">
            <p className="title">Kontakt</p>
            <p className="phone">{phone}</p>
            <p className="email">twoj.email@gmail.com</p>
          </div>
          <div className="social grey">
            <p className="title social_title">Social Media</p>
            <div className="links_wrapper">
              <p className="facebook">Facebook</p>
              <p className="instagram">Instagram</p>
            </div>
          </div>
        </div>
        <div className="right_section">
          <div onClick={() => setShowModal(false)} className="cross">
            <img className="shadow" src="./../images/cross.svg" alt="cross" />
          </div>
          <div className="bio_wrapper">
            <h2 className="bio_heading">{surname}</h2>
            <h2 className="bio_sub_heading">{name}</h2>
            <button>Wiadomość</button>
            <p className="bio_text">{bio}</p>
          </div>
          <div className="classes_wrapper">
            <p className="title grey">Rodzaje Zajęć</p>
            {classes.map((e, i) => (
              <p key={i} className="blob">
                {e}
              </p>
            ))}
          </div>
          <div className="schools_wrapper">
            <p className="title grey">Gdzie Uczę</p>
            {schedule.map((e, i) => (
              <div key={i} className="school_blob blob">
                <p className="school_heading">{e.school}</p>
                <ul>
                  {e.hours.map((el, i) => (
                    <p className="hours" key={i}>
                      {el}
                    </p>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

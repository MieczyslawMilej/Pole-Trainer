import React, { useRef, useEffect, useState } from "react";
import { TweenMax, TimelineMax, Power3 } from "gsap";

export default function Modal({ cardData }) {
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
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   // TweenMax.staggerFrom(cardRef, 5, { opacity: 0, ease: Power3.easeOut }, 0.5);
  // }, []);

  return (
    <div className="modal">
      <div>
        <div className="left_section">
          <div className="avatar"></div>
          <div className="small_info">
            <div className="price_info">
              <p className="price bold">{price}zł/H</p>
              <p className="price">Stawka godzinowa</p>
            </div>
            <div className="experience_info">
              <p className="experience bold">{experience} LAT</p>
              <p className="experience">Doświadczenie</p>
            </div>
            <div className="city_info">
              <p className="city bold">KRAKÓW</p>
              <p className="city">Miasto</p>
            </div>
          </div>
          <div className="contact">
            <p className="title">Kontakt</p>
            <p className="phone">{phone}</p>
            <p className="email">twoj.email@gmail.com</p>
          </div>
          <div className="social_media">
            <p className="title">Social Media</p>
            <a href={facebook} className="facebook">
              Facebook
            </a>
            <a href={instagram} className="instagram">
              Instagram
            </a>
          </div>
        </div>
        <div className="right_section">
          <div className="bio_wrapper">
            <h2 className="bio_heading bold">{surname}</h2>
            <h2 className="bio_sub_heading">{name}</h2>
            <p className="bio_text">{bio}</p>
          </div>
          <div className="classes_wrapper">
            <p className="title">Rodzaje Zajęć</p>
            {classes.map((e, i) => (
              <p key={i} className="blob">
                {e}
              </p>
            ))}
          </div>
          <div className="schools_wrapper">
            <p className="title">Gdzie Uczę</p>
            {schedule.map((e, i) => (
              <div key={i} className="blob">
                <p>{e.school}</p>
                <ul>
                  {e.hours.map( (el, i)=> <p key={i}>{el}</p>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

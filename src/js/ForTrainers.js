import React, { useRef, useEffect, useState } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";

import logo_pole_trainer from "./../images/logo_pole_trainer.svg";

import Nav from "./Nav";
import Circle from "./Circle";
import Rectangle from "./Rectangle";

export default function ForTrainers() {
  const element = {
    name: "",
    surname: "",
    experience: "",
    bio: "",
    price: "",
    phone: "",
    picture: "",
    classes: [],
    schedule: [],
    facebook: "",
    instagram: ""
  };

  const [message, setMessage] = useState("");
  const [data, setData] = useState(element);
  const [poleClass, setPoleClass] = useState("");
  const [poleSchoolName, setSchoolName] = useState("");
  const [poleHour, setPoleHour] = useState("");
  const [poleHours, setPoleHours] = useState([]);

  let form = useRef(null);
  let tl = new TimelineLite({ delay: 2 });

  useEffect(() => {
    const recatngle = form.firstElementChild;
    const circle1 = recatngle.nextSibling;

    tl.from(form, 0.8, { y: 500, ease: "back.out(1.7)" })
      .from(form, 1, { opacity: 0, ease: Power3.easeOut }, 0)
      .from(recatngle, 0.5, { x: -500, ease: "back.out(1.7)" })
      .from(recatngle, 0.5, { opacity: 0, ease: Power3.easeOut }, 0)
      .from(circle1, 0.5, { x: 500, ease: "back.out(1.7)" })
      .from(circle1, 0.5, { opacity: 0, ease: Power3.easeOut }, 0);
  }, []);

  function addPoleClass(e) {
    e.preventDefault();
    if (!poleClass.length == 0) {
      setData(prev => ({
        ...prev,
        classes: [...prev.classes, poleClass]
      }));
      setPoleClass("");
    }
  }

  function addPoleHours(e) {
    e.preventDefault();

    if (!poleHour.length == 0) {
      setPoleHours(prev => [...prev, poleHour]);
      setPoleHour("");
    }
  }

  function addSchedule(e) {
    e.preventDefault();
    const poleClassesData = {
      school: poleSchoolName,
      hours: poleHours
    };

    if (!poleHours.length == 0 && !poleSchoolName.length == 0) {
      setData(prev => {
        return { ...prev, schedule: [...prev.schedule, poleClassesData] };
      });
      setPoleHours([]);
      setSchoolName("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (data.name.length < 2) {
      setMessage("Imię powinno zawierać minimum 2 znaki.");
      return;
    }
    if (data.surname.length < 2) {
      setMessage("Nazwisko powinno zawierać minimum 2 znaki.");
      return;
    }
    if (data.experience.length < 0) {
      setMessage("Wybierz lata doświadczenia.");
      return;
    }
    if (data.price.length < 1) {
      setMessage("Stawka godzinowa nie może być pusta.");
      return;
    }
    if (data.phone.length < 9) {
      setMessage("Numer musi zawierać minimum 9 cyfr.");
      return;
    }
    if (data.picture.length < 1) {
      setMessage("Dodaj link do zdjęcia.");
      return;
    }
    if (data.facebook.length < 1) {
      setMessage("Dodaj link do facebooka.");
      return;
    }
    if (data.instagram.length < 1) {
      setMessage("Dodaj link do instagrama.");
      return;
    }
    if (data.classes.length == 0) {
      setMessage("Musisz dodać zajęcia.");
      return;
    }
    if (poleHour.length == 0 && data.schedule.length < 0) {
      setMessage("Musisz dodać godziny.");
      return;
    }
    if (data.bio.length < 120) {
      setMessage("Opis musi zawierać minimum 120 znaków.");
      return;
    }

    setMessage("");

    fetch("https://api.jsonbin.io/b	", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "secret-key":
          "$2b$10$Emtr4pxCUtwgh7HANul37u5uxXHbgZC7qEpK7mxpWr.vLMKMiPDK2",
        "collection-id": "5e9ffc212940c704e1dc8cc1"
      }
    })
      .then(response => response.json())
      .then(data => {
        setMessage("Dodano profil!");
      })
      .catch(error => {
        setMessage(error);
      });
  }

  return (
    <div className="app_wrapper">
      <Nav />
      <form ref={el => (form = el)} onSubmit={handleSubmit}>
        <Rectangle className="treiners_rectangle" />
        <Circle className="treiners_circle" />
        <Circle className="treiners_circle2" />
        <label>
          Imię
          <input
            onChange={({ target }) =>
              setData(prev => ({ ...prev, name: target.value }))
            }
            className=""
            placeholder="Joanna"
            type="text"
          />
        </label>
        <br />
        <label>
          Nazwisko
          <input
            onChange={({ target }) =>
              setData(prev => ({ ...prev, surname: target.value }))
            }
            className=""
            placeholder="Nowak"
            type="text"
          />
        </label>
        <br />
        <label>
          <p>Lata doświadczenia</p>
          <select
            name="select"
            onChange={({ target }) =>
              setData(prev => ({ ...prev, experience: target.value }))
            }
            value={data.experience}
          >
            <option value="wybierz">wybierz</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </label>
        <br />
        <label>
          Stawka godzinowa
          <input
            onChange={({ target }) =>
              setData(prev => ({ ...prev, price: target.value }))
            }
            className=""
            type="number"
            placeholder="50"
          />
        </label>
        <br />
        <label>
          Telefon kontaktowy
          <input
            onChange={({ target }) =>
              setData(prev => ({ ...prev, phone: target.value }))
            }
            className=""
            type="number"
            placeholder="123456789"
          />
        </label>
        <br />
        <label>
          Link do Zdjęcia
          <input
            onChange={({ target }) =>
              setData(prev => ({ ...prev, picture: target.value }))
            }
            className=""
            type="text"
            placeholder="https://source.unsplash.com/AxI9niqj_60"
          />
        </label>
        <br />
        <label>
          <p>Rodzaje zajęć</p>
          <input
            onChange={({ target }) => setPoleClass(target.value)}
            className="short"
            type="text"
            value={poleClass}
            placeholder="Exotic"
          />
          <button className="right" onClick={addPoleClass}>
            Dodaj
          </button>
        </label>
        {data.classes.length > 0 &&
          data.classes.map((e, i) => {
            return (
              <p className="blob" key={e}>
                {e}
              </p>
            );
          })}
        <br />
        <label>
          Facebook
          <input
            onChange={({ target }) =>
              setData(prev => ({ ...prev, facebook: target.value }))
            }
            className=""
            type="text"
            value={data.facebook}
            placeholder="Link do facebooka"
          />
        </label>
        <br />
        <label>
          Instagram
          <input
            onChange={({ target }) =>
              setData(prev => ({ ...prev, instagram: target.value }))
            }
            className=""
            type="text"
            value={data.intagram}
            placeholder="Link do instagrama"
          />
        </label>
        <br />
        <label>
          Gdzie uczę
          <input
            onChange={({ target }) => setSchoolName(target.value)}
            className=""
            type="text"
            value={poleSchoolName}
            placeholder="Nazwa studia"
          />
          <br />
          <input
            onChange={({ target }) => setPoleHour(target.value)}
            className="short"
            type="text"
            value={poleHour}
            placeholder="Godziny zajęć (np. pon 8:00)"
          />
          <button className="right" onClick={addPoleHours} type="button">
            Dodaj
          </button>
          <br />
        </label>
        {poleHours.map((e, i) => {
          return (
            <p className="blob" key={i}>
              {e}
            </p>
          );
        })}
        <button
          style={{ display: "block" }}
          onClick={addSchedule}
          type="button"
        >
          Stwórz plan
        </button>
        {data.schedule.map((e, i) => {
          return (
            <div className="blob_box" key={e.school}>
              <p className="bold blob_text">{e.school}</p>
              <ul>
                {e.hours.map((e, i) => (
                  <li key={i}>
                    <p className="blob_text">{e}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        <br />
        <label>
          Krótki opis
          <textarea
            onChange={({ target }) =>
              setData(prev => ({ ...prev, bio: target.value }))
            }
            placeholder="Napisz coś o sobie"
            rows="10"
            value={data.bio}
          />
        </label>
        <br />
        <button type="submit">Stwórz profil</button>
        {message && (
          <p
            className="blob"
            style={{
              color: "red",
              textAlign: "center",
              display: "inline-block",
              marginLeft: "20px"
            }}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

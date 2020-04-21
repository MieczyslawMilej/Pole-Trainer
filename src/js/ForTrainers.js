import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo_pole_trainer from "./../images/logo_pole_trainer.svg";

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

  function addPoleClass(e) {
    setData(prev => ({
      ...prev,
      classes: [...prev.classes, poleClass]
    }));
    setPoleClass("");
  }

  function addPoleHours(e) {
    setPoleHours(prev => [...prev, poleHour]);
    setPoleHour("");
  }

  function addSchedule(e) {
    const poleClassesData = {
      school: poleSchoolName,
      hours: poleHours
    };

    setData(prev => {
      return { ...prev, schedule: [...prev.schedule, poleClassesData] };
    });

    setPoleHours([]);
    setSchoolName("");
  }

  // function addSocialMedia(e) {
  //   setData(prev => ({
  //     ...prev,
  //     socialMedia: [...prev.socialMedia, socialMedia]
  //   }));
  //   setSocialMedia("");
  // }

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
      setMessage("Wybierz doświadczenie");
      return;
    }
    if (data.price.length < 1) {
      setMessage("Cena nie może być puste");
      return;
    }
    if (data.phone.length < 9) {
      setMessage("Numer musi zawierać minimum 9 cyfr");
      return;
    }
    if (data.bio.length < 120) {
      setMessage("Message should be at least 120 characters long.");
      return;
    }
    if (data.picture.length < 120) {
      setMessage("Dodaj link do zdjęcia.");
      return;
    }

    setMessage("");

    fetch("https://fer-api.coderslab.pl/v1/exam5/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
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
  console.log(poleHours);
  return (
    <>
      <form onSubmit={handleSubmit}>
        {message && <p>{message}</p>}
        <label>
          Imię
          <input
            onChange={({ target }) =>
              setData(prev => ({ ...prev, name: target.value }))
            }
            className=""
            placeholder={data.name}
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
            placeholder={data.surname}
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
          Cena zajęć
          <input
            onChange={({ target }) =>
              setData(prev => ({ ...prev, price: target.value }))
            }
            className=""
            type="number"
            placeholder={data.price}
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
            placeholder={data.phone}
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
            placeholder={data.picture}
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
            placeholder="dodaj zajęcia"
          />
          <button onClick={addPoleClass}>Dodaj zajęcia</button>
        </label>
        {data.classes.length > 0 &&
          data.classes.map((e, i) => {
            return <p key={i}>{e}</p>;
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
            placeholder="dodaj link do facebooka"
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
            placeholder="dodaj link do instagrama"
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
            placeholder="dodaj zajęcia"
          />
          <br />
          <input
            onChange={({ target }) => setPoleHour(target.value)}
            className="short"
            type="text"
            value={poleHour}
            placeholder="dodaj godziny zajęć"
          />
          <button onClick={addPoleHours} type="button">
            Dodaj godziny
          </button>
          {poleHours.map((e, i) => {
            return <p key={i}>{e.hours}</p>;
          })}
          <br />
          <button onClick={addSchedule} type="button">
            Stwórz plan
          </button>
        </label>
        {data.schedule.map((e, i) => {
          return (
            <>
              <p key={i}>{e.school}</p>
              {e.hours.map((e, i) => (
                <p> {e}</p>
              ))}
            </>
          );
        })}
        <br />
        <label>
          Bio
          <textarea
            onChange={({ target }) =>
              setData(prev => ({ ...prev, bio: target.value }))
            }
            className=""
            placeholder={data.bio}
          />
        </label>
        <br />
        <button className="" type="submit">
          Dodaj
        </button>
      </form>
    </>
  );
}
//
// <input
//   onChange={({ target }) =>
//     setData(prev => ({ ...prev, experience: target.value }))
//   }
//   className=""
//   type="number"
//   placeholder={data.experience}
// />

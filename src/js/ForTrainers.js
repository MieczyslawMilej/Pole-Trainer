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
    if (data.bio.length < 120) {
      setMessage("Opis musi zawierać minimum 120 znaków.");
      return;
    }
    if (data.picture.length < 1) {
      setMessage("Dodaj link do zdjęcia.");
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
    <>
      <form onSubmit={handleSubmit}>
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
              <p className="bold blob_text">
                {e.school}
              </p>
              <ul>
                {e.hours.map((e, i) => (
                  <li key={i}>
                    <p className="blob_text">
                      {e}
                    </p>
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
            style={{
              color: "red",
              textAlign: "center",
              display: "inline-block"
            }}
          >
            {message}
          </p>
        )}
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

//   const element = {
//     name: "Katarzyna",
//     surname: "Wilczyńska",
//     experience: "6",
//     bio: `Od dzieciństwa związana z muzyką. Szkołę średnią ukończyła na profilach gry na fortepianie i rytmiki. Zajęcia, na które uczęszczała m.in. techniki ruchu oraz interpretacji muzyki, dały jej swobodę ruchowej wypowiedzi, płynności oraz improwizacji w tańcu. Absolwentka Akademii Muzycznej w Krakowie. Aktualnie przekazuje swoją wiedzę w dziedzinie gry na fortepianie najmłodszym, ucząc w szkole muzycznej. W Pole Dance odkryła swoją życiową pasję. Pragnie cały czas się rozwijać oraz przekazywać innym zdobyte umiejętności i wiedzę.
// Certyfikowany instruktor fitness, stretching oraz Vertical Dance. Uczestniczka licznych szkoleń i warsztatów Pole Dance m.in. z Yvonne Smink, Anastasią Sokolovą, Alessandrą Marchetti, Patrycją Tazbir, Patrykiem Rybarskim, Magdaleną Marycz, Klaudią Nowak, Katarzyną Bigos, Iwoną Drzymałą. Brała również udział w warsztatach Aerial Dance (aerial hammock, aerial pole, aerial hoop).`,
//     price: "50",
//     phone: "123456789",
//     picture: "http://www.chodznapoledance.pl/wilczynska.JPG",
//     classes: ["Exotic","Pole Strength"],
//     schedule: [{school: "Chodź na Pole Dance", hours: ["pon 14:00","wt 14:00","śr 14:00","czw 14:00",]}],
//     facebook: "www.facebook.pl",
//     instagram: "www.instagram.pl"
//   };

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
    if (data.picture.length < 2) {
      setMessage("Dodaj link do zdjęcia.");
      return;
    }

    setMessage("");

    fetch("https://api.jsonbin.io/b	", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "secret-key": "$2b$10$Emtr4pxCUtwgh7HANul37u5uxXHbgZC7qEpK7mxpWr.vLMKMiPDK2",
        "collection-id": "5e9ffc212940c704e1dc8cc1"
      }
    })
      .then(response => response.json())
      .then(data => {
        setMessage("Dodano profil!", data);
      })
      .catch(error => {
        setMessage(error);
      });
  }

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
            return <p key={e}>{e}</p>;
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
            value={data.intagram}
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
          <br />
        </label>
        {poleHours.map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
        <button onClick={addSchedule} type="button">
        Stwórz plan
        </button>
        {data.schedule.map((e, i) => {
          return (
            <>
              <p key={i}>{e.school}</p>
              {e.hours.map((e, i) => (
                <p key={i}> {e}</p>
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
            placeholder="Napisz coś o sobie"
            rows="10"
            value={data.bio}
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

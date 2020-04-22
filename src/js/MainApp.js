import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo_pole_trainer from "./../images/logo_pole_trainer.svg";
import Nav from "./Nav";
import Card from "./Card";

export default function MainApp() {
  const [data, setData] = useState([]);

  function loadBin(id) {
    fetch(`https://api.jsonbin.io/b/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "secret-key":
          "$2b$10$Emtr4pxCUtwgh7HANul37u5uxXHbgZC7qEpK7mxpWr.vLMKMiPDK2",
        "collection-id": "5e9ffc212940c704e1dc8cc1"
      }
    })
      .then(resp => resp.json())
      .then(data => setData(prev => [...prev, data]));
  }

  useEffect(() => {
    fetch(
      "https://api.jsonbin.io/e/collection/5e9ffc212940c704e1dc8cc1/all-bins",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "secret-key":
            "$2b$10$Emtr4pxCUtwgh7HANul37u5uxXHbgZC7qEpK7mxpWr.vLMKMiPDK2"
        }
      }
    )
      .then(resp => resp.json())
      .then(data => {
        data.records.forEach(bin => {
          loadBin(bin.id);
        });
      });
  }, []);
  if (!data) {
    return "Loading...";
  }
  return (
    <>
      <div className="main_app_wrapper">
        <Nav />
        <section className="main_app">
        {
          data.map(e=> <Card data={e}/>
          )
        }

        </section>
      </div>
    </>
  );
}

// fetch("https://api.jsonbin.io/c/5e9ffc212940c704e1dc8cc1", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     "secret-key": "$2b$10$Emtr4pxCUtwgh7HANul37u5uxXHbgZC7qEpK7mxpWr.vLMKMiPDK2",
//   }
// })

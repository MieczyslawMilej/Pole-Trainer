import React, { useEffect, useState } from "react";

import Card from "./Card";
import Loader from "./Loader";

export default function TreinerList() {
  const [data, setData] = useState(null);
  const SECRET_KEY = process.env.REACT_APP_SECRET_KEY  

  function loadBin(id) {
    fetch(`https://api.jsonbin.io/b/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "secret-key": REACT_APP_SECRET_KEY,
        "collection-id": "5e9ffc212940c704e1dc8cc1"
      }
    })
      .then(resp => resp.json())
      .then(data => setData(prev => (prev ? [...prev, data] : [data])));
  }

  useEffect(() => {
    fetch(
      "https://api.jsonbin.io/e/collection/5e9ffc212940c704e1dc8cc1/all-bins",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "secret-key": REACT_APP_SECRET_KEY
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
  let content = <Loader />;
  if (data) {
    content = data.map((el, i) => <Card key={i} data={el} />);
  }
  return <section className="main_app">{content}</section>;
}

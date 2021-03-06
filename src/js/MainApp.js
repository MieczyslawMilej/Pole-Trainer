import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import TreinerList from "./TreinerList";

export default function MainApp() {
  return (
    <div className="app_wrapper">
      <Nav />
      <TreinerList/>
    </div>
  );
}

// fetch("https://api.jsonbin.io/c/5e9ffc212940c704e1dc8cc1", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     "secret-key": "$2b$10$Emtr4pxCUtwgh7HANul37u5uxXHbgZC7qEpK7mxpWr.vLMKMiPDK2",
//   }
// })



// const [data, setData] = useState(null);
//
// function loadBin(id) {
  //   fetch(`https://api.jsonbin.io/b/${id}`, {
    //     method: "GET",
    //     headers: {
      //       "Content-Type": "application/json",
      //       "secret-key":
      //         "$2b$10$Emtr4pxCUtwgh7HANul37u5uxXHbgZC7qEpK7mxpWr.vLMKMiPDK2",
      //       "collection-id": "5e9ffc212940c704e1dc8cc1"
      //     }
      //   })
      //     .then(resp => resp.json())
      //     .then(data => setData(prev => prev ? [...prev, data] : [data]));
      // }
      //
      // useEffect(() => {
        //   fetch(
          //     "https://api.jsonbin.io/e/collection/5e9ffc212940c704e1dc8cc1/all-bins",
          //     {
            //       method: "GET",
            //       headers: {
              //         "Content-Type": "application/json",
              //         "secret-key":
              //           "$2b$10$Emtr4pxCUtwgh7HANul37u5uxXHbgZC7qEpK7mxpWr.vLMKMiPDK2"
              //       }
              //     }
              //   )
              //     .then(resp => resp.json())
              //     .then(data => {
                //       data.records.forEach(bin => {
                  //         loadBin(bin.id);
                  //       });
                  //     });
                  // }, []);

                  // let content = "Loading";
                  // if (data) {
                    //   content = data.map((e,i) => (
                      //     <Card key={i} data={e} />
                      //   ))
                      // }

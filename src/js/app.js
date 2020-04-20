import React from "react";
import ReactDOM from "react-dom";

import "./../sass/style.scss"; // adres do głównego pliku SASS

const App = () => {
  return <div>test</div>;
};

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <>
      <App />
    </>,
    document.getElementById("app")
  );
});

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

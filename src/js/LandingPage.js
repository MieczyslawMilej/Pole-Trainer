import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";

export default function LandingPage() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
}

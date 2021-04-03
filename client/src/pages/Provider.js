import React from "react";
import Nav from "../components/Nav";
import Preloader from "../components/Preloader/Preloader";
import Timer from "../components/Countdown/Timer";
import "./styles.css";

function Provider() {
  return (
    <div className="App">
          <Nav />
      <div className="container">
        <h1>
          Providers
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Preloader />
      </div>
    </div>
  );
}

export default Provider;
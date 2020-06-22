import React, { useState } from "react";
//import logo from './logo.svg';
import "./App.css";
import Parent from "./Parent";
import CounterContext from "./CounterContext";

function App() {
  let count = useState(0);

  let [isMorning, setMorning] = useState(true);

  return (
    <CounterContext.Provider value={count}>
      <div className={`App ${isMorning ? "dayLight" : "dayNight"}`}>
        <h1>Good {isMorning ? "Morning" : "Night"}</h1>
        <Parent />

        <button onClick={() => setMorning(!isMorning)}>Update Day</button>
      </div>
    </CounterContext.Provider>
  );
}

export default App;

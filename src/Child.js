import React, { useContext } from "react";
import CounterContext from "./CounterContext";
const Child = () => {
  let counterValue = useContext(CounterContext);

  return (
    <div>
      <h2>This is First Child</h2>
      <h1>The value of the counter is : {counterValue[0]}</h1>
      <button
        onClick={() => {
          counterValue[1](++counterValue[0]);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Child;

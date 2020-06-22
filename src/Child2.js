import React, { useReducer } from "react";
import CounterReducer from "./CounterReducer";

const Child2 = () => {
  let [state, dispatch] = useReducer(10);

  return (
    <div>
      <h2>The Value of the Reducer : {state}</h2>
    </div>
  );
};

export default Child2;

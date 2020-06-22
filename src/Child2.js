import React, { useReducer } from "react";
import CounterReducer from "./CounterReducer";

const Child2 = () => {
  let [state, dispatch] = useReducer(CounterReducer, 1);

  return (
    <div>
      <h2>This is Second Child</h2>
      <h2>The Value of the Reducer Variable is : {state}</h2>
      <button onClick={() => dispatch("INCREMENT")}>Increment Reducer</button>
    </div>
  );
};
export default Child2;

import React from "react";
import {
  CountValueContext,
  CountValueUpdateContext,
} from "../Context/CountContext";

// ^ Import the custom countValueContext and CountValueUpdateContext which are countvalue and updateFunction respectively

function CounterCard() {
  // ^ The hooks Return corresponding value and function which we capture in these variables for usage
  const countValue = CountValueContext();
  const incrementCount = CountValueUpdateContext();
  return (
    // ^ usage of the context Provided Data
    <section className="card">
      <div>{countValue}</div>
      <button onClick={() => incrementCount()}>Increment Count</button>
    </section>
  );
}

export default CounterCard;

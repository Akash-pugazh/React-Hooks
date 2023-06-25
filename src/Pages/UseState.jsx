import React from "react";
import { useState } from "react";

function UseState() {
  // ^ State with simple Values
  const [count, setCount] = useState(0); // ^ default Value within brackets()
  // ^ Destructure the value and function provided by useState

  // ^ State with object Values
  const [details, setDetails] = useState({
    count: 0,
    theme: "Black",
  });

  // ^ Simple States
  const incrementCount = () => {
    // ^ Normal Version
    // setCount(count + 1);
    // ^ Functional Version ( Prefered )
    setCount(prevCount => prevCount + 1);
  };
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  // ^ Object States
  const decrementCounter = () => {
    setDetails({ ...details, count: details.count - 1 });
    // ^ spread old values and update necessary values
  };
  const incrementCounter = () => {
    setDetails({ ...details, count: details.count + 1 });
  };

  const decrementTheme = () => {
    setDetails({ ...details, theme: "White" });
  };

  const incrementTheme = () => {
    setDetails({ ...details, theme: "Black" });
  };

  return (
    <div>
      {/* simple States */}
      <section>
        <button onClick={decrementCount}>-</button>
        <span style={{ margin: "1rem" }}>{count}</span>
        <button onClick={incrementCount}>+</button>
      </section>
      <br />
      {/* Object States */}
      <section>
        <button onClick={decrementCounter}>Decrement Count</button>
        <button onClick={decrementTheme}>Decrement Theme</button>
        <br />
        <span>{details.count}</span>
        <br />
        <span>{details.theme}</span>
        <br />
        <button onClick={incrementCounter}>Increment Count</button>
        <button onClick={incrementTheme}>Increment Theme</button>
      </section>
    </div>
  );
}

export default UseState;

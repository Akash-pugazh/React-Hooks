import React, { useState, useMemo } from "react";
// ^ import useMemo - Simply used for memoization or cache purpose

function UseMemo() {
  const [inputValue, setInputValue] = useState(0);
  const [theme, setTheme] = useState("white");

  // ^ here we square a number which slow because of a dummy loop runs over the 10000000000 times

  // ^ hence for every render of the page it will also slow and re render again and again

  // ^ To prevent use memo has been used which does not re render for the cached value is still in the place of input / state

  // * Note : If the some other state like theme changes it will also run the slowSquare function make the performance issue hence memoize value and perform only if the dependancy changes

  const squaredNumber = useMemo(() => slowSquaring(inputValue), [inputValue]);

  // ^ The second argument dependancies which it will memoize

  // * Another catch here : Is this memoize when the change of the input it will cause new object creation everytime which is not the same as the previous style object - check with useEffect

  // ^ It can also be memoized with the theme as dependancy

  const style = useMemo(() => {
    return {
      width: "90vw",
      height: "5rem",
      backgroundColor: theme == "white" ? "gray" : "black",
    };
  }, [theme]);

  return (
    <div>
      <input
        type="number"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue === 0 ? "" : inputValue}
      />
      <p>Squared Value : {squaredNumber}</p>
      <button
        onClick={() =>
          setTheme(prev => {
            return prev === "white" ? "black" : "white";
          })
        }
      >
        Change Theme
      </button>
      <br />
      <br />
      <div style={style}></div>
    </div>
  );
}

// ^ intentionally created to slow down page

function slowSquaring(inputValue) {
  for (let i = 0; i < 1000000000; i++) {}
  return inputValue ** 2;
}

export default UseMemo;

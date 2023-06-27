import React, { useState, useTransition } from "react";
// ^ Used to handle delay in state /  large state updates
function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const handleChange = e => {
    // ^ state1 : making it as higher priority by defining as outer - as React makes all state updates as higher priority
    setInputValue(e.target.value);

    // ^ state2: making it as low priority state update by running in background update states
    // * Try removing and run to see the difference
    startTransition(() => {
      let tempList = [];
      for (let i = 0; i < 200; i++) {
        tempList.push(e.target.value);
      }
      setList(tempList);
    });
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={inputValue} />
      {isPending
        ? "Loading"
        : list.map((data, index) => <div key={index}>{data}</div>)}
    </div>
  );
}

export default UseTransition;

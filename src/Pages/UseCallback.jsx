import React, { useCallback, useState } from "react";
import ListItems from "../Components/ListItems";

function UseCallback() {
  const [inputValue, setInputValue] = useState(1);
  const [dark, setDark] = useState(false);
  const style = {
    backgroundColor: !dark ? "white" : "black",
    color: !dark ? "black" : "white",
  };

  // ^ here the usecallback is same as usememo instead of caching the value it caches the entire function

  // * Concept to understand : For every time render of this component due to the state change a new function will be generated which will result in equality change and rerender of the component we passed to

  // ^  Think here we change the theme of page will cause the numberListFunc has created a new copy and then it get updated in list component as listComponent uses the function itself as the dependacy i.e if Function refrence changes it will give a sideEffect using useEffect

  // * Hence by use of the use callback prevent the entire function being created new time for every render by providing a dependancy we need we restrixt its creation

  // ^ Thus here we only want to generate the function if inputValue state changes will reflect in the listComponent

  const numberListFunc = useCallback(() => {
    return [inputValue, inputValue + 1, inputValue + 2];
  }, [inputValue]);

  return (
    <div style={style}>
      <input
        type="number"
        onChange={e => setInputValue(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Change Theme</button>
      <ListItems numberListFunc={numberListFunc} />
    </div>
  );
}

export default UseCallback;

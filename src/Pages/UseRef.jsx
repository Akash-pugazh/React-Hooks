import React, { useState, useEffect, useRef } from "react";

// * Ref -> resist between renders acts like state

function UseRef() {
  const [text, setText] = useState("");
  const renderCount = useRef(1);

  // ^ Uncommon UseCase

  // ^ Even if the renderCount state changes it never re updates - useRef

  // ^ Try Typing it only updates on screen the value but not re-render (i.e) if rerender occurs it will render again and again as in use effect + use State working

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // ^ Common UseCase

  // ^ refer to any Dom elements Easily

  const inputRef = useRef();

  function focusInput() {
    // ^ reference of Dom elements made easy with useRef
    inputRef.current.focus();
    // ^ don't do the below code line
    inputRef.current.value = "Akash";
    // ! Bad Approach of adding values without updating state most used to do
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={e => setText(e.target.value)}
      />
      <p>Input is : {text}</p>
      <p>Render Times : {renderCount.current} </p>
      <button onClick={focusInput}>Focus Input Element</button>
    </div>
  );
}

export default UseRef;

import React, { useState } from "react";
import SlowListItems from "../Components/SlowListItems";

function UseDeferredValue() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      />

      <SlowListItems inputValue={inputValue} />
    </div>
  );
}

export default UseDeferredValue;

import React, { useMemo, useDeferredValue, useEffect } from "react";

function SlowListItems({ inputValue }) {
  const deferredInput = useDeferredValue(inputValue);

  useEffect(() => {
    console.log(
      `Input Value : ${inputValue} \nDeferred Value: ${deferredInput}`
    );
  }, [inputValue, deferredInput]);

  const list = useMemo(() => {
    const list = [];
    for (let i = 0; i < 20000; i++) {
      list.push(<div key={i}>{inputValue}</div>);
    }
    return list;
  }, [deferredInput]);

  return list;
}

export default SlowListItems;

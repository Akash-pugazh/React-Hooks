import React, { useEffect, useState } from "react";

function ListItems({ numberListFunc }) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(numberListFunc());
  }, [numberListFunc]);

  return (
    <div>
      ListItems
      <div>{values && values.map(v => <p key={v}>{v !== NaN && v}</p>)}</div>
    </div>
  );
}

export default ListItems;

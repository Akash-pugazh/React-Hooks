import React, { useId } from "react";

function TextInput() {
  const id = useId();
  // ^ Generates own Unique id

  // ! If we predefine a id ourself refences - for will varies

  // * For multiple elements we can just append some Keyword with a single generated id insted of nameid, passid, emailid...... eg - {`${id}name`} {`${id}pass`} {`${id}email`}
  return (
    <div>
      <label htmlFor={`${id}name`}>Name : </label>
      <input type="text" id={`${id}name`} />
    </div>
  );
}

export default TextInput;

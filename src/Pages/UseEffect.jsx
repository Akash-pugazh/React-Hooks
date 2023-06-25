import React, { useEffect, useState } from "react";

function UseEffect() {
  const [type, setType] = useState("posts");

  // ! USEEFFECT -> Side Effects
  // ^ useEffect - 2nd arguments => empty , [] , [anyStateValues]
  // ^ empty -> calls useEffect on every renders
  // ^ [] -> calls useEffect only on first render ie page load
  // ^ [anyState] -> calls useEffect on every time the state changes

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => console.log(json));

    // ^ runs after a single effect to clean up any previous effext like added eventListeners
    return () => {
      console.log("Clean Up Function");
    };
  }, [type]);

  return (
    <div>
      <button onClick={() => setType("posts")}>Posts</button>
      <button onClick={() => setType("comments")}>Comments</button>
      <button onClick={() => setType("users")}>Users</button>
      <section>{type}</section>
    </div>
  );
}

export default UseEffect;

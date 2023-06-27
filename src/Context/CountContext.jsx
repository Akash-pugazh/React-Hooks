import React, { useState, useContext } from "react";

// ^ Creation of Context
export const CountContext = React.createContext();
export const CountUpdateContext = React.createContext();

// ^ Custom Hooks to Provide Value and Function insted of Calling where it is been implemented we defaultly provide those hooks
export function CountValueContext() {
  return useContext(CountContext);
}
export function CountValueUpdateContext() {
  return useContext(CountUpdateContext);
}

// ^ Main Context Provider Component holds the Data and Functions to be passed to the Provider
export default function CountContextProvider({ children }) {
  // ^ {children} is a react provided default prop to use to mention any of the react children component to this -> Basically this act as parent and ones within this are Children Components

  // ^ State And Function Provided to the Childrens
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    // ^ Way to implement the Context Provider

    // * On first we provide countContext with the value for Count
    // * Then Another Context CountUpdateContext for providing the countUpdater Function
    
    // ! Can also be provided as single object and no hooks (Line 8) and destructured and used if there are many to share b.w components
    <CountContext.Provider value={count}>
      <CountUpdateContext.Provider value={updateCount}>
        {children}
      </CountUpdateContext.Provider>
    </CountContext.Provider>
  );
}

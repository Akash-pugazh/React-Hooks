import React from "react";
// ^ importing Custom hook context
import CountContextProvider from "../Context/CountContext";
import CounterCard from "../Components/CounterCard";

function UseContext() {
  return (
    // ^ Simplified with the context Provider in differnt context hook and adding it as the context for the child components

    // * Flow starts from here follow From context Provider to track the flow of working
    <CountContextProvider>
      <CounterCard />
    </CountContextProvider>
  );
}

export default UseContext;

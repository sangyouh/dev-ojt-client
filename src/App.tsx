import React from "react";
import "./App.css";
import { useCounter } from "contexts";
import { Other } from "./Other";

function App() {
  const { Increment, Decrement } = useCounter();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Increment />
      <Decrement />
      <Other />
    </div>
  );
}

export default App;

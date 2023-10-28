import React from "react";
import CalcBlock from "./components/CalcBlock";
import "./App.css";

function App() {
  return (
    <div className="App">
      <span className="appTitle">Your calc</span>
      <div className="container">
        <CalcBlock />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import CalcBlock from "./components/CalcBlock";
import "./App.css";
import HistoryBlock from "./components/HistoryBlock";

function App() {
  return (
    <div className="App">
      <span className="titleApp">Your calc</span>
      <div className="container">
        <HistoryBlock />
        <CalcBlock />
      </div>
    </div>
  );
}

export default App;

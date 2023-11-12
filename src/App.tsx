import React, { useState } from "react";
import CalcBlock from "./components/CalcBlock";
import "./App.css";
import HistoryBlock from "./components/HistoryBlock";

function App() {
  const [currCalcId, setCurrCalcId] = useState<number>();

  return (
    <div className="App">
      <span className="titleApp">Your calc</span>
      <div className="container">
        <HistoryBlock onShowButtonClick={setCurrCalcId} />
        <CalcBlock currCalcId={currCalcId} />
      </div>
    </div>
  );
}

export default App;

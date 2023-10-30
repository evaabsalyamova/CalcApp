import { useState } from "react";
import "./styles.css";
import OptionBlock from "../OptionBlock";

const CalcBlock: React.FunctionComponent = () => {
  const [number, setNumber] = useState<string>();
  const [number2, setNumber2] = useState<string>();
  const [result, setResult] = useState<number>();
  const [option, setOption] = useState<string>("+");

  const handleEqualButtonClick = () => {
    if (option === "+") {
      setResult(Number(number) + Number(number2));
    }
    if (option === "-") {
      setResult(Number(number) - Number(number2));
    }
    if (option === "*") {
      setResult(Number(number) * Number(number2));
    }
    if (option === "/") {
      setResult(Number(number) / Number(number2));
    }
  };

  return (
    <div className="containerCalcBlock">
      <input
        placeholder="Value"
        onChange={(enteredNum) => setNumber(enteredNum.target.value)}
        value={number}
      />
      <div>
        <OptionBlock onOptionSelect={setOption} />
      </div>
      <input
        placeholder="Value"
        onChange={(enteredNum) => setNumber2(enteredNum.target.value)}
        value={number2}
      />
      <button onClick={handleEqualButtonClick}>=</button>
      {result && <div>{result}</div>}
    </div>
  );
};
export default CalcBlock;

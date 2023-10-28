import { useState } from "react";
import "./styles.css";

const CalcBlock: React.FunctionComponent = () => {
  const [number, setNumber] = useState<string>();
  const [number2, setNumber2] = useState<string>();
  const [result, setResult] = useState<number>();

  return (
    <div className="containerCalcBlock">
      <input
        placeholder="Value"
        onChange={(enteredNum) => setNumber(enteredNum.target.value)}
        value={number}
      />
      <div>+</div>
      <input
        placeholder="Value"
        onChange={(enteredNum) => setNumber2(enteredNum.target.value)}
        value={number2}
      />
      <button onClick={() => setResult(Number(number) + Number(number2))}>
        =
      </button>
      {result && <div>{result}</div>}
    </div>
  );
};
export default CalcBlock;

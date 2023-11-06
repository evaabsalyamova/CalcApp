import { useEffect, useState } from "react";
import "./styles.css";
import OptionBlock from "../OptionBlock";
import { addCalculation, useAppDispatch } from "../../redux";

const CalcBlock: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const [number, setNumber] = useState<string>();
  const [number2, setNumber2] = useState<string>();
  const [result, setResult] = useState<number>();
  const [option, setOption] = useState<string>("+");

  useEffect(() => {
    setResult(undefined);
  }, [number, number2]);

  useEffect(() => {
    if (result && number && number2) {
      dispatch(
        addCalculation({
          value1: number,
          symbol: option,
          value2: number2,
          result,
        })
      );
    }
  }, [dispatch, number, number2, option, result]);

  const handleEqualButtonClick = () => {
    if (!number || !number2) {
      return;
    }

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
    <div className="calcBlockContainer">
      <input
        placeholder="Value"
        type="number"
        onChange={(enteredNum) => setNumber(enteredNum.target.value)}
        value={number}
      />
      <div>
        <OptionBlock
          onOptionSelect={(option) => {
            setResult(undefined);
            setOption(option);
          }}
        />
      </div>
      <input
        placeholder="Value"
        type="number"
        onChange={(enteredNum) => setNumber2(enteredNum.target.value)}
        value={number2}
      />
      <button onClick={handleEqualButtonClick}>=</button>
      {result && <div className="calcResult">{result}</div>}
    </div>
  );
};
export default CalcBlock;

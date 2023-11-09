import { useCallback, useEffect, useState } from "react";
import "./styles.css";
import OptionBlock from "../OptionBlock";
import { addCalculation, useAppDispatch } from "../../redux";

const convertResult = (e: number): string => {
  return (Math.round(e * 100) / 100).toString();
};

const CalcBlock: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const [number, setNumber] = useState<string>();
  const [number2, setNumber2] = useState<string>();
  const [result, setResult] = useState<string>();
  const [option, setOption] = useState<string>("+");

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

  const handleEqualButtonClick = useCallback(() => {
    if (!number || !number2) {
      return;
    }

    if (option === "+") {
      setResult((Number(number) + Number(number2)).toString());
    }
    if (option === "-") {
      setResult((Number(number) - Number(number2)).toString());
    }
    if (option === "*") {
      setResult((Number(number) * Number(number2)).toString());
    }
    if (option === "/") {
      setResult(convertResult(Number(number) / Number(number2)));
    }
  }, [number, number2, option]);

  return (
    <div className="calcBlockContainer">
      <input
        className="enterValue"
        placeholder="Value"
        type="number"
        onChange={(enteredNum) => {
          setResult(undefined);
          setNumber(enteredNum.target.value);
        }}
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
        className="enterValue"
        placeholder="Value"
        type="number"
        onChange={(enteredNum) => {
          setResult(undefined);
          setNumber2(enteredNum.target.value);
        }}
        value={number2}
      />
      <button className="equalButton" onClick={handleEqualButtonClick}>
        =
      </button>
      {result && <div className="calcResult">{result}</div>}
    </div>
  );
};
export default CalcBlock;

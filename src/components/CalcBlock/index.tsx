import { useCallback, useEffect, useState } from "react";
import "./styles.css";
import OptionBlock from "../OptionBlock";
import { addCalculation, useAppDispatch, useAppSelector } from "../../redux";

interface IProps {
  currCalcId: number | undefined;
}

const convertResult = (e: number): string => {
  return (Math.round(e * 100) / 100).toString();
};

const CalcBlock: React.FunctionComponent<IProps> = ({ currCalcId }) => {
  const dispatch = useAppDispatch();

  const [number, setNumber] = useState<string>();
  const [number2, setNumber2] = useState<string>();
  const [result, setResult] = useState<string>();
  const [option, setOption] = useState<string>("+");
  const [isNewCalc, setIsNewCalc] = useState<boolean>(true);

  const currCalc = useAppSelector((state) =>
    state.calcList.find((calc) => calc.id === currCalcId)
  );

  useEffect(() => {
    if (currCalc !== undefined) {
      setIsNewCalc(false);

      setNumber(currCalc.value1);
      setOption(currCalc.symbol);
      setNumber2(currCalc.value2);
      setResult(currCalc.result);
    }
  }, [currCalc]);

  useEffect(() => {
    if (result && number && number2 && isNewCalc) {
      dispatch(
        addCalculation({
          value1: number,
          symbol: option,
          value2: number2,
          result,
        })
      );
    }
  }, [dispatch, isNewCalc, number, number2, option, result]);

  const handleEqualButtonClick = useCallback(() => {
    if (!number || !number2) {
      return;
    }

    setIsNewCalc(true);

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
        onChange={(enteredNum) => {
          if (!isNaN(Number(enteredNum.target.value))) {
            setNumber(enteredNum.target.value);
            setResult(undefined);
          }
        }}
        value={number ?? ""}
      />
      <div>
        <OptionBlock
          selectedOption={option}
          onOptionSelect={(option) => {
            setResult(undefined);
            setOption(option);
          }}
        />
      </div>
      <input
        className="enterValue"
        placeholder="Value"
        onChange={(enteredNum) => {
          if (!isNaN(Number(enteredNum.target.value))) {
            setNumber2(enteredNum.target.value);
            setResult(undefined);
          }
        }}
        value={number2 ?? ""}
      />
      <button className="equalButton" onClick={handleEqualButtonClick}>
        =
      </button>
      {result && <div className="calcResult">{result}</div>}
    </div>
  );
};
export default CalcBlock;

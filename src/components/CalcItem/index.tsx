import { useDispatch } from "react-redux";
import { icons } from "../../assets/icon";
import { ICalc, deleteCalc } from "../../redux";
import "./styles.css";
import { useMemo } from "react";

interface IProps {
  calc: ICalc;
}

const CalcItem: React.FunctionComponent<IProps> = ({ calc }) => {
  const dispatch = useDispatch();

  const handleDeleteButtonClick = (): void => {
    dispatch(deleteCalc({ id: calc.id }));
  };

  const value2 = useMemo(() => {
    return calc.value2[0] === "-" ? `(${calc.value2})` : calc.value2;
  }, [calc.value2]);

  return (
    <>
      <div className="calcHeader">
        <div className="calcTitle">
          {`${calc.value1} ${calc.symbol} ${value2} = ${calc.result}`}
        </div>
        <div className="calcButtons">
          <div>{icons.showResult}</div>
          <div onClick={handleDeleteButtonClick}>{icons.delete}</div>
        </div>
      </div>
    </>
  );
};

export default CalcItem;

import { useDispatch } from "react-redux";
import { icons } from "../../assets/icon";
import { ICalc, deleteCalc } from "../../redux";
import "./styles.css";

interface IProps {
  calc: ICalc;
}

const CalcItem: React.FunctionComponent<IProps> = ({ calc }) => {
  const dispatch = useDispatch();

  const handleDeleteButtonClick = (): void => {
    dispatch(deleteCalc({ id: calc.id }));
  };

  return (
    <>
      <div className="calcHeader">
        <div className="calcTitle">
          {`${calc.value1} ${calc.symbol} ${calc.value2} = ${calc.result}`}
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

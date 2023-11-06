import { icons } from "../../assets/icon";
import { ICalc } from "../../redux";
import "./styles.css";

interface IProps {
  calc: ICalc;
}

const CalcItem: React.FunctionComponent<IProps> = ({ calc }) => {
  return (
    <>
      <div className="calcHeader">
        <div className="calcTitle">
          {`${calc.value1} ${calc.symbol} ${calc.value2} = ${calc.result}`}
        </div>
        <div className="calcButtons">
          <div>{icons.checkReady}</div>
          <div>{icons.delete}</div>
        </div>
      </div>
    </>
  );
};

export default CalcItem;

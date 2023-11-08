import { icons } from "../../assets/icon";
import { useAppSelector } from "../../redux";
import CalcItem from "../CalcItem";
import "./styles.css";

const HistoryBlock: React.FunctionComponent = () => {
  const calcList = useAppSelector((state) => state.calcList);

  return (
    <div className="historyBlockContainer">
      <div className="historyTitle">
        {icons.history}
        History
      </div>
      {calcList && (
        <div>
          {calcList.map((calc) => (
            <CalcItem calc={calc} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryBlock;

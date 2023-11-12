import { icons } from "../../assets/icon";
import { useAppSelector } from "../../redux";
import CalcItem from "../CalcItem";
import "./styles.css";

interface IProps {
  onShowButtonClick: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const HistoryBlock: React.FunctionComponent<IProps> = ({
  onShowButtonClick,
}) => {
  const calcList = useAppSelector((state) => state.calcList);

  return (
    <div className="historyBlockContainer">
      <div className="historyBlockTitle">
        {icons.history}
        History
      </div>
      {calcList && (
        <div className="historyBlockList">
          {calcList.map((calc) => (
            <CalcItem
              calc={calc}
              key={calc.id}
              onShowButtonClick={onShowButtonClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryBlock;

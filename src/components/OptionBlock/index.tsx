import "./styles.css";

interface IProps {
  onOptionSelect: React.Dispatch<React.SetStateAction<string>>;
  selectedOption: string;
}

const OptionBlock: React.FunctionComponent<IProps> = ({
  onOptionSelect,
  selectedOption,
}) => {
  return (
    <select
      className="selectOption"
      name="action"
      onChange={(e) => onOptionSelect(e.target.value)}
    >
      <option value="+" selected={selectedOption === "+"}>
        +
      </option>
      <option value="-" selected={selectedOption === "-"}>
        -
      </option>
      <option value="*" selected={selectedOption === "*"}>
        *
      </option>
      <option value="/" selected={selectedOption === "/"}>
        /
      </option>
    </select>
  );
};

export default OptionBlock;

import "./styles.css";

interface IProps {
  onOptionSelect: React.Dispatch<React.SetStateAction<string>>;
}

const OptionBlock: React.FunctionComponent<IProps> = ({ onOptionSelect }) => {
  return (
    <select
      className="selectOption"
      name="action"
      onChange={(e) => onOptionSelect(e.target.value)}
    >
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
  );
};

export default OptionBlock;

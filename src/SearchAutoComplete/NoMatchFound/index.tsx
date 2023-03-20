import "./NoMatchFound.css";
const NoMatchFound = () => {
  return (
    <div className="optionItems option-disabled">
      oops! No Match Found...
      <span className="hintText">Press Enter to add into Search queries</span>
    </div>
  );
};

export default NoMatchFound;

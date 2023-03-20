import "./SearchAutoComplete.css";

import useTextControl from "./useTextControl";

type Props = {};

const SearchAutoComplete = (props: Props) => {
  const [controlledText, onChangeText] = useTextControl();

  return (
    <div className="selector-container">
      <input
        type="text"
        name="search"
        value={controlledText}
        onChange={onChangeText}
      />
    </div>
  );
};

export default SearchAutoComplete;

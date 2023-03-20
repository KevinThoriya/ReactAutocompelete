import "./SearchAutoComplete.css";

import Cross from '../assets/close.svg';
import Down from '../assets/down.svg';
import Search from '../assets/Search.svg';
import useTextControl from "./useTextControl";

type Props = {};

const SearchAutoComplete = (props: Props) => {
  const [controlledText, onChangeText] = useTextControl();

  return (
    <div className="selector-container">
      <img src={Search} width={20} className="selector-searchIcon" />
      <input
        type="text"
        name="search"
        value={controlledText}
        onChange={onChangeText}
      />
      <img src={Cross} width={20} className="selector-closeIcon" />
      <img src={Down} width={20} className="selector-caretIcon" />
    </div>
  );
};

export default SearchAutoComplete;

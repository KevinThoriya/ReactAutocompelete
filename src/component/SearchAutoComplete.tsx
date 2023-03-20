import "./SearchAutoComplete.css";

import Cross from '../assets/close.svg';
import Down from '../assets/down.svg';
import Search from '../assets/Search.svg';
import { useState } from "react";
import useTextControl from "./useTextControl";

type Props = {};

const SearchAutoComplete = (props: Props) => {
  const [controlledText, onChangeText, clearText] = useTextControl();
  const [isSelectionFocused, setIsSelectionFocus] = useState(false);

  const onFocus = () => setIsSelectionFocus(true);
  const onBlur = () => setIsSelectionFocus(false);


  return (
    <div className={`selector-container ${isSelectionFocused ? 'selector-focused' : ''}`}>
      <img src={Search} width={20} className="selector-searchIcon" />
      <input
        type="text"
        name="search"
        value={controlledText}
        onChange={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}

      />
      {controlledText && <div role="button" onClick={clearText} className="selector-iconContainer">
        <img src={Cross} width={20} className="selector-closeIcon" />
      </div>}
      <img src={Down} width={20} className="selector-caretIcon" />
    </div>
  );
};

export default SearchAutoComplete;

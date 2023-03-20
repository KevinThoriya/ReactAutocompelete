import "./SearchAutoComplete.css";

import { useMemo, useState } from "react";

import Cross from "../assets/close.svg";
import Down from "../assets/down.svg";
import NoMatchFound from "./NoMatchFound";
import Search from "../assets/Search.svg";
import SuggestionItem from "./SuggestionItem";
import useTextControl from "./useTextControl";

type Props = {};

const SearchAutoComplete = (props: Props) => {
  const { controlledText, onChangeText, clearText } = useTextControl();
  const [searchedTerms, setSearchedTerms] = useState([
    "Some Default",
    "Search Terms",
    "Are Added,",
    "So Please Do",
    "Experiment With IT.",
  ]);

  const filterTerms = useMemo(() => {
    let lowerSearch = controlledText.toLowerCase();
    return searchedTerms.filter((term) =>
      term.toLowerCase().includes(lowerSearch)
    );
  }, [searchedTerms, controlledText]);

  const [isSelectionFocused, setIsSelectionFocus] = useState(false);
  const onFocus = () => setIsSelectionFocus(true);
  const onBlur = () => setIsSelectionFocus(false);

  return (
    <div
      className={`selector-main-container ${
        isSelectionFocused ? "selector-main-container-active" : ""
      }`}
    >
      <>
        <div
          className={`selector-container ${
            isSelectionFocused ? "selector-focused" : ""
          }`}
        >
          <img src={Search} width={20} className="selector-searchIcon" />
          <input
            type="text"
            name="search"
            value={controlledText}
            onChange={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
            autoComplete="off"
          />
          {controlledText && (
            <div
              role="button"
              onClick={clearText}
              className="selector-iconContainer"
            >
              <img src={Cross} width={20} className="selector-closeIcon" />
            </div>
          )}
          <img src={Down} width={20} className="selector-caretIcon" />
        </div>
        <div className="selector-options">
          {isSelectionFocused &&
            (filterTerms.length ? (
              filterTerms.map((term) => (
                <SuggestionItem
                  key={term}
                  term={term}
                  searchTerm={controlledText}
                />
              ))
            ) : (
              <NoMatchFound />
            ))}
        </div>
      </>
    </div>
  );
};

export default SearchAutoComplete;

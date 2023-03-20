import "./SearchAutoComplete.css";

import { useMemo, useRef, useState } from "react";

import Cross from "../assets/close.svg";
import Down from "../assets/down.svg";
import NoMatchFound from "./NoMatchFound";
import Search from "../assets/Search.svg";
import SuggestionItem from "./SuggestionItem";
import Up from "../assets/up.svg";
import useSearchingFactory from "./useSearchingFactory";
import useTextControl from "./useTextControl";

type Props = {};

const SearchAutoComplete = (props: Props) => {
  const { controlledText, onChangeText, clearText } = useTextControl();
  const { filterTerms } = useSearchingFactory(controlledText);
  const [isSelectionFocused, setIsSelectionFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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
            onFocus={() => setIsSelectionFocus(true)}
            onBlur={() => setIsSelectionFocus(false)}
            autoComplete="off"
            ref={inputRef}
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
          <div
            role="button"
            onClick={() => inputRef.current?.focus?.()}
            className="selector-iconContainer"
          >
            <img
              src={isSelectionFocused ? Up : Down}
              width={20}
              className="selector-caretIcon"
            />
          </div>
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

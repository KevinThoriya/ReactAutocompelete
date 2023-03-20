import "./SearchAutoComplete.css";

import { useMemo, useRef, useState } from "react";

import Cross from "../assets/close.svg";
import Down from "../assets/down.svg";
import NoMatchFound from "./NoMatchFound";
import Search from "../assets/Search.svg";
import SuggestionItem from "./SuggestionItem";
import Up from "../assets/up.svg";
import useOnClickOutside from "./useOnClickOutside";
import useSearchingFactory from "./useSearchingFactory";
import useSearchingStore from "./useSearchingStore";
import useTextControl from "./useTextControl";

type Props = {};

const SearchAutoComplete = ({}: Props) => {
  const [isSelectionFocused, setIsSelectionFocus] = useState(false);

  const { controlledText, onChangeText, clearText, setControlledText } =
    useTextControl();

  const { searchedTerms } = useSearchingStore();

  const { filterTerms, onSelectOfOption } = useSearchingFactory({
    controlledText,
    setControlledText,
    searchedTerms,
    setIsSelectionFocus,
  });

  const selectorRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(selectorRef, () => setIsSelectionFocus(false));

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      ref={selectorRef}
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
                  onSelect={() => onSelectOfOption(term)}
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

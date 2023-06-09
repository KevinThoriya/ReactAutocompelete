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

export type SearchTerm = string;
type Props = {
  searchedTerms: SearchTerm[];
  appendSearchTerm: (data: SearchTerm) => void;
};

const SearchAutoComplete = ({ searchedTerms, appendSearchTerm }: Props) => {
  const [isSelectionFocused, setIsSelectionFocus] = useState(false);

  const { controlledText, onChangeText, clearText, setControlledText } =
    useTextControl();

  const { filterTerms, onSelectOfOption, enterListener } = useSearchingFactory({
    controlledText,
    setControlledText,
    searchedTerms,
    setIsSelectionFocus,
    appendSearchTerm,
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
            onKeyDown={enterListener}
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
          {isSelectionFocused && (
            <div className="selector-options-child">
              {filterTerms.length ? (
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
              )}
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default SearchAutoComplete;

import "./SelectionItem.css";

import { SearchTerm } from "../SearchAutoComplete";

type SuggestionItemProps = {
  term: SearchTerm;
  searchTerm: string;
  onSelect: () => void;
};
const SuggestionItem = ({
  term,
  searchTerm,
  onSelect,
}: SuggestionItemProps) => {
  const startIndex = term.toLowerCase().indexOf(searchTerm.toLowerCase());
  const startString = term.slice(0, startIndex);
  const matchingString = term.slice(startIndex, startIndex + searchTerm.length);
  const endingString = term.slice(startIndex + searchTerm.length, term.length);
  return (
    <div className="optionItems" role="button" onClick={onSelect}>
      <span>{startString}</span>
      <span className="highlight">{matchingString}</span>
      <span>{endingString}</span>
    </div>
  );
};

export default SuggestionItem;

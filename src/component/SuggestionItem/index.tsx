import "./SelectionItem.css";

type SuggestionItemProps = { term: string; searchTerm: string };
const SuggestionItem = ({ term, searchTerm }: SuggestionItemProps) => {
  const startIndex = term.toLowerCase().indexOf(searchTerm.toLowerCase());
  const startString = term.slice(0, startIndex);
  const matchingString = term.slice(startIndex, startIndex + searchTerm.length);
  const endingString = term.slice(startIndex + searchTerm.length, term.length);
  return (
    <div className="optionItems">
      <span>{startString}</span>
      <span className="highlight">{matchingString}</span>
      <span>{endingString}</span>
    </div>
  );
};

export default SuggestionItem;

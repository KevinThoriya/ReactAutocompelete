import { useMemo, useState } from "react";

type Prop = {
  controlledText: string;
  setControlledText: (text: string) => void;
  searchedTerms: string[];
  appendSearchTerm: (text: string) => void;
  setIsSelectionFocus: (focus: boolean) => void;
};

const useSearchingFactory = ({
  controlledText,
  setControlledText,
  searchedTerms,
  appendSearchTerm,
  setIsSelectionFocus,
}: Prop) => {
  const filterTerms = useMemo(() => {
    let lowerSearch = controlledText.toLowerCase();
    return searchedTerms.filter((term: string) =>
      term.toLowerCase().includes(lowerSearch)
    );
  }, [searchedTerms, controlledText]);

  const onSelectOfOption = (term: string) => {
    setControlledText(term);
    setIsSelectionFocus(false);
  };

  const enterListener = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code == "Enter") {
      setIsSelectionFocus(false);
      !searchedTerms.includes(controlledText) &&
        appendSearchTerm(controlledText);
      event.currentTarget.blur();
    }
  };

  return { filterTerms, onSelectOfOption, enterListener };
};
export default useSearchingFactory;

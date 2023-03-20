import { useMemo, useState } from "react";

type Prop = {
  controlledText: string;
  setControlledText: (text: string) => void;
  searchedTerms: string[];
  setIsSelectionFocus: (focus: boolean) => void;
};

const useSearchingFactory = ({
  controlledText,
  setControlledText,
  searchedTerms,
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

  return { filterTerms, onSelectOfOption };
};
export default useSearchingFactory;

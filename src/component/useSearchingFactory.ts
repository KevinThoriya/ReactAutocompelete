import { useMemo, useState } from "react";

type Prop = {
  controlledText: string;
  setControlledText: (text: string) => void;
  setIsSelectionFocus: (focus: boolean) => void;
};

const useSearchingFactory = ({
  controlledText,
  setControlledText,
  setIsSelectionFocus,
}: Prop) => {
  const [searchedTerms, setSearchedTerms] = useState<string[]>([
    "Some Default",
    "Search Terms",
    "Are Added,",
    "So Please Do",
    "Experiment With IT.",
  ]);

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

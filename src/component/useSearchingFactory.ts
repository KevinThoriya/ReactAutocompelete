import { useMemo, useState } from "react";

const useSearchingFactory = (controlledText: string) => {
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

  return { filterTerms };
};
export default useSearchingFactory;

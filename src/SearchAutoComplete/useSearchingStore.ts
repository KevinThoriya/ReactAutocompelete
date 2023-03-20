import React, { useState } from "react";

const useSearchingStore = () => {
  const [searchedTerms, setSearchedTerms] = useState<string[]>([
    "Some Default",
    "Search Terms",
    "Are Added,",
    "So Please Do",
    "Experiment With IT.",
  ]);

  const appendSearchTerm = (text: string) => {
    setSearchedTerms([text, ...searchedTerms]);
  };
  return { searchedTerms, appendSearchTerm };
};

export default useSearchingStore;

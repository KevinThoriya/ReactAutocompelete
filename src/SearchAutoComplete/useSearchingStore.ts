import React, { useState } from "react";

const useSearchingStore = () => {
  const [searchedTerms, setSearchedTerms] = useState<string[]>([
    "Some Default",
    "Search Terms",
    "Are Added,",
    "So Please Do",
    "Experiment With IT.",
  ]);
  return { searchedTerms };
};

export default useSearchingStore;

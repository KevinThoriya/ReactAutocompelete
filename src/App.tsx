import "./App.css";

import SearchAutoComplete from "./SearchAutoComplete/SearchAutoComplete";
import SearchTermList from "./SearchTermList";
import useSearchingStore from "./SearchAutoComplete/useSearchingStore";

function App() {
  const { searchedTerms, appendSearchTerm } = useSearchingStore();
  return (
    <div className="App">
      <h1 className="headingText">Select AutoComplete </h1>
      <SearchAutoComplete {...{ searchedTerms, appendSearchTerm }} />
      <SearchTermList data={searchedTerms} />
    </div>
  );
}

export default App;

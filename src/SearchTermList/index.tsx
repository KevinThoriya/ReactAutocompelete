import "./SearchTermList.css";

import React from "react";
import { SearchTerm } from "../SearchAutoComplete/SearchAutoComplete";

type Props = {
  data: SearchTerm[];
};

const SearchTermList = ({ data }: Props) => {
  return (
    <div className="SearchTermList">
      <h3>Search Queries : </h3>
      <ul className="searchTermUl">
        {data.map((term) => (
          <li className="searchTermLi" key={term}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTermList;

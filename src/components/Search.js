import React, { useEffect, useState } from "react";
import { FRUITS } from "../utils/constants";

const Search = () => {
  const [allFruits, setAllFruits] = useState(FRUITS);
  const [filteredFruits, setFilteredFruits] = useState(FRUITS);
  const [searchText, setSearchText] = useState("");

  const filterData = (allFruits, searchText) => {
    const data = allFruits.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredFruits(data);
  };

  useEffect(() => {
    filterData(allFruits, searchText);
  }, [searchText]);

  return (
    <div>
      <div className="search-container">
        <label>Search:</label>
        <input
          type="text"
          name="userInput"
          id="userInput"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <ul>
          {filteredFruits.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Search;

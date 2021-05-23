import React from "react";


const SearchBar = ({onChange, placeholder}) => {
  return (
    <div className="Search">
    <span>
      <p class="inline-block px-4 font-semibold py-2">Search for a specific project</p>
      <input
        className="SearchInput"
        type="text"
        onChange={onChange}
        placeholder="Search"
        class="px-3 py-2 inline-block my-6"
      />
    </span>
    </div>
  );
};

export default SearchBar

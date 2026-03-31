"use client";

import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="search-wrapper">
      <div className="search-box">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;

import React from "react";
import SearchBar from "./SearchBar";
import MovieSuggestions from "./MovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute">
        <img src={BG_URL} className="bg-opacity-50 bg-black" />
      </div>
      <SearchBar />
      <MovieSuggestions />
    </div>
  );
};

export default GptSearch;

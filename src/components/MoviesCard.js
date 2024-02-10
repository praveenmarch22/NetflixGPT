import React from "react";
import { MOVIE_POSTER_URL } from "../utils/constants";

const MoviesCard = ({ posterPath }) => {
  return (
    <div className=" w-48 z-auto ">
      <img
        src={MOVIE_POSTER_URL + posterPath}
        className=" w-full pl-2 cursor-pointer"
      />
    </div>
  );
};

export default MoviesCard;

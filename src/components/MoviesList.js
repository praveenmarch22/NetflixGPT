import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movies }) => {
  return (
    movies && (
      <div className=" bg-transparent">
        <h1 className="font-bold text-xl py-4 pl-12  text-white">{title}</h1>
        <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden pl-7">
          <div className="flex">
            {movies.map((movie) => (
              <MoviesCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MoviesList;

import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black w-screen">
        <div className=" z-50 relative -mt-52">
          <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Popular"} movies={movies.popularMovies} />
          <MoviesList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MoviesList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MoviesList title={"Tv Series"} movies={movies.tvSeries} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/usePopularMovies";
import useTopRatedMovies from "../utils/useTopRatedMovies";
import useUpcomingMovies from "../utils/useUpcomingMovies";
import useTvSeries from "../utils/useTvSeries";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const gpt = useSelector((store) => store.gpt.gptSearchViewToggle);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTvSeries();

  return (
    <div>
      <Header />
      {gpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

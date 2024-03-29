import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;

  const randomIndex = Math.floor(Math.random() * 20);

  const { title, overview, id } = movies[randomIndex];

  return (
    <div className="">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

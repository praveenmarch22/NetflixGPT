import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState("");
  const getTrailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );

    const json = await data.json();

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer =
      filteredData.length != 0 ? filteredData[0] : json.results[0];

    setTrailerKey(trailer.key);
    console.log(trailer.key);
  };

  useEffect(() => {
    getTrailerVideo();
  }, []);

  return (
    <div className="w-screen overflow-x-hidden">
      <iframe
        className="w-screen aspect-video overflow-x-hidden object-fill bg-gradient-to-t from-black"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey +
          "?si=8CK9aLcb4Z8N8g0a&controls=0&amp;start=10&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

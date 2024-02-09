import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState(null);
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
  };

  useEffect(() => {
    getTrailerVideo();
  }, []);

  return (
    <div className="w-screen overflow-x-hidden">
      <iframe
        className="w-screen aspect-video overflow-x-hidden"
        src={
          "https://www.youtube-nocookie.com/embed/SzINZZ6iqxY?si=" +
          trailerKey +
          "?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

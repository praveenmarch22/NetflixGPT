import { useEffect } from "react";
import { API_OPTIONS } from "./constants";
import { useDispatch } from "react-redux";
import { addTvSeries } from "./moviesSlice";

const useTvSeries = () => {
  const dispatch = useDispatch();

  const getTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addTvSeries(json.results));
  };

  useEffect(() => {
    getTvSeries();
  }, []);
};

export default useTvSeries;

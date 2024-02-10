import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopratedMovies } from "./moviesSlice";
import { API_OPTIONS } from "./constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();

    console.log(json.results);

    dispatch(addTopratedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;

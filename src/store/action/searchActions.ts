import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIES, LOADING } from "../types";
import axios from "axios";

const APIKey = process.env.REACT_APP_APIKEY;

export const searchMovie = (text: string) => (
  dispatch: (arg0: { type: string; payload: string }) => void
) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text: string) => (
  dispatch: (arg0: { type: string; payload: object }) => any
) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then((response) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};

export const fetchMovie = (id: string) => (
  dispatch: (arg0: { type: string; payload: object }) => any
) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then((response) =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};

export const setLoading = () => (
  dispatch: (arg0: { type: string }) => void
) => {
  dispatch({
    type: LOADING,
  });
};

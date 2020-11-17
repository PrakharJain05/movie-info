import {
  SEARCH_MOVIE,
  FETCH_MOVIE,
  FETCH_MOVIES,
  LOADING,
} from "../action/type";

const initialState = {
  text: "",
  movies: [],
  loading: false,
  movie: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: payload,
        loading: false,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: payload,
        loading: false,
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

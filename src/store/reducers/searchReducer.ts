import {
  SEARCH_MOVIE,
  FETCH_MOVIE,
  FETCH_MOVIES,
  LOADING,
  InitialState,
  Action,
} from "../types";

const initialState: InitialState = {
  text: "",
  movie: null,
  loading: false,
  movies: null,
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
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

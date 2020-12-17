export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const FETCH_MOVIE = "FETCH_MOVIE";
export const FETCH_MOVIES = "FETCH_MOVIES";
export const LOADING = "LOADING";

export interface Movie {
  Poster: string;
  Title: string;
  Genre: string;
  Released: string;
  Rated: string;
  imdbRating: string;
  Writer: string;
  Director: string;
  Actors: string;
  Plot: string;
  imdbID: string;
}

export interface Searched {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

export interface Movies {
  Response: string;
  Search: Searched[];
}

export interface RootState {
  movies: InitialState;
}

export interface InitialState {
  text: string;
  movie: Movie | null;
  loading: boolean;
  movies: Movies | null;
}

interface SearchAction {
  type: typeof SEARCH_MOVIE;
  payload: string;
}
interface LoadingAction {
  type: typeof LOADING;
}
interface FetchMovieAction {
  type: typeof FETCH_MOVIE;
  payload: String[];
}
interface FetchMoviesAction {
  type: typeof FETCH_MOVIES;
  payload: String[];
}

export type Action =
  | SearchAction
  | LoadingAction
  | FetchMovieAction
  | FetchMoviesAction;

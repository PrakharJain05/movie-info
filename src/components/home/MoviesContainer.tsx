import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types";
import MovieCard from "./MovieCard";

const MoviesContainer: React.FC = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  let content: JSX.Element[] | null;

  content =
    movies?.Response === "True"
      ? movies?.Search.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      : null;
  return <div className="row">{content}</div>;
};

export default MoviesContainer;

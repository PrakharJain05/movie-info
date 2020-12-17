import React from "react";
import { Link } from "react-router-dom";
import { Searched } from "../../store/types";

type Props = {
  movie: Searched;
};

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className="col-md-3 mb-5 movieCard">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
        className="card card-body bg-dark text-center h-100"
      >
        <img className="w-100 mb-2" src={movie.Poster} alt={movie.Title} />
        <h5 className="text-light card-title">
          {movie.Title} - {movie.Year}
        </h5>
        <Link className="btn btn-primary" to={"/movie/" + movie.imdbID}>
          Movie Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;

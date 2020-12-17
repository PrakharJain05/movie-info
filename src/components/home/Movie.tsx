import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, setLoading } from "../../store/action/searchActions";
import Spinner from "../layout/Spinner";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../../store/types";

const Movie: React.FC = () => {
  const loading = useSelector((state: RootState) => state.movies.loading);
  const movie = useSelector((state: RootState) => state.movies.movie);
  const dispatch = useDispatch();

  let { id }: { id: string } = useParams();

  useEffect(() => {
    dispatch(fetchMovie(id));
    dispatch(setLoading());
  }, []);

  let movieInfo = (
    <div className="container">
      <div className="row mt-1">
        <div className="col-md-4 card">
          <img src={movie?.Poster} alt="Poster" />
        </div>
        <div className="col-md-8">
          <h2 className="mb-3">{movie?.Title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Genre:</strong>
              {movie?.Genre}
            </li>
            <li className="list-group-item">
              <strong>Released:</strong>
              {movie?.Released}
            </li>
            <li className="list-group-item">
              <strong>Rated:</strong>
              {movie?.Rated}
            </li>
            <li className="list-group-item">
              <strong>ImdbRating:</strong>
              {movie?.imdbRating}
            </li>
            <li className="list-group-item">
              <strong>Director:</strong>
              {movie?.Director}
            </li>
            <li className="list-group-item">
              <strong>Writer:</strong>
              {movie?.Writer}
            </li>
            <li className="list-group-item">
              <strong>Actor:</strong>
              {movie?.Actors}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card card-body bg-dark text-light">
          <div className="col-md-12">
            <h3>About</h3>
            {movie?.Plot}
            <hr />
            <a
              href={"https://www.imdb.com/title/" + movie?.imdbID}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View On IMDB
            </a>
            <Link to="/" className="btn btn-default text-light">
              Go Back to Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  let content = loading ? <Spinner /> : movieInfo;

  return <div>{content}</div>;
};

export default Movie;

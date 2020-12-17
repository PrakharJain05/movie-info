import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../../store/action/searchActions";
import { RootState } from "../../store/types";

const SearchForm: React.FC = () => {
  const text = useSelector((state: RootState) => state.movies.text);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchMovie(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchMovies(text));
    dispatch(setLoading());
  };

  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fas fa-search" /> Search for a Movie or Series..
        </h1>
        <form id="searchForm" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="form-control"
            name="searchtext"
            placeholder="Search Movies or Series..."
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="btn btn-primary btn-bg mt-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;

import React from "react";
import { useSelector } from "react-redux";
import SearchForm from "./SearchForm";
import MoviesContainer from "./MoviesContainer";
import { Spinner } from "../layout/Spinner";

const Landing = () => {
  const loading = useSelector((state) => state.movies.loading);
  return (
    <div className="container">
      <SearchForm />
      {loading ? <Spinner /> : <MoviesContainer />}
    </div>
  );
};

export default Landing;

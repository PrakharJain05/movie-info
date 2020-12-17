import React from "react";
import { useSelector } from "react-redux";
import SearchForm from "./SearchForm";
import MoviesContainer from "./MoviesContainer";
import { Spinner } from "../layout/Spinner";
import { RootState } from "../../store/types";

const Landing: React.FC = () => {
  const loading = useSelector((state: RootState) => state.movies.loading);
  return (
    <div className="container">
      <SearchForm />
      {loading ? <Spinner /> : <MoviesContainer />}
    </div>
  );
};

export default Landing;

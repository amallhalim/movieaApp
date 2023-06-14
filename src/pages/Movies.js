import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../Apis/config";
import Cardd from "../components/Card";
import langContext from "./../context/language";

export default function Movies() {
  const navigate = useNavigate();

  const [moviesList, setMoviesList] = useState([]);
  // console.log(moviesList);
  const [lang, setLang] = useState(langContext);
  useEffect(() => {
    axiosInstance
      .get("/movie/popular", {
        params: {
          // language: lang,
        },
      })
      .then(res =>
        // console.log("res", res)
        setMoviesList(res.data.results)
      )
      .catch(error => console.log(error));
  }, []);

  const alertClickedmovie = (e, movie) => {
    // console.log("movie", movie);
    navigate(`/moviedetails/${movie.id} ?title=${movie.title}`);
  };

  return (
    <div className="container">
      <div className="row my-0">
        {moviesList.map(movie => {
          return (
            <div className="col-4 my-3 mx-0" key={movie.id}>
              <Cardd
                movie={movie}
                handleClickmovie={e => alertClickedmovie(e, movie)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Apis/config";

import Cardd from "../components/Card";
import { PaginationControl } from "react-bootstrap-pagination-control";
import LangContext from "../context/language";

export default function Movies() {
  const [page, setPage] = useState(1);
  const { lang, setLang } = useContext(LangContext);
  const [moviesList, setMoviesList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/movie/popular", {
        params: {
          language: lang,
          page: page,
        },
      })
      .then(res => {
        console.log(res.data);
        console.log(res.data);
        setMoviesList(res.data.results);
        setTotalPages(res.data.total_pages);
      })
      .catch(error => console.log(error));
  }, [lang, page]);

  const alertClickedmovie = (e, movie) => {
    navigate(`/moviedetails/${movie.id} ?title=${movie.title}`);
  };

  return (
    <div className="container">
      <div className="row my-0">
        {moviesList.map(movie => {
          return (
            <div className="col-3 my-3 mx-0" key={movie.id}>
              <Cardd
                movie={movie}
                handleClickmovie={e => alertClickedmovie(e, movie)}
              />
            </div>
          );
        })}
      </div>
      <div className="">
        <PaginationControl
          page={page}
          between={4}
          total={totalPages}
          limit={20}
          changePage={page => {
            setPage(page);
          }}
          ellipsis={1}
        />
      </div>
    </div>
  );
}

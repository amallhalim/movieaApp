import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../Apis/config";
import Cardd from "../components/Card";

import LangContext from "../context/language";
import SearchBar from "./../components/SearchBar";

export default function Searchpage({}) {
  const navigate = useNavigate();
  const { lang, setLang } = useContext(LangContext);
  const [data, setData] = useState("");

  const [moviesList, setMoviesList] = useState([]);

  const chooseMessage = data => {
    // console.log("data.....", data);
    setData(data);
  };

  useEffect(() => {
    axiosInstance
      .get(`/search/movie?query=${data}`, {
        params: {
          language: lang,
          query: data,
        },
      })
      .then(res => {
        // console.log("res", res);
        setMoviesList(res.data.results);
      })
      .catch(error => console.log(error));
  }, [lang, data]);

  return (
    <div className="">
      <SearchBar senddata={chooseMessage} />
      <div className="container ">
        <div className="row">
          {moviesList.map((movie, index) => (
            <div key={movie._id} className="col-2 my-3 mx-0">
              <Cardd movie={movie} className="" />;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

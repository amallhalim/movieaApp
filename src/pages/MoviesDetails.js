import React from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../Apis/config";
import { useEffect, useState } from "react";

import DetailsCard from "./../components/DetailsCard";

export default function MoviesDetails() {
  const [singlemovie, setsinglemovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/movie/${id}`)
      .then(res => setsinglemovie(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="  moviedetails h-100   ">
      <DetailsCard movie={singlemovie} />
    </div>
  );
}

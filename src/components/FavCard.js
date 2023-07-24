import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "react-bootstrap/Card";
import { RemovefavoriteState } from "../store/slices/favorite";

export default function FavCard({ movie }) {
  const favoritesta = useSelector(state => state.favcounter.areFavorite);
  const [clicked, setClicked] = useState(favoritesta);
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(RemovefavoriteState({ movie }));
    setClicked(!clicked);
  };

  return (
    <div className="container">
      <div className="row-cols-1">
        <Card className="col-md-3 my-0 p-0 mx-0 w-100 ">
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />

          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
          </Card.Body>
          <button
            className="btn bg-danger text-dark"
            onClick={movie => handleDeleteClick()}
          >
            {" "}
            delete{" "}
          </button>
        </Card>
      </div>
    </div>
  );
}

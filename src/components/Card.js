import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { BiStar } from "react-icons/bi";
import Card from "react-bootstrap/Card";

import { addtofavoriteState } from "../store/slices/favorite";

export default function Cardd({ movie, handleClickmovie }) {
  const dispatch = useDispatch();

  const isFavorite = useSelector(
    state => state.favcounter.areFavorite[movie.id] || false
  );
  // console.log("==favoritesta,", isFavorite);

  const handleStarClick = () => {
    dispatch(addtofavoriteState({ movie }));
    // console.log("isfav,", isFavorite);
  };

  return (
    <div className="container">
      <div className="row-cols-1">
        <Card className="col-md-3 my-0 p-0 mx-0 w-100 ">
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <BiStar
            style={{
              width: "40px",
              fontSize: "50px",
              color: isFavorite ? "gold" : "black",
            }}
            onClick={handleStarClick}
          />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
          </Card.Body>

          <button
            className="btn bg-primary text-light"
            onClick={() => handleClickmovie(movie)}
          >
            {" "}
            details
          </button>
        </Card>
      </div>
    </div>
  );
}

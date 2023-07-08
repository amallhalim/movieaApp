// import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

import { BiStar } from "react-icons/bi";
import Card from "react-bootstrap/Card";

import {
  addtofavoriteState,
  // RemovefavoriteState,
} from "../store/slices/favorite";

export default function Cardd({ movie, handleClickmovie }) {
  const dispatch = useDispatch();

  console.log(
    "*******",
    useSelector(state => state.favcounter[movie.id])
  );
  const isFavorite = useSelector(
    state => state.favcounter.areFavorite[movie.id] || false
  );
  console.log("==favoritesta,", isFavorite);

  const handleStarClick = () => {
    dispatch(addtofavoriteState({ movie }));
    // setClicked(!clicked);
    console.log("isfav,", isFavorite);
  };

  return (
    <div className="container">
      <div className="row-cols-1">
        <Card
          className="col-md-3 my-0 p-0 mx-0 w-100 "
          // style={{ heigth: "50px" }}
        >
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <BiStar
            style={{
              width: "40px",
              fontSize: "50px",
              color: isFavorite ? "gold" : "red",
            }}
            onClick={handleStarClick}
          />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.release_date}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              vote_count :: {movie.vote_count}
            </small>
          </Card.Footer>
          <button onClick={() => handleClickmovie(movie)}> details</button>
        </Card>
      </div>
    </div>
  );
}

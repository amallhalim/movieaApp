import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { RemovefavoriteState } from "../store/slices/favorite";
export default function FavCard({ movie }) {
  const dispatch = useDispatch();
  const favoritesta = useSelector(state => state.favcounter.areFavorite);

  const [clicked, setClicked] = useState(favoritesta);

  const handleDeleteClick = () => {
    dispatch(RemovefavoriteState({ movie }));
    setClicked(!clicked);
    console.log("favoritesta,", favoritesta);
    console.log(movie);
  };

  return (
    <div className="container">
      <div className="row-cols-1">
        <Card
          className="col-md-3 my-0 p-0 mx-0 w-100 "
          style={{ heigth: "50px" }}
        >
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
          <button onClick={movie => handleDeleteClick()}> delete </button>
        </Card>
      </div>
    </div>
  );
}

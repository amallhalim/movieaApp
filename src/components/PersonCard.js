import React from "react";
import Card from "react-bootstrap/Card";

export default function PersonCardd({ movie, handleClickmovie }) {
  return (
    <div className="container">
      <div className="row-cols-1">
        <Card className="col-md-3 my-0 p-0 mx-0 w-100 ">
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${movie.profile_path}`}
          />

          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

import FavCard from "../components/FavCard";

export default function Favorites() {
  const favcounter = useSelector(state => state.favcounter.favCount_val);
  const favoritList = useSelector(state => state.favcounter.favoritList);
  // const favoritesta = useSelector(state => state.favcounter.areFavorite);

  return (
    <div>
      <span>Favorites</span>
      <span className="text-primary">favcounter: {favcounter}</span>
      <div className="container">
        <div className="container">
          <div className="row my-0">
            {favoritList.map(movie => {
              return (
                <div className="col-4 my-0 mx-0" key={movie.id}>
                  <FavCard movie={movie} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

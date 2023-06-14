import React from "react";
import { useSelector } from "react-redux";

import FavCard from "../components/FavCard";

export default function Favorites() {
  const favcounter = useSelector(state => state.favcounter.favCount_val);
  const favoritList = useSelector(state => state.favcounter.favoritList);
  const favoritesta = useSelector(state => state.favcounter.areFavorite);
  console.log("f --- favoritesta", favoritesta); //return true

  return (
    <div>
      <h2>Favorites</h2>
      <p className="bg-primary">favcounter: {favcounter}</p>
      <div className="container">
        <div className="container">
          <div className="row my-0">
            {favoritList.map(movie => {
              return (
                <div className="col-4 my-0 mx-0" key={movie.id}>
                  <FavCard
                    movie={movie}
                    // handleRemovekmovie={e => alertClickedmovie(e, movie)}
                    // handleStarClick={e => changfavoritestate(e, movie)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

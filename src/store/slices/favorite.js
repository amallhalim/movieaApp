import { createSlice } from "@reduxjs/toolkit";

const INTISAL_STATE = {
  areFavorite: {},
  favCount_val: 0,
  favoritList: [],
};
// console.log("INTISAL_STATE.....INTISAL_STATE", INTISAL_STATE);
const favoriteSlice = createSlice(
  {
    name: "favorite",
    initialState: INTISAL_STATE,
    reducers: {
      addtofavoriteState: (state, action) => {
        const movie = action.payload.movie;
        const { id } = action.payload.movie;

        if (!isMovieAlreadyAdded(state.favoritList, movie)) {
          state.favoritList.push(movie);
          state.favCount_val = state.favoritList.length;
          state.areFavorite[id] = true;
          // console.log(" add  state.areFavorite.....", state.areFavorite);
        } else {
          state.favoritList = state.favoritList.filter(m => m.id !== movie.id);
          state.areFavorite[id] = false;
          state.favCount_val = state.favoritList.length;
          // console.log(" remove**  state.areFavorite.....", state.areFavorite);
        }

        // console.log(state.favCount_val);
        // console.log(JSON.stringify(state.favoritList));
        // console.log(state.favoritList.length);
      },
      RemovefavoriteState: (state, action) => {
        const { id } = action.payload.movie;
        const movie = action.payload.movie;
        state.favoritList = state.favoritList.filter(m => m.id !== movie.id);
        state.areFavorite[id] = false;
        state.favCount_val = state.favoritList.length;
        // console.log(" ***** rem state.areFavorite.....", state.areFavorite);
      },
    },
  }
  // }
);

function isMovieAlreadyAdded(favoritList, movie) {
  return favoritList.some(m => JSON.stringify(m) === JSON.stringify(movie));
}

export const { addtofavoriteState, RemovefavoriteState } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;

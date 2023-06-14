// import { configureStore } from "@reduxjs/toolkit";

// import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

import countslice from "./slices/count";
import favoriteSlice from "./slices/favorite";
// const store = configureStore({ reducer: rootReducer });
// // The store now has redux-thunk added and the Redux DevTools Extension is turned on
export default configureStore({
  reducer: {
    //add reducer here
    counter: countslice,
    favcounter: favoriteSlice,
  },
});

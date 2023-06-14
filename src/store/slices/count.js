import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  total: 0,
  counter_val: 0,
};

const countslice = createSlice({
  name: "counterName",
  initialState: INITIAL_STATE,
  reducers: {
    increasecounter(state, action) {
      //implementation
      console.log(state.counter_val);
      console.log(state.counter_val + 1);
      state.counter_val = state.counter_val + 1;
      console.log("===");
    },
  },
});

export const { increasecounter } = countslice.actions;
export default countslice.reducer;

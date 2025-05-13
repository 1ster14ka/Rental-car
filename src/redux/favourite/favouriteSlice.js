import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourite: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite(state, action) {
      if (!state.favourite.includes(action.payload)) {
        state.favourite.push(action.payload);
      }
    },
    removeFromFavourite(state, action) {
      state.favourite = state.favourite.filter((id) => id !== action.payload);
    },
  },
});
export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;

export const favouriteReducer = favouriteSlice.reducer;

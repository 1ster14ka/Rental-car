import { createSlice } from "@reduxjs/toolkit";
import { getAllCars } from "./carsOps";

const initialState = {
  items: [],
  totalCars: 0,
  totalPages: 0,
  page: 1,
  loading: false,
  error: false,
};

const slice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCars.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const carReducer = slice.reducer;

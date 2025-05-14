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

const carSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.items = action.payload.cars;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.totalCars = action.payload.totalCars;
        state.loading = false;
      })
      .addCase(getAllCars.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});
export const carReducer = carSlice.reducer;

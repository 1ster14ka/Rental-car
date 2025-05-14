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
        // const { page, cars } = action.payload;
        state.items = action.payload.cars;
        // state.items = page === 1 ? cars : [...state.items, ...cars];
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.totalCars = action.payload.totalCars;
        state.loading = false;
        //   console.log(
        //     "Загружены машины:",
        //     cars.map((c) => c.id)
        //   );
        //   console.log(
        //     "Текущие items:",
        //     state.items.map((c) => c.id)
        //   );
        //   console.log("Текущая страница:", page);
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

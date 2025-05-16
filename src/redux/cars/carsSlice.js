import { createSlice } from "@reduxjs/toolkit";
import { getAllCars } from "./carsOps";

const initialState = {
  items: [],
  totalCars: 0,
  totalPages: 0,
  page: 1,
  loading: false,
  error: false,
  loadedPages: [],
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetCars: (state) => {
      state.items = [];
      state.loadedPages = [];
      state.page = 1;
      state.totalPages = 0;
      state.totalCars = 0;
      state.loading = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.fulfilled, (state, action) => {
        const { page, cars, totalPages } = action.payload;

        // Если перезагрузка страницы, чтобы оставались те же карточки авто
        let isPageAlreadyLoaded;

        if (JSON.parse(JSON.stringify(totalPages))) {
          isPageAlreadyLoaded = state.loadedPages.includes(Number(page));
        }

        if (!isPageAlreadyLoaded) {
          if (Number(page) === 1) {
            state.items = cars;
          } else {
            state.items = [...JSON.parse(JSON.stringify(state.items)), ...cars];
          }

          state.loadedPages = [
            ...JSON.parse(JSON.stringify(state.loadedPages)),
            Number(page),
          ];
        }
        state.page = action.payload.page;
        state.totalPages = totalPages;
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
export const { resetCars } = carSlice.actions;
export const carReducer = carSlice.reducer;

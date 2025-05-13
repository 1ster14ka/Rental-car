import { createSlice } from "@reduxjs/toolkit";
import { getBrands } from "./filtersOps";

const initialState = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
  brandsList: [],
  loading: false,
  error: null,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setBarnd(state, action) {
      state.brand = action.payload;
    },
    setPrice(state, action) {
      state.rentalPrice = action.payload;
    },
    setMileageFrom(state, action) {
      state.minMileage = action.payload;
    },
    setMileageTo(state, action) {
      state.maxMileage = action.payload;
    },
    resetFilters(state) {
      state.brand = "";
      state.rentalPrice = "";
      state.minMileage = "";
      state.maxMileage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brandsList = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setBarnd,
  setPrice,
  setMileageFrom,
  setMileageTo,
  resetFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCars = createAsyncThunk(
  "cars/getAllCars",
  async (filters = {}, thunkAPI) => {
    try {
      const params = new URLSearchParams();
      if (filters.brand) params.append("brand", filters.brand);
      if (filters.rentalPrice)
        params.append("rentalPrice", filters.rentalPrice);
      if (filters.minMileage) params.append("minMileage", filters.minMileage);
      if (filters.maxMileage) params.append("maxMileage", filters.maxMileage);
      console.log(params.toString());

      const { data } = await axios.get(
        `https://car-rental-api.goit.global/cars?${params.toString()}`
      );
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

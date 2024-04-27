import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendUrl } from "../../axios/backendUrl";
import { config } from "../../axios/config";
import Toast from "../../components/shared/Toast";

let initialState = {
  CarsData: null,
  error: null,
  isLoading: false,
};

export const getAllCars = createAsyncThunk("cars/getCars", async (token) => {
  try {
    let response = await axios.get(`${backendUrl}/car`, config(token));
    console.log(response?.data?.body);
    return response.data;
  } catch (error) {
    Toast.error(error.response.data.message);
    console.log(error);
    throw error;
  }
});

export const addNewCar = createAsyncThunk(
  "cars/addNewCar",
  async ({ data, token, navigate }) => {
    try {
      let response = await axios.post(`${backendUrl}/car`, data, config(token));
      Toast.success(response.data.body?.message);
      navigate("/pages/allcars")
    } catch (error) {
      Toast.error(error.response.data.message);
      console.log(error);
      throw error;
    }
  }
);

const CarSlice = createSlice({
  name: "Car",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCars.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCars.fulfilled, (state, action) => {
      state.isLoading = false;
      state.CarsData = action.payload;
    });
    builder.addCase(getAllCars.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addNewCar.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addNewCar.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action);
    });
    builder.addCase(addNewCar.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default CarSlice.reducer;
export const {} = CarSlice.actions;

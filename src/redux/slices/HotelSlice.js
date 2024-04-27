import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendUrl } from "../../axios/backendUrl";
import Toast from "../../components/shared/Toast";
import { config } from "../../axios/config";

let initialState = {
  hotelsData: null,
  error: null,
  isLoading: false,
};

export const getAllHotels = createAsyncThunk(
  "hotels/getHotels",
  async (token) => {
    try {
      let response = await axios.get(`${backendUrl}/hotel`, config(token));
      return response.data?.body;
    } catch (error) {
      Toast.error(error.response.data.message);
      console.log(error);
      throw error;
    }
  }
);

export const addNewHotel = createAsyncThunk(
  "hotels/addHotel",
  async ({ data, token, navigate }) => {
    try {
      let response = await axios.post(
        `${backendUrl}/hotel`,
        data,
        config(token)
      );
      Toast.success(response.data.body?.message);
      navigate("/pages/allhotels");
    } catch (error) {
      Toast.error(error.response.data.message);
      console.log(error);
      throw error;
    }
  }
);

const HotelSlice = createSlice({
  name: "hotel",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllHotels.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllHotels.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hotelsData = action.payload;
    });
    builder.addCase(getAllHotels.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addNewHotel.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addNewHotel.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action);
    });
    builder.addCase(addNewHotel.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default HotelSlice.reducer;
export const {} = HotelSlice.actions;

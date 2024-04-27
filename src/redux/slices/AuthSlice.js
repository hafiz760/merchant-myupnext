import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { backendUrl } from "../../axios/backendUrl";
import Toast from "../../components/shared/Toast";

let initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  loading: false,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ formData, naviagte }, thunkAPI) => {
    try {
      let response = await axios.post(`${backendUrl}/users/singin`, formData);
      naviagte("dashboard/Home");
      return response;
    } catch (error) {
      Toast.error(error.response.data.message);
      console.log(error);
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;

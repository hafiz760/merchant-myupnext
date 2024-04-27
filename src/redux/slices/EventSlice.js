import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initialState = {
  eventsData: null,
  error: null,
  isLoading: false,
};

export const getAllEvents = createAsyncThunk("/getEvents", async () => {
  try {
    let response = await axios.get();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addNewEvent = createAsyncThunk("/addEvent", async ({ data }) => {
  try {
    let response = await axios.post();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const EventSlice = createSlice({
  name: "Event",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllEvents.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllEvents.fulfilled, (state, action) => {
      state.isLoading = false;
      state.eventsData = action.payload;
    });
    builder.addCase(getAllEvents.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addNewEvent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addNewEvent.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action);
    });
    builder.addCase(addNewEvent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default EventSlice.reducer;
export const {} = EventSlice.actions;

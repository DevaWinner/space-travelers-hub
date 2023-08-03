import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketAPI = 'https://api.spacexdata.com/v3/Rockets';
export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets API Data',
  async () => {
    const response = await axios.get(rocketAPI);
    return response.data;
  },
);
/* eslint-disable max-len */
const rocketReducer = createSlice({
  name: 'RocketSlice',
  initialState: {
    rocketArr: [],
    isLoading: false,
    error: null,
    isDataFetched: false,
  },
  reducers: {
    addBooking: (state, action) => {
      const updatedRocketArr = state.rocketArr.map((object) => (object.id === action.payload ? { ...object, reserved: false } : object));

      return { ...state, rocketArr: updatedRocketArr };
    },
    leaveBooking: (state, action) => {
      const updatedRocketArr = state.rocketArr.map((object) => (object.id === action.payload ? { ...object, reserved: true } : object));

      return { ...state, rocketArr: updatedRocketArr };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rocketArr = action.payload.map((rocketItems) => ({
          id: rocketItems.id,
          rocket_name: rocketItems.rocket_name,
          description: rocketItems.description,
          flickr_images: rocketItems.flickr_images,
        }));
        state.isDataFetched = true;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const { addBooking, leaveBooking } = rocketReducer.actions;
export default rocketReducer.reducer;

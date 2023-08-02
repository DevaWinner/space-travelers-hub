import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchRocketsData = createAsyncThunk('rockets/fetchData', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    const rocketsData = response.data.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images,
      reserved: false, // Add reserved property
    }));
    return rocketsData;
  } catch (error) {
    throw new Error('Unable to fetch data for the rockets');
  }
});

export const reserveRocket = createAsyncThunk('rockets/reserve', (rocketId, { getState }) => {
  const state = getState();
  const newState = state.rockets.data.map((rocket) => {
    if (rocket.id !== rocketId) return rocket;
    return { ...rocket, reserved: true };
  });
  return newState;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRocketsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchRocketsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(reserveRocket.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export default rocketsSlice.reducer;

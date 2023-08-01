import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missionsData: null,
  missionsStatus: 'idle',
  missionsError: null,
};

export const fetchMissionsData = createAsyncThunk('missions/fetchData', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    const missionsData = response.data.map((mission) => ({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    }));
    return missionsData;
  } catch (error) {
    throw new Error('Unable to fetch data for the missions');
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissionsData.pending, (state) => {
        state.missionsStatus = 'loading';
      })
      .addCase(fetchMissionsData.fulfilled, (state, action) => {
        state.missionsStatus = 'succeeded';
        state.missionsData = action.payload;
      })
      .addCase(fetchMissionsData.rejected, (state, action) => {
        state.missionsStatus = 'failed';
        state.missionsError = action.error.message;
      });
  },
});

export default missionsSlice.reducer;

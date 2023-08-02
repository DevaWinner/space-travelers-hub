import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missionsData: null,
  missionsStatus: 'idle',
  missionsError: null,
};

// Async Thunk: fetchMissionsData
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

// New action type
const JOIN_MISSION = 'missions/joinMission';

// New action creator function
export const joinMission = (missionId) => ({
  type: JOIN_MISSION,
  payload: missionId,
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
      })
      // Handle the JOIN_MISSION action
      .addCase(JOIN_MISSION, (state, action) => {
        const selectedMissionId = action.payload;
        // Create a new array of missions with the updated selected mission
        state.missionsData = state.missionsData.map((mission) => (
          mission.mission_id === selectedMissionId
            ? { ...mission, reserved: true }
            : mission));
      });
  },
});

export default missionsSlice.reducer;

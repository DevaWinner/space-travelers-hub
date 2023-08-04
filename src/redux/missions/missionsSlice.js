import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/missions';
export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});
/* eslint-disable max-len */
const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    isLoading: false,
    error: null,
    isMissionsFetched: false,
    joinedMissions: [],
  },
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => (mission.mission_id === missionId ? { ...mission, reserved: true } : mission));
      state.joinedMissions.push(missionId);
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => (mission.mission_id === missionId ? { ...mission, reserved: false } : mission));
      state.joinedMissions = state.joinedMissions.filter((id) => id !== missionId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.missions = action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      }));
      state.isMissionsFetched = true;
    });
    builder.addCase(fetchMissions.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;

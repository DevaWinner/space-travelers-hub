import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/reducers';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;

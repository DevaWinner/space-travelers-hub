import { combineReducers } from 'redux';
import missionsReducer from './reducers';

const rootReducer = combineReducers({
  missions: missionsReducer,
});

export default rootReducer;

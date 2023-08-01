import {
  FETCH_MISSIONS_REQUEST,
  FETCH_MISSIONS_SUCCESS,
  FETCH_MISSIONS_FAILURE,
} from './actions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_MISSIONS_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case FETCH_MISSIONS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default missionsReducer;

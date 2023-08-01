import axios from 'axios';

export const FETCH_MISSIONS_REQUEST = 'FETCH_MISSIONS_REQUEST';
export const FETCH_MISSIONS_SUCCESS = 'FETCH_MISSIONS_SUCCESS';
export const FETCH_MISSIONS_FAILURE = 'FETCH_MISSIONS_FAILURE';

export const fetchMissions = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MISSIONS_REQUEST });

    const response = await axios.get('https://api.spacexdata.com/v3/missions');

    const selectedData = response.data.map((mission) => ({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    }));

    dispatch({
      type: FETCH_MISSIONS_SUCCESS,
      payload: selectedData,
    });
  } catch (error) {
    dispatch({ type: FETCH_MISSIONS_FAILURE, payload: error.message });
  }
};

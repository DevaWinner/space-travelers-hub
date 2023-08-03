import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../../redux/missions/missionsSlice';
import Mission from './Mission';
import './styles/MissionList.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const isLoading = useSelector((state) => state.missions.isLoading);
  const isMissionsFetched = useSelector((state) => state.missions.isMissionsFetched);

  useEffect(() => {
    if (isMissionsFetched === false) {
      dispatch(fetchMissions());
    }
  }, [dispatch, isMissionsFetched]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };
  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  return (

    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="missions-table">
          <thead className="missions-table-header">
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <Mission
                key={mission.mission_id}
                mission={mission}
                handleJoinMission={handleJoinMission}
                handleLeaveMission={handleLeaveMission}
              />
            ))}
          </tbody>
        </table>
      )}
      ;
    </div>

  );
};

export default Missions;

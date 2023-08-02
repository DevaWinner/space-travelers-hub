import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Spinner, Alert } from 'react-bootstrap';
import { fetchMissionsData, joinMission, leaveMission } from '../redux/missions/missionsSlice';

const MissionTable = () => {
  const dispatch = useDispatch();
  const missionsData = useSelector((state) => state.missions.missionsData);
  const missionsStatus = useSelector((state) => state.missions.missionsStatus);
  const error = useSelector((state) => state.missions.error);

  useEffect(() => {
    dispatch(fetchMissionsData());
  }, [dispatch]);

  if (missionsStatus === 'loading') {
    return <Spinner animation="border" role="status" className="mt-4" />;
  }

  if (missionsStatus === 'failed') {
    return (
      <Alert variant="danger" className="mt-4">
        Error:
        {error}
      </Alert>
    );
  }

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missionsData
          && missionsData.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>Upcoming</td>
              <td>
                {mission.reserved ? (
                  <button type="button" onClick={() => handleLeaveMission(mission.mission_id)}>
                    Leave Mission
                  </button>
                ) : (
                  <button type="button" onClick={() => handleJoinMission(mission.mission_id)}>
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default MissionTable;

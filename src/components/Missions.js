import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchMissionsData } from '../redux/missions/missionsSlice';

const MissionTable = () => {
  const missionsData = useSelector((state) => state.missions.missionsData);
  const missionsStatus = useSelector((state) => state.missions.missionsStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsData());
  }, [dispatch]);

  if (missionsStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (missionsStatus === 'failed') {
    return <div>Error: Unable to fetch data for the missions</div>;
  }

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
              <td><button type="button">Join Mission</button></td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default MissionTable;

import React from 'react';
import { useSelector } from 'react-redux';

const MissionMock = () => {
  const missions = useSelector((state) => state.missions.missions);
  const filterMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <div className="missions-wrap">
      <h2>My Mission</h2>
      <table>
        <tbody>
          {filterMissions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionMock;

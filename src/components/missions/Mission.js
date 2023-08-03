import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission, handleJoinMission, handleLeaveMission }) => (
  <tr>
    <td className="mission-name">{mission.mission_name}</td>
    <td className="mission-desc">{mission.description}</td>
    <td className="not-member">
      {mission.reserved ? (
        <span className="active-member" type="button">Active Member</span>
      ) : (
        <span className="member" type="button">NOT A MEMBER</span>
      )}
    </td>
    <td className="btn-td">
      {mission.reserved ? (
        <button className="leave" onClick={() => handleLeaveMission(mission.mission_id)} type="button">Leave Mission</button>
      ) : (
        <button className="join" onClick={() => handleJoinMission(mission.mission_id)} type="button">Join Mission</button>
      )}
    </td>
  </tr>
);

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
  handleJoinMission: PropTypes.func.isRequired,
  handleLeaveMission: PropTypes.func.isRequired,
};
export default Mission;

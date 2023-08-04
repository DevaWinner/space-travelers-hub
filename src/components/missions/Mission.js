import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission, handleJoinMission, handleLeaveMission }) => (
  <tr>
    <td className="mission-name">{mission.mission_name}</td>
    <td className="mission-desc">{mission.description}</td>
    <td className="status">
      {mission.reserved ? (
        <span className="active-member-badge" type="button">Active Member</span>
      ) : (
        <span className="inactive-member-badge" type="button">Not a Member</span>
      )}
    </td>
    <td className="btn-td">
      {mission.reserved ? (
        <button className="leave-button" onClick={() => handleLeaveMission(mission.mission_id)} type="button">Leave Mission</button>
      ) : (
        <button className="join-button" onClick={() => handleJoinMission(mission.mission_id)} type="button">Join Mission</button>
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

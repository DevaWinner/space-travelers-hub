import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Profile.css';

/* eslint-disable max-len */
const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);
  const reservedRockets = useSelector((state) => state.rockets.rocketArr);
  const myReservedRockets = reservedRockets.filter(
    (reservations) => reservations.reserved === true,
  );

  const myJoinedMissions = missions.filter((mission) => joinedMissions.includes(mission.mission_id));
  return (
    <section className="profile-container">
      <div className="mission-column">
        <h2>My Missions</h2>
        {myJoinedMissions.length === 0 ? (
          <p className="empty-message">No joined missions yet.</p>
        ) : (
          <ul className="u-list">
            {myJoinedMissions.map((mission) => (
              <li key={mission.mission_id}>
                <p>{mission.mission_name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="rocket-column">
        <h2>My Rockets</h2>
        {myReservedRockets.length === 0 ? (
          <p className="empty-message">No reserved rockets yet.</p>
        ) : (
          <ul className="u-list">
            {myReservedRockets.map((reservations) => (
              <li key={reservations.id}>
                <p>{reservations.rocket_name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Profile;

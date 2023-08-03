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
      <div className="column">
        <h2 className="column-head">My Missions</h2>
        {myJoinedMissions.length === 0 ? (
          <p className="empty-message">No joined missions yet.</p>
        ) : (
          <ul className="u-list">
            {myJoinedMissions.map((mission) => (
              <li className="profile-list" key={mission.mission_id}>
                <h4 className="my-missions-name">{mission.mission_name}</h4>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="column">
        <h2 className="column-head">My Rockets</h2>
        {myReservedRockets.length === 0 ? (
          <p className="empty-message">No reserved rockets yet.</p>
        ) : (
          <ul className="u-list">
            {myReservedRockets.map((reservations) => (
              <li className="profile-list" key={reservations.id}>
                <h4 className="my-missions-name">{reservations.rocket_name}</h4>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Profile;

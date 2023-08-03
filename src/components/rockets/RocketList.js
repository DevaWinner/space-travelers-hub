import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBooking, leaveBooking } from '../../redux/rockets/rocketsSlice';

const RocketList = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleBooking = (param) => {
    dispatch(addBooking(param));
  };

  const handleLeaving = (param) => {
    dispatch(leaveBooking(param));
  };
  return (
    <li className="reserveList" key={rocket.id}>
      {rocket.flickr_images.length > 0 && (
        <img
          className="reserve-button"
          src={rocket.flickr_images[0]}
          alt={rocket.rocket_name}
        />
      )}
      <div className="wrapper">
        <h3 className="reserve-button">
          {rocket.reserved ? (<span className="badge">Reserved</span>) : ''}
          {' '}
          {rocket.rocket_name}
        </h3>
        <p className="reserve-button">{rocket.description}</p>
        <div>
          {rocket.reserved ? (
            <button className="reserve-button cancel-button" onClick={() => handleBooking(rocket.id)} type="button">
              Cancel Reservation
            </button>
          ) : (
            <button className="reserve-button" onClick={() => handleLeaving(rocket.id)} type="button">
              Reserve Rocket
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

RocketList.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RocketList;

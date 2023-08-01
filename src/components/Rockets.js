import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsData } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const rocketsData = useSelector((state) => state.rocketsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);

  if (!rocketsData) {
    return <p className="fetchStatus">Loading...</p>;
  }

  if (rocketsData.errors) {
    return <p className="error">Error loading the rockets</p>;
  }

  return (
    <ul className="rocketsList">
      {rocketsData.value.map((e) => (
        <li key={e.id}>
          {e.flickrImages[0] && <img src={e.flickrImages[0]} alt={e.name} />}
          <h2>{e.name}</h2>
          <p>
            {e.reserved && <span>Reserved</span>}
            {' '}
            {e.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Rockets;

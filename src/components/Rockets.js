import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsData } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const rocketsData = useSelector((state) => state.rocketsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);

  if (rocketsData.loading) return <p className="fetchStatus">Loading...</p>;
  if (rocketsData.errors) return <p className="error">Error loading the rockets</p>;
  return (
    <ul className="rocketsList">
      {rocketsData.value.map((e, i) => (
        <>
          key=
          {e.id}
          id=
          {e.id}
          indexNo=
          {i}
          title=
          {e.name}
          description=
          {e.description}
          img=
          {e.flickrImages[0]}
          reserved=
          {e.reserved}
        </>
      ))}
    </ul>
  );
};

export default Rockets;

// import './styles/RocketList.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';
import RocketList from './RocketList';

const Rockets = () => {
  const rocketArr = useSelector((state) => state.rockets.rocketArr);
  const isLoading = useSelector((state) => state.rockets.isLoading);
  const isDataFetched = useSelector((state) => state.rockets.isDataFetched);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDataFetched) {
      dispatch(fetchRockets());
    }
  }, [dispatch, isDataFetched]);

  return (
    <div className="ul-container">
      <h2 className="Rocket-List">Rockets List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-container">
          {rocketArr.map((rocket) => (
            <RocketList
              key={rocket.id}
              rocket={rocket}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Rockets;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card, Spinner, Alert, Row, Col,
} from 'react-bootstrap';
import { fetchRocketsData, reserveRocket } from '../redux/rockets/rocketsSlice';

const RocketList = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rockets.data);
  const status = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);

  const handleReserveClick = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  if (status === 'loading') {
    return <Spinner animation="border" role="status" className="mt-4" />;
  }

  if (status === 'failed') {
    return (
      <Alert variant="danger" className="mt-4">
        Error:
        {error}
      </Alert>
    );
  }

  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-4">
      {rocketsData
        && rocketsData.map((rocket) => (
          <Col key={rocket.id}>
            <Card>
              <Card.Img variant="left" src={rocket.flickr_images[0]} alt={rocket.name} />
              <Card.Body>
                <Card.Title>{rocket.name}</Card.Title>
                <Card.Text>{rocket.description}</Card.Text>
                <button type="button" onClick={() => handleReserveClick(rocket.id)}>Reserve Rocket</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default RocketList;

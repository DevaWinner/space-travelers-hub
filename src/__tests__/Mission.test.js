import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Mission from '../components/missions/Mission';
import store from '../redux/store';

/* eslint-disable max-len */
const renderWithProvider = (component) => render(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Mission functions', () => {
  const dummyMission = {
    mission_id: 'testMissionId',
    mission_name: 'Test Mission',
    description: 'This is a test mission.',
    reserved: false,
  };

  it('calls handleJoinMission correctly', () => {
    const handleJoinMissionMock = jest.fn();
    const missionId = 'testMissionId';

    const { getByText } = renderWithProvider(
      <Mission mission={dummyMission} handleJoinMission={handleJoinMissionMock} handleLeaveMission={() => {}} />,
    );

    const joinButton = getByText('Join Mission');
    fireEvent.click(joinButton);

    expect(handleJoinMissionMock).toHaveBeenCalledWith(missionId);
  });

  it('calls handleLeaveMission correctly', () => {
    const handleLeaveMissionMock = jest.fn();
    dummyMission.reserved = true;

    const { getByText } = renderWithProvider(
      <Mission mission={dummyMission} handleJoinMission={() => {}} handleLeaveMission={handleLeaveMissionMock} />,
    );

    const leaveButton = getByText('Leave Mission');
    fireEvent.click(leaveButton);

    expect(handleLeaveMissionMock).toHaveBeenCalledWith(dummyMission.mission_id);
  });

  it('renders correctly', () => {
    const { getByText } = renderWithProvider(
      <Mission mission={dummyMission} handleJoinMission={() => {}} handleLeaveMission={() => {}} />,
    );

    expect(getByText('Test Mission')).toBeInTheDocument();
    expect(getByText('This is a test mission.')).toBeInTheDocument();
  });
});

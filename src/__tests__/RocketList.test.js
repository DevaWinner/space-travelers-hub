// Import the required libraries and components
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RocketList from '../components/rockets/RocketList';

// Create a mock store using redux-mock-store
const mockStore = configureStore([]);

describe('RocketList', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            id: 1,
            flickr_images: ['https://www.example.com/image.jpg'],
            rocket_name: 'Falcon 9',
            description: 'A reusable rocket for space missions',
            reserved: false,
          },
        ],
      },
    });

    component = render(
      <Provider store={store}>
        <RocketList rocket={store.getState().rockets.rockets[0]} />
      </Provider>,
    );
  });

  it('renders rocket name and description', () => {
    const rocketName = component.getByText('Falcon 9');
    const rocketDescription = component.getByText('A reusable rocket for space missions');

    expect(rocketName).toBeInTheDocument();
    expect(rocketDescription).toBeInTheDocument();
  });

  it('renders reserve button when rocket is not reserved', () => {
    const reserveButton = component.getByText('Reserve Rocket');

    expect(reserveButton).toBeInTheDocument();
  });

});

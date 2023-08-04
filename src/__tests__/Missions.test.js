import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from '../components/missions/Mission';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('My Missions', () => {
  it('Render Mission Components', () => {
    const mission = {
      mission_id: '1',
      mission_name: 'Sample Mission',
      description: 'This is a sample mission',
      reserved: true,
    };

    render(<Mission mission={mission} />);
    expect(Mission).toMatchSnapshot();
  });
});

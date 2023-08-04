import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import MissionMock from '../__mocks__/MissionMock';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('MissionMock', () => {
  it('render My Missions Components', () => {
    render(<MissionMock />);
    expect(MissionMock).toMatchSnapshot();
  });
});

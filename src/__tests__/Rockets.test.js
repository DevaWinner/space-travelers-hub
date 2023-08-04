import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../components/rockets/Rockets';
import store from '../redux/store';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);
describe('MyRocketss', () => {
  it('render Rockets Components', () => {
    render(<Rockets />);
    expect(Rockets).toMatchSnapshot();
  });
});

import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from '../components/Profile';
import store from '../redux/store';

describe('Testing Profile page', () => {
  it('Should render myProfile page', () => {
    const rocketsPage = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(rocketsPage).toMatchSnapshot();
  });
});

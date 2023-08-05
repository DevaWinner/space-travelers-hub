import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

test('renders Nav component', () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Space Travelers' Hub/i);
  expect(linkElement).toBeInTheDocument();
});
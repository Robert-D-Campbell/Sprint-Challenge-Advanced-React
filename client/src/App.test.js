import React from 'react';
import ReactDOM from 'react-dom';
import {render, getByTestId} from '@testing-library/react';

import App from './App';
import PlayerCard from './components/PlayerCard'
import PlayerList from './components/PlayerList'

test('renders without crashing', () => {
  render(<App />);

});

test('render Player List Component without crashing', () => {
  render(<PlayerList />);
})

test('it returns the header text', () => {
  const {getByText} = render(<App />)
  getByText(/women's world cup/i)
})

test('it returns Text content of id="player-name"', () => {
  const {getByTestId} = render(<PlayerCard />)
  expect(getByTestId('player-name').textContent).toBe('')
})
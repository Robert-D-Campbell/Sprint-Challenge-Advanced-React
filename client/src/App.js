import React from 'react';

import './App.css';

import PlayerList from './components/PlayerList'
import Navbar from './components/utils/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Women's World Cup</h1>
      <PlayerList />
    </div>
  );
}

export default App;

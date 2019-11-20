import React from 'react';
import '../App.css';
import FlightSearch from './FlightSearch';
import Flights from './Flights'


function App() {
  return (
    <div className="App">
      <header>
        <nav className="nav-bar">
          <p>user(Logout)</p>
        </nav>
      </header>
      <h1>Burning Airlines</h1>
      <FlightSearch />
      <Flights />
    </div>
  );
}

export default App;

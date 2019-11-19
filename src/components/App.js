import React from 'react';
import '../App.css';
import FlightSearch from './FlightSearch';


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
    </div>
  );
}

export default App;

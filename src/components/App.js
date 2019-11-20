import React from 'react';
import Flights from './Flights'
import Search from './Search';


function App() {
  return (
    <div className="App">
      <header>
        <nav className="nav-bar">
          <p>user(Logout)</p>
        </nav>
      </header>
      <h1>Burning Airlines</h1>
      <Booking />
      <Search />
    </div>
  );
}

export default App;

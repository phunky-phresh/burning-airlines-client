import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/Home'
import Search from './components/Search'
import Flights from './components/Flights'
import Booking from './components/Booking'
import Planes from './components/Planes'

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Switch>
        <Route path='/:user/search' component={ Search } />
        <Route path='/:user/flights' component={ Flights } />
        <Route path='/:user/flight/:flight' component={ Booking } />
        <Route path='/:user/planes' component={ Planes } />
        <Redirect from='/:user' to='/:user/search' />
      </Switch>
    </div>
  </Router>
);

export default Routes;

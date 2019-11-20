import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Flights extends Component {
  constructor() {
    super();
    this.state = {
      flights: []
    }
  }

  render() {
    return (
      <div>
        <h1>Flights coming soon</h1>
      </div>
    );
  }
};

export default Flights;

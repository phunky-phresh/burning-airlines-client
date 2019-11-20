import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';


const SERVER_FLIGHTS_URL = 'http://localhost:3000/flights.json';
const SERVER_RESERVATIONS_URL = 'http://localhost:3000/reservations.json';
const SERVER_USERS_URL = 'http://localhost:3000/users.json';

class Booking extends Component {
  constructor() {
    super();
    this.state = {
      flight: { },
      flight_no: ''
    };

    const fetchFlightInfo = () => {
      axios.get(SERVER_FLIGHTS_URL).then(results => {
        console.log(results);
      });
    }
  fetchFlightInfo();
  }

  render() {
    return (
      <div>
        <h1>coming soon</h1>
      </div>
    )
  }
}

export default Booking;

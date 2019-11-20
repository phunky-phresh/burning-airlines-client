import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const SERVER_FLIGHTS_URL = 'http://localhost:3000/flights.json';
// const SERVER_RESERVATIONS_URL = 'http://localhost:3000/reservations.json';
const SERVER_USERS_URL = 'http://localhost:3000/users.json';

class Booking extends Component {
  constructor(props) {
    console.log(props);
    super();
    this.state = {
      flight: []
      // flight_no:
    };
    const flight_id = props.match.params.flight;
    console.log(flight_id);
    const fetchFlightInfo = (flight_id) => {
      axios.get(`http://localhost:3000/flights/${flight_id}.json`).then((results) => {
        console.log(results.data);
        const flight = results.data;
        this.setState({flight: flight});
      });
    }

    fetchFlightInfo(flight_id);
  }

  render() {
    return (
      <div>
        <h1>flight booking coming soon</h1>
        <table>
        <thead>
          <tr>
            <td>Flight No</td>
            <td>Origin</td>
            <td>Destination</td>
            <td>Departure Date</td>
          </tr>
        </thead>
        <tbody>
        <tr><td>{this.state.flight.flight_no}</td><td>{this.state.flight.origin}</td><td>{this.state.flight.destination}</td><td>{this.state.flight.date}</td></tr>
        </tbody>
        </table>
      </div>
    )
  }
}

class BookingBoard extends Component{
	constructor(props) {
		super(props);
		this.state = {
			reservations: [],
			user_id: ''
		}

		axios.get(SERVER_USERS_URL).then((results) => {
			results.data.some ( (user) => {
				if ( user.name === this.props.user ){
					this.setState({ user_id: user.id });
					return true;
				} else {
					return false;
				}
			})
		})


	}


	createBoard() {

  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Booking;

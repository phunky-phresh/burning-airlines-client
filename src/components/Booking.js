import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const SERVER_FLIGHTS_URL = 'http://localhost:3000/flights.json';
// const SERVER_RESERVATIONS_URL = 'http://localhost:3000/reservations.json';
const SERVER_USERS_URL = 'http://localhost:3000/users.json';

class Booking extends Component {
  constructor(props) {
    super();
    this.state = {
      flight: { }
      // flight_no:
    };

    const fetchFlightInfo = () => {
      axios.get(`http://localhost:3000/flights/.json`).then((results) => {
        console.log(results.data);
      });
    }

    fetchFlightInfo();
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <h1>coming soon</h1>

=======
        <h1>flight booking coming soon</h1>
>>>>>>> 4a224ff46dc217c923ed031144b75568caac3b32
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

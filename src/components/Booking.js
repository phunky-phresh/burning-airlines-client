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
      flight: []
    };
    const flight_id = props.match.params.flight;
    // console.log(this.state.flight);
    const fetchFlightInfo = () => {
      axios.get(`http://localhost:3000/flights/${flight_id}.json`).then((results) => {

        const flight = results.data;
        console.log(flight);
        this.setState({flight: flight});
        // setInterval( fetchFlightInfo, 2000);
      });
    }

    fetchFlightInfo();
  }

  render() {
    return (
      <div>
      <nav>
        <Link to='/Flights/search'><p>Search</p></Link>
      </nav>
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
        <tr>
        <td>{this.state.flight.flight_no}</td><td>{this.state.flight.origin}</td><td>{this.state.flight.destination}</td><td>{this.state.flight.date}</td>
        </tr>
        </tbody>
        </table>
        <PlaneSeats flightData={this.state.flight}/>
      </div>
    )
    console.log(this.state.flight);

  }
}

const PlaneSeats = (props) => {
  console.log('rendering with these props', props.flightData.plane_id);
  const plane_id = props.flightData.plane_id;
  console.log(plane_id);

  const fetchPlaneInfo = () => {
    axios.get(`http://localhost:3000/planes/${plane_id}.json`).then((results) => {

      // const plane = results.data;
      console.log(results);
      // this.setState({flight: flight});
      // setInterval( fetchFlightInfo, 2000);
    });
  }
  fetchPlaneInfo();

  return (
    <h2>plane seats coming soon</h2>
  )
}

// class PlaneSeats extends Component {
//   constructor(flightData) {
//     console.log(flightData);
//     super();
//     this.state = {
//       plane: []
//     };
    // const plane_id = plane_id;
    // console.log(plane_id);
    // const fetchPlaneInfo = (plane_id) => {
    //   axios.get(`http://localhost:3000/planes/${plane_id}.json`).then((results) => {
    //
    //     const plane = results.data;
    //     console.log(plane);
    //     this.setState({plane: plane});
    //     setInterval( fetchPlaneInfo, 2000);
    //     console.log(plane);
    //   });
    // }
    // fetchPlaneInfo();
  // }

//   render() {
//     return(
//       <h2>Seating Plan Coming soon</h2>
//     );
//   }
// }

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

import React, {Component} from 'react';
import axios from 'axios';

const SERVER_FLIGHTS_URL = 'http://localhost:3000/flights.json';
// const SERVER_PLANES_URL = 'http://localhost:3000/planes.json' // will only need this if adding new flights

class Flights extends Component {
  constructor(props) {
    super(props);
      this.state = {
      flights:[],
      planes: [],
      user: this.props.match.params.user
  };

  const fetchFlights = () => {
    // console.log('Fetching flights');
    axios.get(SERVER_FLIGHTS_URL).then( (results) => {
        // console.log(results);
      this.setState({flights: results.data});
      console.log(results.data);
      setTimeout(fetchFlights, 4000);
    });
  };

    fetchFlights();
  }

  render() {
    return (
      <div>
        <FlightsTable flights={ this.state.flights }/>
      </div>
    )

  }
}

class FlightsTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Flight No</th>
              <th>From</th>
              <th>To</th>
            </tr>
          </thead>
          <tbody>
            { this.props.flights.map( (flight) =>
            <tr key={ flight.id }>
              <td>{ flight.date }</td>
              <td>{ flight.flight_no }</td>
              <td>{ flight.origin }</td>
              <td>{ flight.destination }</td>
            </tr>) }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Flights;

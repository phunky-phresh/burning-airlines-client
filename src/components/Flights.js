import React, {Component} from 'react';
import axios from 'axios';

// TEST
// const SERVER_URL = 'http://localhost:3000/flights.json';

class Flights extends Component {

constructor(){
  super();
  this.state ={
    flights:[]
  };


  const fetchFlights = () => {
    console.log('Fetching flights');
    const flightsUrl = `http://localhost:3000/flights.json`;
    axios.get(flightsUrl).then((results)=>{
      // console.log(results);
      this.setState({flights: results.data})
      console.log(results.data);
    });
  };
fetchFlights();
}
  render() {
    return(
      <div>
        <h2>Flight info comming soon</h2>
        <Gallery flights={this.state.flights}/>
      </div>
    );
  }
}

const Gallery = (props) => {
  return(
    <div className="searchWrap">
      <h3>All Flights</h3>
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
      {
        props.flights.map( (f) => <tr key={f.id}><td>{f.flight_no}</td><td>{f.origin}</td><td>{f.destination}</td><td>{f.date}</td></tr>)
      }
      </tbody>
      </table>
    </div>
  )
};

export default Flights;

import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../App.css';


// TEST
// const SERVER_URL = 'http://localhost:3000/flights.json';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.match.params.user,
      flights: [],
      origin: ''
      // destination: ''
    }

    this.fetchFlights = this.fetchFlights.bind(this);
  // fetchFlights();

}
fetchFlights(origin, destination) {
  // console.log(origin);
  // console.log(destination);

  axios.get(`http://localhost:3000/flights.json?origin=${origin}&destination=${destination}`).then(result => {
    // console.log(result);
    const flight = result.data;
    this.setState({flights: flight});
  });
}


render() {
  return(
    <div>
      <h2>Flight Search</h2>
      <SearchForm onSubmit={this.fetchFlights}/>
      <Gallery flights={this.state.flights} user={ this.state.user }/>
    </div>
  );
}
};

class SearchForm extends Component {
constructor() {
  super();
  this.state = {
    origin: ''
    // destination: ''
  };
  this._handleInputOrigin = this._handleInputOrigin.bind(this);
  this._handleInputDestination = this._handleInputDestination.bind(this);
  this._handleSubmit = this._handleSubmit.bind(this);
}

_handleInputOrigin(event) {
  this.setState({
    // query: event.target.value,
    origin: event.target.value

  });
}
_handleInputDestination(event) {
  this.setState({
    // query: event.target.value,
    destination: event.target.value
  });
  // console.log(event.target.value);
  // event.target.value is working
}
_handleSubmit(event) {
event.preventDefault();
this.props.onSubmit(this.state.origin, this.state.destination);
this.setState({
  origin: '',
  destination: ''
});
console.log("is this working");
//submit is failing.
}

render() {
  return(
    <form onSubmit={this._handleSubmit}>
      <input type="search" onInput={this._handleInputOrigin} placeholder="origin"/>
      <input type="search" onInput={this._handleInputDestination} placeholder="destination"/>

      <input type="submit" value="Find Flights" />
    </form>
  );
}
};

const Gallery = (props) => {

console.log('rendering with these props', props);
return(
  <div className="searchWrap">
    <h3>Flights Results</h3>
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
      props.flights.map( (f) => {
        let url = `/${props.user}/flight/${f.id}`
        return (<tr><td><Link to={url}>{f.flight_no}</Link></td><td>{f.origin}</td><td>{f.destination}</td><td>{f.date}</td></tr>)
    })
    }
    </tbody>
    </table>
  </div>
)
}

export default Search;

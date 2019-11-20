import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

// TEST
// const SERVER_URL = 'http://localhost:3000/flights.json';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      flights: [],
      origin: ''
      // destination: ''
    }

    this.fetchFlights = this.fetchFlights.bind(this);
  // fetchFlights();

}
fetchFlights(origin, destination) {
  console.log(origin);
  console.log(destination);

  axios.get(`http://localhost:3000/flights.json?origin=${origin}&destination=${destination}`).then(result => {
    console.log(result);
    const flight = result.data;
    this.setState({flights: flight});
  });
}


render() {
  return(
    <div>
      <h2>Search form coming soon</h2>
      <SearchForm onSubmit={this.fetchFlights}/>
      <Gallery flights={this.state.flights}/>
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
  <div>
    <h3>Gallery coming soon</h3>
    {
      props.flights.map( (f) => <div className="flight"><p>Flight No: {f.flight_no}</p><p>Origin: {f.origin}</p> <p>Destination: {f.destination}</p></div>)
    }
  </div>
)
}

export default Search;
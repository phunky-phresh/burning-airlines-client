import React, {Component} from 'react';
import axios from 'axios';

// TEST
// const SERVER_URL = 'http://localhost:3000/flights.json';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      // flights: []
      origin: '',
      destination: ''
    }


  // fetchFlights();

}
fetchFlights(q) {
  axios.get(`http://localhost:3000/flights.json`).then(result => {
    console.log(result);
    const flights = result.data;
    this.setState({flights});
  });
}


render() {
  return(
    <div>
      <h2>Search form coming soon</h2>
      <SearchForm onSubmit={this.fetchFlights}/>
      <Gallery flights={this.state.query}/>
    </div>
  );
}
};

class SearchForm extends Component {
constructor() {
  super();
  this.state = {
    origin: '',
    destination: ''
  };
  this._handleInputOrigin = this._handleInputOrigin.bind(this);
  this._handleInputDestination = this._handleInputDestination.bind(this);
  this._handleSubmit = this._handleSubmit.bind(this);
}

_handleInputOrigin(event) {
  this.setState({
    // query: event.target.value,
    origin: event.target.value,

  });
}
_handleInputDestination(event) {
  this.setState({
    // query: event.target.value,
    destination: event.target.value
  });
  // console.log(event.target.value);
  //event.target.value is working
}
_handleSubmit(event) {
event.preventDefault();
this.props.onSubmit(this.state.query);
//submit is failing.
}

render() {
  return(
    <form onSubmit={this._handleSubmit}>
      <input type="search" onInput={this._handleInputOrigin} placeholder="origin"/>
      <input type="search" onInput={this._handleInputDestination} placeholder="destination" />
      <input type="submit" value="search" />
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
      // props.query.map( (f) => <p>{f.origin}</p> )
    }
  </div>
)
}

export default Search;

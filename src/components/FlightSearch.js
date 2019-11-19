import React, {Component} from 'react';
import axios from 'axios';

// const SERVER_URL = 'http://localhost:3000/flights.json';

class FlightSearch extends Component {
  constructor() {
    super();
    this.state = {
      flights: ''
    };

    const fetchFlights = (q) => {
      const originUrl = `http://localhost:3000/flights.json?origin=${q}`;
      axios.get(originUrl).then ((result) => {
        this.setState({flights: result.data});
      })
    }
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
      flights: ''
    };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({
      flights: event.target.value
    });
  }
_handleSubmit(event) {
  event.preventDefault();
  this.props.onSubmit(this.state.query);
}

  render() {
    return(
      <form onSubmit={this._handleSubmit}>
        <input type="search" onInput={this._handleInput} />
        <input type="submit" value="search" />
      </form>
    )
  }
};

const Gallery = (props) => {

  console.log('rendering with these props', props);
  return(
    <div>
      <h3>Gallery coming soon</h3>
      {
        // props.flights.map( (f) => <p>{f.origin}</p> )
      }
    </div>
  )
}

export default FlightSearch;

import React, {Component} from 'react';

// const SERVER_URL = '';

class FlightSearch extends Component {
  constructor() {
    super();
    this.state = {
      flights: []
    };
  }
  render() {
    return(
      <div>
        <h2>Search form coming soon</h2>
        <SearchForm />
        <Gallery />
      </div>
    );
  }
};

class SearchForm extends Component {
  render() {
    return(
      <form>
        <input type="search" />
        <input type="submit" />
      </form>
    )
  }
};

const Gallery = (props) => {
  return(
    <div>
      <h3>Gallery coming soon</h3>
      {
        // props.flights.map( (f) => <p>{f.flightno}</p> )
      }
    </div>
  )
}

export default FlightSearch;

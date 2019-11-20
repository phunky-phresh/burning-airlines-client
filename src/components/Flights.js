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
    console.log('Fettching flights');
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

class SearchForm extends Component {
  constructor() {
    super();
    this.state ={query: ''};
    // this.state = {
    //   flights: ''
    // };
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


  return(

<table>
<thead>
<tr>
<th>flight_no</th>
<th>origin</th>
<th>destination</th>
<th>Date</th>
</tr>
</thead>
<tbody>

      <tr>
       {props.flights.map((f) => <td >{f.flight_no} </td>)}
       {props.flights.map((f) => <td >{f.origin} </td>)}
       </tr>

</tbody>
    </table>
  )
};

export default Flights;

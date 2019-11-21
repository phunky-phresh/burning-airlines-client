import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../index.css';

// const SERVER_FLIGHTS_URL = 'http://localhost:3000/flights.json';
const SERVER_RESERVATIONS_URL = 'http://localhost:3000/reservations.json';
const SERVER_USERS_URL = 'http://localhost:3000/users.json';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.match.params.user,
      flight: null,
      flight_id: this.props.match.params.flight
    };

    const fetchFlight = () => {
      axios.get(`http://localhost:3000/flights/${this.state.flight_id}.json`).then((results) => {
        // console.log( results.data );
        const flight = results.data;
        this.setState({
          flight: flight
        });
        // console.log( this.state.flight.reservations );
        // console.log( flight.reservation );
        setTimeout(fetchFlight, 500);
      })
    }

    fetchFlight();
  }

  render() {

    if ( this.state.flight === null) {
      return '';
    }

    return (
      <div>
          <p>Flight No: { this.state.flight.flight_no }</p>
          <p>Date: { this.state.flight.date }</p>
          <p>Origin: { this.state.flight.origin }</p>
          <p>Destination: { this.state.flight.destination }</p>

          <Board user={ this.state.user } rows={ this.state.flight.plane.rows } columns={ this.state.flight.plane.columns } reservations={ this.state.flight.reservations } flight_id={ this.state.flight.id }
          />
      </div>
    )
  }
}

class Seat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: this.props.row,
      column: this.props.column,
      reservation_id: this.props.reservation_id
    }

    this._selectSeat = this._selectSeat.bind(this);
    this._unselectSeat = this._unselectSeat.bind(this);

  }

    _selectSeat() {
      const newReservation = {
        row: this.state.row,
        column: this.state.column,
        user_id: this.props.user_id,
        flight_id: this.props.flight_id
      }

      axios.post(SERVER_RESERVATIONS_URL, newReservation).then( (result) => {
        this.setState({
          reserved_by: this.props.user,
          reservation_id: result.data.id
        })
      });
    }

    _unselectSeat() {
      axios.delete(`http://localhost:3000/reservations/${ this.state.reservation_id }.json`).then( (result) => {
        this.setState({
          owner: null,
          reservation_id: null
        })
      })
    }

    columnLetter(n) {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
      return letters[n - 1];
    }

    createSeats() {
      if ( this.props.reserved_by === 'null' ) {
        return <Button variant="success" className="seat" onClick={ this._selectSeat }>{ this.columnLetter(this.state.column) }{ this.state.row } </Button>
      } else if ( this.props.user === this.props.reserved_by ) {
        return <Button variant="outline-success" className="seat" onClick={ this._unselectSeat }>{ this.props.reserved_by }</Button>
      } else {
        return <Button variant="outline-danger" className="seat">{ this.props.reserved_by }</Button>
      }
    }

  render() {
    return (
      <Col>
        { this.createSeats() }
      </Col>
    )
  }
}

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: null
    }

    axios.get(SERVER_USERS_URL).then( (results) => {
      results.data.forEach( (user) => {
        if ( user.name === this.props.user ) {
          this.setState({ user_id: user.id });
        }
      })
    })
  }

  createBoard() {

    const board = [];
    // console.log( this.props.reservations );
    for (let i = 1; i <= this.props.rows; i++) {

      const row = [];

      for (let j = 1; j <= this.props.columns; j++) {

        let seatTaken = false;

        this.props.reservations.map( (seat) => {
          if ( seat.row === i && seat.column === j ) {
            row.push( <Seat user={ this.props.user } user_id={ this.state.user_id } flight_id={ this.props.flight_id } key={`${ i }-${ j }`} row={ i } column={ j } reserved_by={ seat.user.name } reservation_id={ seat.id } /> );
            seatTaken = true;
            return;
          }
        })

        if ( seatTaken === false ) {
          row.push( <Seat user={ this.props.user } user_id={ this.state.user_id } flight_id={ this.props.flight_id } key={`${ i }-${ j }`} row={ i } column={ j } reserved_by="null" reservation_id='null' /> )
        }
      }
      board.push(<Row key={`${row}-${ i }`}>{ row }</Row>);
    }

    return board;
  }

  render() {

    return (
      <Container>
        <div className="board">
          { this.createBoard() }
        </div>
      </Container>
    )
  }
}

export default Booking;

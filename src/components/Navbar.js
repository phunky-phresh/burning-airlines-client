import React, { Component } from 'react';
import axios from 'axios'

const SERVER_USERS_URL = 'http://localhost:3000/users.json'

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    }

  const fetchUsers = () => {
    axios.get(SERVER_USERS_URL).then( (results) => {
      this.setState( { users: results.data } ),
    });
  }

    fetchUsers();


  };

render() {
  return (
    <nav>
      { this.state.users.map( (user) =>
        <Link to={ `/${ user.name }` } users={ user.name }> { user.name } </Link>
      )}
    
    </nav>
  )
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../index.css';

const SERVER_USERS_URL = 'http://localhost:3000/users.json'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    }


  const fetchUsers = () => {
    axios.get(SERVER_USERS_URL).then( (results) => {
      this.setState( { users: results.data } );
    })
  }

    fetchUsers();
  }

  render() {
    return (
      <nav>
        { this.state.users.map( (user) =>
          <Link to={ `/${ user.name }` } users={ user.name }> { user.name } </Link>
        )}
      </nav>
    )
  }
}

export default Login;

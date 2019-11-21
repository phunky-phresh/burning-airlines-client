import React, { Component } from 'react';
import Login from './Login'
import { Link } from 'react-router-dom'
import '../index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    )
  };
}

export default Home;

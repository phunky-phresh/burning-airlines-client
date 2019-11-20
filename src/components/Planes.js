import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Planes extends Component {
  constructor() {
    super();
    this.state = {
      planes: ''
    }
  }
  render() {
    return (
      <div>
        <h1>Planes coming soon</h1>
      </div>
    )
  }
}

export default Planes;

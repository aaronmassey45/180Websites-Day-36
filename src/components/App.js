import React, { Component } from 'react';
import Navbar from './navbar';
import Calculator from './views/calculator';
import '../App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Calculator />
        </div>
      </div>
    );
  }
}

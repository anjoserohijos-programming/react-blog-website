import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="content">
        <div className="header-section">
          <img id="logo" src={logo} alt="logo.png"/>
          <h1>Hello World New!</h1>
        </div>
        <h3>This app is created by Anjo Serohijos</h3>
      </div>
    );
  }
}

export default App;

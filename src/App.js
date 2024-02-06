import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import RenderThis from './renderThis.js';
import { Button, Card, Stack, Typography, Typography2, Avatar, Chip, Switch, Autocomplete, TextField } from '@mui/material';
import ProfileCard from './State.js';


class App extends Component {
  firstName = "Anjo";
  middleName = "Cabuang";
  lastName = "Serohijos";
  
  render() {
    return (
      <div className="content">
        <div className="form-fields">
          <TextField className = "field" variant="outlined" label="Email" type="email"  margin='10px'/>
          <TextField className = "field" variant="outlined" label="Email" type="email" />
          <TextField className = "field" variant="outlined" label="Email" type="email" />
          
        </div>
        <div className="card">
          <ProfileCard className="profileCard"/>
        </div>
        <Button variant="contained">Text</Button>
        <h3>This app is created by Anjo Serohijos</h3>
      </div>
    );
  }
}

export default App;

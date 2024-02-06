import React from 'react';
import logo from './logo.svg';

const  RenderThis = () =>{
    return (
      <div className="content">
        <div className="header-section">
          <img id="logo" src={logo} alt="logo.png"/>
          <h1>Hello World New! from renderThis</h1>
        </div>
        <h3>This app is created by Anjo Serohijos</h3>
      </div>
    );
  }
  

export  default RenderThis;
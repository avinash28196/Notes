import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clinic from './Clinic/Clinic';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello Clinic Reaaact App </h1>
        <p>This is DentalClinicBangalore App</p>
        <Clinic name="Crown Dental Clinic" doc="Govind"/>
        <Clinic name="Smile Dental" doc="Priya"/>
        <Clinic name="SunShine Dental" doc="Lakshmi"/>
      </div>
    );
  }
}

export default App;

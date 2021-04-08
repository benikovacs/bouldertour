import React, { Component } from 'react';
import Countdown from './Countdown.js';


class Timerapp extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="App">
        
        <h3 className="title">Time left until race (1st April 2022):</h3>
        <Countdown date={`2022-04-01T00:00:00`} />
      </div>
    );
  }
}

export default Timerapp;
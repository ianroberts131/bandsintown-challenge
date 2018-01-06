import React, { Component } from 'react';
import Header from './components/header/Header';
import EventList from './components/eventList/EventList';
import './App.css';

class App extends Component {
  render() {
    var bandName = this.props.location.pathname;
    return (
      <div className="App">
        <Header bandName={ bandName } />
        <EventList bandName={ bandName } />
      </div>
    );
  }
}

export default App;

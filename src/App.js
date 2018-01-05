import React, { Component } from 'react';
import Header from './components/header/Header';
import EventList from './components/eventList/EventList';
import NoEvents from './components/noEvents/NoEvents';
import './App.css';

class App extends Component {
  render() {
    var bandName = this.props.location.pathname;
    var apiRequest = "https://rest.bandsintown.com/artists"
                      + bandName + "/events?app_id=bit_challenge";
    return (
      <div className="App">
        <Header bandName={ bandName } />
        <EventList bandName={ bandName } />
      </div>
    );
  }
}

export default App;

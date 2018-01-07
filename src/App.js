import React, { Component } from 'react';
import Header from './components/header/Header';
import EventList from './components/eventList/EventList';
import './App.css';

class App extends Component {
  render() {
    // React router provides location of application to components routed to
    // Since URL will be '/:url_escaped_artist_name', the 'pathname'
    // method will simply return the url escaped artist name
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

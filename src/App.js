import React, { Component } from 'react';
import Header from './components/header/Header';
import EventList from './components/eventList/EventList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <EventList />
      </div>
    );
  }
}

export default App;

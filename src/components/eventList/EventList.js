import React from 'react';
import './eventList.css'
var moment = require('moment');

class EventList extends React.Component {
  constructor() {
    super();
    this.state = {
      events: {}
    }
  }

  componentDidMount() {
    fetch('https://rest.bandsintown.com/artists/Kasabian/events?app_id=bit_challenge')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({ events: data})
    })
  }

  render() {

    return (
      <div>
        { Object.keys(this.state.events).map((key, index) => {
          var event = this.state.events[key];
          var region = event.venue.country === "United States" ?
            event.venue.region : event.venue.country;
          var location = event.venue.city + ", " + region;
          var date = moment(event.datetime).format("MMM D");
          var url = event.offers[0].url
          return (
            <div>
              <p>Date: { date }</p>
              <p>Venue Name: {event.venue.name}</p>
              <p>Location: { location }</p>
              Tickets: <a href={ url }>Tickets</a>
            </div>
          )
        }) }
      </div>
    )

  }
}

export default EventList;

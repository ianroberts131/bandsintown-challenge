import React from 'react';
import './eventList.css'

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
          return (
            <div>
              <p>Date: { event.datetime }</p>
              <p>Venue Name: {event.venue.name}</p>
              <p>Location: { location }</p>
              Tickets: <a href={ event.offers[0].url }>Tickets</a>
            </div>
          )
        }) }
      </div>
    )

  }
}

export default EventList;

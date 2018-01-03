import React from 'react';
import './eventList.css'
import NoEvents from '../noEvents/NoEvents';
var moment = require('moment');

class EventList extends React.Component {
  constructor() {
    super();
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    fetch('https://rest.bandsintown.com/artists/Kasabian/events?app_id=bit_challenge')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({ events: data })
    })
  }

  render() {
    // If there are no events, display the NoEvents component.
    // Otherwise, nothing renders and events are mapped over and displayed.
    var noEvents;
    if(this.state.events.length === 0) {
      noEvents = <NoEvents/>;
    }
    return (
      <div>
        { noEvents }
        { this.state.events.map((event) => {
          var region = event.venue.country === "United States" ?
            event.venue.region : event.venue.country;
          var location = event.venue.city + ", " + region;
          var date = moment(event.datetime).format("MMM D");
          var url = event.offers.length > 0 ? event.offers[0].url : "no ticket";
          var ticketsId = url === "no ticket" ? "hide-ticket" : "tickets-button-wrapper";
          return (
            <div id="events-container">
              <div className="event">
                <div className="event-item" id="date-wrapper">
                  <span id="date">{ date }</span>
                </div>
                <div className="event-item" id="venue-wrapper">
                  <span>{event.venue.name}</span>
                </div>
                <div className="event-item" id="location-wrapper">
                  <span>{ location }</span>
                </div>
                <div className="event-item" id={ ticketsId }>
                  <a id="tickets-button" href={ url }>Tickets</a>
                </div>
              </div>
            </div>
          )
        }) }
      </div>
    )

  }
}

export default EventList;

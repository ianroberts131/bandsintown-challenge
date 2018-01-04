import React from 'react';
import './eventList.css';
import Event from '../event/Event';
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
      <div id="events-container">
        { noEvents }
        { this.state.events.map((event) => {
          var region = event.venue.country === "United States" ?
            event.venue.region : event.venue.country;
          var location = event.venue.city + ", " + region;
          var venue = event.venue.name;
          var date = moment(event.datetime).format("MMM D");
          var url = event.offers.length > 0 ? event.offers[0].url : "no ticket";
          var ticketsId = url === "no ticket" ? "hide-ticket" : "tickets-button-wrapper";
          return (
            <Event date={ date } venue={ venue } location={ location }
                    url={ url } ticketsId={ ticketsId }/>
          )
        }) }
      </div>
    )

  }
}

export default EventList;

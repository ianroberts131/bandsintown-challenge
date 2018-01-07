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
    var bandName = this.props.bandName;
    var apiRequest = "https://rest.bandsintown.com/artists"
                      + bandName + "/events?app_id=bit_challenge";
    fetch(apiRequest)
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
    if (this.state.events.length === 0) {
      noEvents = <NoEvents />;
    }
    return (
      <div id="events-container">

        { this.state.events.map((event, index) => {

          var region = event.venue.country === "United States" ?
            event.venue.region : event.venue.country;
          var location = event.venue.city + ", " + region;

          var venue = event.venue.name;
          var date = moment(event.datetime).format("MMM D");

          return (
            <Event event = { event } date={ date } venue={ venue }
                    location={ location } key={ index } />
          )
        }) }

        { noEvents }

      </div>
    )

  }
}

export default EventList;

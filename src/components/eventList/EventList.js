import React from 'react';
import './eventList.css';
import Event from '../event/Event';
import NoEvents from '../noEvents/NoEvents';
var moment = require('moment');

class EventList extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      noBandFound: false
    }
  }

  componentDidMount() {
    var bandName = this.props.bandName;
    var apiRequest = "https://rest.bandsintown.com/artists"
                      + bandName + "/events?app_id=bit_challenge";
    fetch(apiRequest)
    .then(response => {
      // Check if response is successful
      if (!response.ok) { throw response }
      // Convert the response to json
      return response.json()
    })
    .then(data => {
      /*
      The API response is an array with all of the events.
      Store this entire array in the events array in state.
      Will then be able to map over events and pull data as needed.
      */
      this.setState({ events: data });
    }).catch( error => {
        this.setState({ noBandFound: true });
        console.log("There was an error: ", error);
    });
  }

  render() {
    // If there are no events, display the NoEvents component.
    // Otherwise, nothing renders and events are mapped over and displayed.
    var noEvents;
    if (this.state.events.length === 0) {
      noEvents = <NoEvents noBandFound={ this.state.noBandFound }/>;
    }
    return (
      <div id="events-container">

        { this.state.events.map((event, index) => {

            /*
            US based events are of the form 'city, region'
            Otherwise, events are of the form 'city, country'
            Determine the region/country here before concatenating with city
            */
            var region = event.venue.country === "United States" ?
              event.venue.region : event.venue.country;
            var location = event.venue.city + ", " + region;

            var venue = event.venue.name;

            // Use the moment.js library to format the date
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

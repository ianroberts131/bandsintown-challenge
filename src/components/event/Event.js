import React from 'react';
import './event.css';

class Event extends React.Component {
  render() {
    const { event, date, venue, location } = this.props;

    /*
    Ticket data comes from the first element of the offers array.
    If the array has an element, the data is in the first element.
    If there is no data, store the string 'no ticket' in url
    */
    var url = event.offers.length > 0 ? event.offers[0].url : "no ticket";

    /*
    If the url has value 'no ticket', set the css ID to 'no ticket'
    Otherwise, set the css ID to 'tickets-button-section'
    */
    var ticketsId = url === "no ticket" ?
                            "hide-ticket" : "tickets-button-section";

    return (
      <div className="event">

        <div id="event-information-section">
          <div id="event-information-wrapper">
            <div className="event-item" id="date-wrapper">
              <div id="date" className="vertical-center">{ date }</div>
            </div>
            <div className="event-item" id="venue-wrapper">
              <div id="venue" className="vertical-center">{ venue }</div>
            </div>
            <div className="event-item" id="location-wrapper">
              <div id="location" className="vertical-center">{ location }</div>
            </div>
          </div>
        </div>

        <div id={ ticketsId }>
          <div id="tickets-button-wrapper">
            <a id="tickets-button" href={ url }>Tickets</a>
          </div>
        </div>

      </div>
    )
  }
}

export default Event;

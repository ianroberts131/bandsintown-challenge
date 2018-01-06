import React from 'react';
import './event.css';

class Event extends React.Component {
  render() {
    const { event, date, venue, location } = this.props;

    var url = event.offers.length > 0 ? event.offers[0].url : "no ticket";
    var ticketsId = url === "no ticket" ? "hide-ticket" : "tickets-button-section";

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

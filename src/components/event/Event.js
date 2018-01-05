import React from 'react';
import './event.css';

class Event extends React.Component {
  render() {
    const { event, date, venue, location } = this.props;

    var url = event.offers.length > 0 ? event.offers[0].url : "no ticket";
    var ticketsId = url === "no ticket" ? "hide-ticket" : "tickets-button-wrapper";

    return (
      <div className="event">

        <div className="event-item" id="date-wrapper">
          <span id="date">{ date }</span>
        </div>

        <div className="event-item" id="venue-wrapper">
          <span>{ venue }</span>
        </div>

        <div className="event-item" id="location-wrapper">
          <span>{ location }</span>
        </div>

        <div className="event-item" id={ ticketsId }>
          <a id="tickets-button" href={ url }>Tickets</a>
        </div>

      </div>
    )
  }
}

export default Event;

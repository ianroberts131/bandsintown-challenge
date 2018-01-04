import React from 'react';
import './event.css';

class Event extends React.Component {
  render() {
    const { date, venue, location, ticketsId, url } = this.props;
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

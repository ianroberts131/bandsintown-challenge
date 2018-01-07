import React from 'react';
import './noEvents.css';

class NoEvents extends React.Component {
  render() {

    var noBandFound = this.props.noBandFound;

    // Only display message if a bandis found
    var message = noBandFound ? "" : "No upcoming events";

    return (
      <div id="no-events">
        { message }
      </div>
    )
  }
}

export default NoEvents;

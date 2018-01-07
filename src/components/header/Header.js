import React from 'react';
import './header.css'
var defaultImage = require('../../images/bandsintown-logo.png');

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      artistImage: "",
      artistName: ""
    }
  }

  componentDidMount() {
    var bandName = this.props.bandName;
    var apiRequest = "https://rest.bandsintown.com/artists"
                      + bandName + "/?app_id=bit_challenge";
    fetch(apiRequest)
    .then(response => {
      // Check if response is successful
      if (!response.ok) { throw response }
      // Convert the response to json
      return response.json()
    })
    .then(data => {
      this.setState({
        artistImage: data.thumb_url,
        artistName: data.name
      });
    }).catch( error => {
        this.setState({ artistName: "Not Found" });
        console.log("There was an error: ", error);
    });
  }

  /*
  If the image fails to load, change the artist image to the
  Bandsintown logo
  */
  handleImageError = () => {
    this.setState({ artistImage: defaultImage });
  }

  render() {

    var artistImage = this.state.artistImage;

    // Conditionally set header Events text depending on if a band is found
    var upcomingEvents = this.state.artistName === "Not Found" ?
                                  "No Band Found" : "Upcoming Events";
    var artistName = this.state.artistName === "Not Found" ?
                                  "" : this.state.artistName;

    return (
      <div id="header-container">
        <img id="artist-image" alt="Artist Graphic" src={ artistImage }
                                onError={ () => this.handleImageError() }/>
        <div id="header-text-section">
          <div id="header-text-wrapper" className="vertical-center">
            <h2 id="artist-name">{ artistName }</h2>
            <h2 id="upcoming-events-header">{ upcomingEvents }</h2>
          </div>
        </div>
      </div>
    )

  }
}

export default Header;

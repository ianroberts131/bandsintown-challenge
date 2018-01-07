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
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        artistImage: data.thumb_url,
        artistName: data.name
      })
    })
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
    return (
      <div id="header-container">
        <img id="artist-image" alt="Artist Graphic" src={ artistImage }
                                onError={ () => this.handleImageError() }/>
        <div id="header-text-section">
          <div id="header-text-wrapper">
            <h2 id="artist-name">{ this.state.artistName }</h2>
            <h2 id="upcoming-events-header">Upcoming Events</h2>
          </div>
        </div>
      </div>
    )

  }
}

export default Header;

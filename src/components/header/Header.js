import React from 'react';
import './header.css'
var defaultImage = require('../../images/bandsintown-logo.png');

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      artistImage: "",
      artistName: "",
      imageLoadFail: false
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

  _onError = () => {
    this.setState({ imageLoadFail: true });
  }

  render() {
    var artistImage = this.state.artistImage;
    // If the image fails to load, imageLoadFail is set to true
    // Within image tag, if imageLoadFail is true, display Bandsintown logo
    var imageFailed = this.state.imageLoadFail;
    return (
      <div id="header-container">
        <img id="artist-image" src={ imageFailed ? artistImage : defaultImage }
                                onError={ this._onError }/>
        <div id="header-text-section">
          <div id="header-text-wrapper">
            <h2 id="artist-name">{this.state.artistName}</h2>
            <h2 id="upcoming-events-header">Upcoming Events</h2>
          </div>
        </div>
      </div>
    )

  }
}

export default Header;

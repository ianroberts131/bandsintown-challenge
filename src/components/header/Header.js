import React from 'react';
import './header.css'

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      artistImage: "",
      artistName: ""
    }
  }

  componentDidMount() {
    fetch('https://rest.bandsintown.com/artists/Kasabian?app_id=bit_challenge')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        artistImage: data.thumb_url,
        artistName: data.name
      })
    })
  }

  render() {

    return (
      <div id="header-container">
        <img id="artist-image" src={this.state.artistImage}/>
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

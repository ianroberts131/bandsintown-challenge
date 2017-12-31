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
    fetch('https://rest.bandsintown.com/artists/Darkest%20Hour?app_id=bit_challenge')
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
      <div>
        <h1>{this.state.artistName}</h1>
        <img src={this.state.artistImage}/>
      </div>
    )

  }
}

export default Header;

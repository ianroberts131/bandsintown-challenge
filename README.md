# Bandsintown Web Developer Code Challenge

For this challenge, I was tasked with developing an upcoming events view for any artist using the [Bandsintown public API](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In order to use the application, enter a url escaped artist on the root path of the application (i.e. localhost:3000/?artist=:url_escaped_artist_name)

The key components displayed on the events view are the following:

### Header
Displays the artist image and artist name pulled from the Bandsintown API. For the artist image, I chose to display the Bandsintown logo if there was an error loading the image (such as for the band 'Protest the Hero').

### Event List
Displays the date, venue, and location of upcoming events. Additionally, if tickets are available, a button to purchase tickets is displayed.

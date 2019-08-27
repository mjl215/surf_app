import React, { Component } from 'react';
import axios from 'axios';
const moment = require('moment');

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationForecast: undefined
    }
  }

  componentDidMount(){
    this.loadForecatData();
  }

  async loadForecatData(){
    const forecastData = await axios.get('/location');

    console.log(forecastData.data);

    this.setState(() => ({
      locationForecast: forecastData.data
      }));

  }

  render() {

    const forecast = this.state.locationForecast

    const displayForecast = forecast  && forecast.map((reading) => {

      
    return (
      <div id={reading._id}>
        <h1>{reading.name}: {moment.unix(reading.forecast[0].timestamp).format("MMM Do H:00")}</h1>
        <h2>{reading.forecast[0].solidRating} stars</h2>
        {reading.upcomingSwells[0].swell ? <h2>Upcoming Swell: {reading.upcomingSwells[0].days} out of the next 5 days with an average rating above 4 stars</h2> : <h2>no upcoming swell</h2>}
      </div>
      
    )
  
  })

    return (
      <div>
        <h1>Surf Report and Trip Planner!! </h1>
        { displayForecast || <h1>no data available</h1> }
        
      </div>
    )
  }
}

export default LandingPage
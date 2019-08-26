import React, { Component } from 'react';
import axios from 'axios';

 class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationForecast: undefined,
      test: 1
    }
  }

  componentDidMount(){
    this.loadForecatData();
  }

  async loadForecatData(){
    const forecastData = await axios.get('/location');

    console.log(forecastData);

    this.setState(() => ({
      locationForecast: forecastData.data
      }));

  }

  render() {

    const forecast = this.state.locationForecast

    return (
      <div>

        {forecast && forecast.map((reading) => <p key={reading.id}>{reading.name}: {reading.forecast[0].timestamp}</p>)}
      </div>
    )
  }
}

export default LandingPage
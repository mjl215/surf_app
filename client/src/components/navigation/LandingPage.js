import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {setForecastData} from '../../actions/forecastAction';
const moment = require('moment');



class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: null
    }
  }

  componentDidMount(){
    this.loadForecatData();
  }

  async loadForecatData(){
    
    try {
      this.setState(() => ({loading: true }));
      const forecastData = await axios.get('/location')
      this.props.setForecastData(forecastData.data)
      this.setState(() => ({loading: false}))

    } catch (error) {
      this.setState(() => ({ error, loading: false }))
    }
  }

  render(){

    const { loading, error} = this.state

    const forecast = this.props.forecastState.forecastData

    const displayForecast = forecast  && forecast.map((reading) => {
      
      return (
        <div key={reading._id} >
          <h1>{reading.name}: {moment.unix(reading.forecast[0].timestamp).format("MMM Do H:00")}</h1>
          <h2>{reading.forecast[0].solidRating} stars</h2>
          {reading.upcomingSwells[0].swell ? <h2>Upcoming Swell: {reading.upcomingSwells[0].days} out of the next 5 days with an average rating above 3 stars</h2> : <h2>no upcoming swell</h2>}
        </div> 
      )
    })

    if(loading){
      return (
        <p>loading</p>
      )
    }

    if(error){
      return(
        <p>Erorr</p>
      )
    }

    return (
      <div className="landing_page">
        <h1>Surf Report and Trip Planner!! </h1>
        { displayForecast }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  forecastState: state.forecastReducer
})

const mapDispactchToProps = (dispatch) => ({
  setForecastData: (data) => dispatch(setForecastData(data))
})

export default connect(mapStateToProps, mapDispactchToProps)(LandingPage)
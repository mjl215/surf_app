import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';

import ForecastTable from '../forecast/ForecastTable';

import {setForecastData} from '../../actions/ForecastAction';
import moment from 'moment';



class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null
    }
  }

  componentDidMount(){
    this.loadForecatData();
  }

  async loadForecatData(){
    
    try {
      
      this.props.setForecastData()
      this.setState(() => ({loading: false}))

    } catch (error) {
      this.setState(() => ({ error, loading: false }))
      console.log(error)
    }
  }

  render(){

    const { loading} = this.state

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
        <div className="landing_page">
          <p>loading</p>
        </div>
          
      )
    }

    if(this.props.forecastState.error){
      return(
        <div className="landing_page">
          <p>{this.props.forecastState.errorInfo.response.status} : {this.props.forecastState.errorInfo.response.statusText}</p>
        </div>
        
      )
    }

    return (
      <div className="landing_page">
        <ForecastTable />
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
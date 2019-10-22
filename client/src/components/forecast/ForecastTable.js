import React from 'react';
import { connect } from 'react-redux';

import ForecastTableHeader from './ForecastTableHeader';
import ForecastTableRow from './ForecastTableRow';   

const  ForecastTable = (props) => {

    const {error, errorInfo, forecastData} = props.forecastState

    console.log(error);
    console.log(errorInfo);
    console.log(forecastData);

    const tableRows = forecastData && forecastData.map(data => {
        return <ForecastTableRow data={data} key={data._id}/>
    })

    return (
        <div className="forecast__table">
            <ForecastTableHeader />
            {forecastData && tableRows}
        </div>
    )
}

const mapStateToProps = (state) => ({
    forecastState: state.forecastReducer
  })

export default connect(mapStateToProps)(ForecastTable);
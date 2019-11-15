import React from 'react';
import { connect } from 'react-redux';

import moment from 'moment';
import HighChartGraph from '../graphs/HighChartGraph';

import waveHeightUtil from '../../utils/graphs/waveHeight';
import xAxisLabelCreator from '../../utils/graphs/xAxisLabel';


const DetailedForecast = (props) => {

    const selectedData = props.forecast.forecastData.filter((forecast) => forecast._id === props.forecast.selectedForecast);
  
    const waveHeightArr = waveHeightUtil(selectedData[0]);
    const xAxisLabels = xAxisLabelCreator(selectedData[0]);
    const title = `Surf Forecast for ${selectedData[0].name}`;
    const chartType = 'column';
    const chartData = waveHeightArr;

    const colors = '#2f7ed8';

    return (
        <div className="graph__container">
            Detailed forecast
            <HighChartGraph 
              title={title} 
              chartType={chartType} 
              data={chartData}
              xAxisLabels={xAxisLabels}
              colors={colors}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    forecast: state.forecastReducer
  })
  
  const mapDispatchToProps = (dispatch) => ({
    
  })

export default connect(mapStateToProps, mapDispatchToProps)(DetailedForecast)

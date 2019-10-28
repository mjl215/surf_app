import React from 'react';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';

import ForecastColumn from './ForecastColumn';


const ForecastTableRow = props => {

    const {data} = props;
    
    console.log(data);

    const dailyForecast = data && data.forecast.slice(2,7).map((data) => <ForecastColumn key={data._id} {...data} />)

    const onclick = () => {
        console.log(data._id)
    }

    return (
    <div className="forecast__table__row">
        <div className="forecast__table__item__small">
            <p className="forecast__table__item__text">{data.name}</p>   
        </div>
        <div className="forecast__table__item__small">
            <p className="forecast__table__item__text">{data.skillLevel}</p>   
        </div>
        <div className="forecast__table__item__large">
            {dailyForecast}
        </div>
        <div className="forecast__table__item">
            {data.upcomingSwells[0].swell ? 
            <p className="forecast__table__item__text">Upcoming Swell: Avg. rating for the next 5 days {data.upcomingSwells[0].averageRating} stars </p> :
            <p className="forecast__table__item__text">No swell forecast: Avg. rating for the next 5 days {data.upcomingSwells[0].averageRating} stars </p> }
        </div>
        <div className="forecast__table__item__small">
            <p 
                className="forecast__table__item__text"
                onClick={onclick}
            >See full forecast</p>
        </div>
    </div>       
    )
}

// ForecastTableRow.propTypes = {

// }

const mapStateToProps =(state) => ({
    authState: state.authReducer
  })
  
  const mapDispatchToProps = (dispatch) => ({
    
  })

export default connect(mapStateToProps, mapDispatchToProps)(ForecastTableRow)

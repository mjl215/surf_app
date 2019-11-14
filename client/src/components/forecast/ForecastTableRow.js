import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';

import { setSelectedForecast } from '../../actions/ForecastAction'; 

import ForecastColumn from './ForecastColumn';


const ForecastTableRow = props => {

    const {data} = props;
    const dailyForecast = data && data.forecast.slice(2,7).map((data) => <ForecastColumn key={data._id} {...data} />)

    const onClick = () => {
        console.log(data._id)
        props.selectForecast(data._id)
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
            <Link to={`/forecast/${data.name}`}>
                <p 
                    className="forecast__table__item__text"
                    onClick={onClick}
                >
                        See full forecast
                </p>
            </Link>
        </div>
    </div>       
    )
}

// ForecastTableRow.propTypes = {

// }

  
  const mapDispatchToProps = (dispatch) => ({
    selectForecast: (id) => dispatch(setSelectedForecast(id))
  })

export default connect(undefined, mapDispatchToProps)(ForecastTableRow)

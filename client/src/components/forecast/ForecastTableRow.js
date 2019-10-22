import React from 'react';
//import PropTypes from 'prop-types';

import moment from 'moment';

const ForecastTableRow = props => {

    const {data} = props

    console.log(data);

    return (
    <div className="forecast__table__row">
        <div className="forecast__table__item">
            <p className="forecast__table__item__text">{data.name}</p>   
        </div>
        <div className="forecast__table__item">
            <p className="forecast__table__item__text">{data.skillLevel}</p>   
        </div>
        <div className="forecast__table__item__large">
            <div className="forecast__table__row">
                <p className="forecast__table__item__text">Local Time: {moment.unix(data.forecast[0].timestamp).format("H:00")}</p> 
                <p className="forecast__table__item__text">Rating: {data.forecast[0].solidRating} stars</p> 
            </div>
            <div className="forecast__table__row">
                <p className="forecast__table__item__text">Wave Height: {data.forecast[0].minBreakingHeight} - {data.forecast[0].maxBreakingHeight} Ft</p>
                <p className="forecast__table__item__text">Swell Direction: {data.forecast[0].swell[0].compassDirection}</p>
            </div>
            <div className="forecast__table__row">
                <p className="forecast__table__item__text">Wind Direction: {data.forecast[0].wind[0].compassDirection}</p>
                <p className="forecast__table__item__text">Wind Speed: {data.forecast[0].wind[0].speed} MpH</p>
            </div>
        </div>
        <div className="forecast__table__item">
            {data.upcomingSwells[0].swell ? 
            <p className="forecast__table__item__text">Upcoming Swell: Avg. rating for the next 5 days {data.upcomingSwells[0].averageRating} stars </p> :
            <p className="forecast__table__item__text">No swell forecast: Avg. rating for the next 5 days {data.upcomingSwells[0].averageRatingrating} stars </p> }
        </div>
        <div className="forecast__table__item__small">
            <p className="forecast__table__item__text">See full forecast</p>
        </div>
    </div>
           
    )
}

// ForecastTableRow.propTypes = {

// }

export default ForecastTableRow

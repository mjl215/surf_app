import React from 'react';
//import PropTypes from 'prop-types';

import moment from 'moment';

const ForecastTableHeader = () => {

    const today = moment().format("MMM Do");
    
    return (
        <div className="forecast__table__row">
            <div className="forecast__table__item__small">
                <p className="forecast__table__item__text">Location</p>
            </div>
            <div className="forecast__table__item__small">
                <p className="forecast__table__item__text">Skill Level</p>
            </div>
            <div className="forecast__table__item__large">
                <p className="forecast__table__item__text">Todays Conditions - {today} </p>
                <div className="forecast__table__row">
                    <p className="forecast__table__item__text">Time</p>
                    <p className="forecast__table__item__text">Rating</p>
                    <p className="forecast__table__item__text">Wave Height</p>
                    <p className="forecast__table__item__text">Swell Direction</p>
                    <p className="forecast__table__item__text">Wind</p>
                </div>
            </div>
            <div className="forecast__table__item">
                <p className="forecast__table__item__text">Upcoming swells</p>
            </div>
            <div className="forecast__table__item__small">
                <p className="forecast__table__item__text">See Full Forecast</p>
            </div>
        </div>
    )
}

export default ForecastTableHeader;

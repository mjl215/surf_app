import React from 'react';
//import PropTypes from 'prop-types';

const ForecastTableHeader = () => {
    return (
        <div className="forecast__table__row">
            <div className="forecast__table__item">
                <p className="forecast__table__item__text">Location</p>
            </div>
            <div className="forecast__table__item">
                <p className="forecast__table__item__text">Skill Level</p>
            </div>
            <div className="forecast__table__item__large">
                <p className="forecast__table__item__text">Live Conditions</p>
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

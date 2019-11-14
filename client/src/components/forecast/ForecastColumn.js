import React from 'react'
// import PropTypes from 'prop-types'

import moment from 'moment';

const ForecastColumn = props => {

    return (
        <div className="forecast__table__row">
            <p className="forecast__table__item__text">{moment.unix(props.localTimestamp).format("HH:00")}</p> 
            <p className="forecast__table__item__text">{props.solidRating} stars</p> 
        
            <p className="forecast__table__item__text"> {props.minBreakingHeight} - {props.maxBreakingHeight} Ft</p>
            <p className="forecast__table__item__text">{props.swell[0].compassDirection}</p>
            <p className="forecast__table__item__text">{props.wind[0].compassDirection}</p>
            <p className="forecast__table__item__text"> {props.wind[0].speed} MpH</p>
        </div>
)
}

// ForecastColum.propTypes = {

// }

export default ForecastColumn

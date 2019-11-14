import * as action_types from './action_types';
import axios from 'axios';

export const setForecastData = () => async dispatch => {
  try {

    const forecastData = await axios.get('/location')

    dispatch ({
      type: action_types.SET_FORECAST_DATA,
      data: forecastData.data
    })
  } catch (error) {
    dispatch ({
      type: action_types.SET_FORECAST_DATA_ERROR,
      data: error
    })
  }
};

export const setSelectedForecast = (id) => async dispatch => {
  dispatch({
    type: action_types.SET_SELECTED_FORECAST,
    data: id
  })
}
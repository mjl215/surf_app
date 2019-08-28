const alertReducerDefaultState = {
  forecastData: null
};

const alertReducer = (state = alertReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_FORECAST_DATA':
      return {
        forecastData: action.data
      };
    default:
      return state
  }
};

export default alertReducer;
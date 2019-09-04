const alertReducerDefaultState = {
  forecastData: [],
  error: false,
  errorInfo: null
};

const alertReducer = (state = alertReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_FORECAST_DATA':
      return {
        forecastData: action.data,
        error: false,
        errorInfo: null
      };
    
      case 'SET_FORECAST_DATA_ERROR':
        return {
          forecastData: [],
          error: true,
          errorInfo: action.data
        }
    default:
      return state
  }
};

export default alertReducer;
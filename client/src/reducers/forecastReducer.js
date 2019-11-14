const alertReducerDefaultState = {
  forecastData: [],
  selectedForecast: null,
  error: false,
  errorInfo: null
};

const alertReducer = (state = alertReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_FORECAST_DATA':
      return {
        ...state,
        forecastData: action.data,
        error: false,
        errorInfo: null
      };
    
      case 'SET_FORECAST_DATA_ERROR':
        return {
          ...state,
          forecastData: [],
          error: true,
          errorInfo: action.data
        }

      case 'SET_SELECTED_FORECAST':
        return {
          ...state,
          selectedForecast: action.data
        }
    default:
      return state
  }
};

export default alertReducer;
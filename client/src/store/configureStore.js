import { createStore, combineReducers } from 'redux';
import forecastReducer from '../reducers/forecastReducer';


export default () => {
  const store = createStore(
    combineReducers({
      forecastReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}

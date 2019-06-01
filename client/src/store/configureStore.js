import { createStore, combineReducers } from 'redux';
// Import Reducers 

export default () => {
  const store = createStore(
    combineReducers({
      //Add in reducers 
      //expenses: expensesReducer
    })
  );

  return store;
}

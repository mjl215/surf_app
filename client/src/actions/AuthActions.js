import * as action_types from './action_types';
import axios from 'axios';
import jwtDecode from 'jwt-decode';


export const registerUser = (body, config) => async dispatch => {
  try {
    const res = await axios.post('/users', body, config);
    localStorage.setItem('token', JSON.stringify(res.data.token))

    const decoded = jwtDecode(res.data.token);

    dispatch({
      type: action_types.SET_CURRENT_USER,
      data: decoded
    })
  } catch (error) {
    console.log('there has been an error registering: ' + error)
  }
}

export const loginUser = (body, config) => async dispatch => {
  try {
    const res = await axios.post('/users/login', body, config);
    localStorage.setItem('token', JSON.stringify(res.data.token))

    const decoded = jwtDecode(res.data.token)

    dispatch({
      type: action_types.SET_CURRENT_USER,
      data: decoded
    })
  } catch (error) {
    console.log('there has been an erro: ' + error)
  }
}

export const logoutUser = (config) => async dispatch => {
  
  try {
    await axios.post('/users/logout', null, config)

    dispatch({
      type: action_types.LOGOUT_USER,
    })
  } catch (error) {
    console.log(error)
  }
}

export const setUser = (config) => async dispatch => {
  try {

    const res = await axios.post('/users/auth', null, config);
    const decoded = jwtDecode(res.data.token) 
    
    dispatch({
      type: action_types.SET_CURRENT_USER,
      data: decoded
    })
  } catch (error) {
    
    dispatch({
      type: action_types.CLEAR_USER
    })
  }
}


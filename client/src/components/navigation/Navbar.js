import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { logoutUser } from '../../actions/AuthActions'

const time = moment().format('MMM Do H:mm');

const Navbar = ({authState, logoutUser}) => {

  const onClick = async () => {
    console.log('hi')
    try {

      const token = JSON.parse(localStorage.getItem('token'));
      
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }

      console.log(config)
      
      logoutUser(config)

    } catch (error) {
      console.log(error)
    }

  }
  

  const authLinks = (
    <ul className="navbar__list">
      <li className="navbar__list__item"><Link className="navbar__list__link" to="/">Home</Link></li>
      <li className="navbar__list__item"><Link className="navbar__list__link" to="/post">Posts</Link></li>
      <li className="navbar__list__item navbar__list__link" onClick={onClick}>logout</li>
    </ul>
    
  );

  const guestLinks = (
    <ul className="navbar__list">
      <li className="navbar__list__item"><Link className="navbar__list__link" to="/">Home</Link></li>
      <li className="navbar__list__item"><Link className="navbar__list__link" to="/login">Login</Link></li>
      <li className="navbar__list__item"><Link className="navbar__list__link" to="/register">Register</Link></li>
    </ul>
    
  )

  return (
    <div className="navbar">
      <div className="navbar__title__container">
        <h1 className="navbar__title">Surf Forecast and Trip Planner</h1>
        <h2 className="navbar__time">{time}</h2>
      </div>
      {authState.isAuthenticated ? authLinks : guestLinks}
    </div>
  )
}


const mapStateToProps =(state) => ({
  authState: state.authReducer
})

const mapDispatchToProps = (dispatch) => ({
  logoutUser: (header) => dispatch(logoutUser(header))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
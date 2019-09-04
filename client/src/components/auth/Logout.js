import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import axios from 'axios';

import { logoutUser } from '../../actions/AuthActions'

class Logout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false
    }
  }

  onClick = async () => {

    try {

      const token = JSON.parse(localStorage.getItem('token'));
      
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }

      console.log(config)
      
      this.props.logoutUser(config)

    } catch (error) {
      console.log(error)
    }

  }

  render() {
    return (
      <div>
        <h1>Logout</h1>
        <button onClick={() => this.onClick()}>Logout</button>
      </div>
    )
  }
}

Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  authState: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  authState: state.authReducer
})

const mapDispatchToProps = (dispatch) => ({
  logoutUser: (header) => dispatch(logoutUser(header))
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

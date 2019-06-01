import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

  onClick = async () => {
    console.log('test');

    try {
      const user = {
        email: 'orxa@gmail.com',
        password: '1234DO*'
      }

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const body = JSON.stringify(user);

      const res = await axios.post('/users/login', body, config);
      console.log(res);
      localStorage.setItem('token', JSON.stringify(res.data.token));

    } catch (error) {
      console.log('error')
    }

  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <button onClick={() => this.onClick()}>test</button>
      </div>
    )
  }
}

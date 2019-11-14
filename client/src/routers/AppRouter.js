import React, { useEffect }from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setUser } from '../actions/AuthActions'

import LandingPage from '../components/navigation/LandingPage';
import PostDashboard from '../components/posts/PostDashboard';
import Navbar from '../components/navigation/Navbar';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register'
import DetailedForecast from '../components/forecast/DetailedForecast';

import PrivateRoute from '../components/common/PrivateRoute';


const AppRouter = (props) => {
  
 

  useEffect(() => {

      const token = JSON.parse(localStorage.getItem('token'));
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }

      props.setUser(config)
    

      
    
    
  }, [props])

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <PrivateRoute exact path='/post' component={PostDashboard} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/forecast/:location' component={DetailedForecast} />
        </Switch>
      </div>
    </Router>
  );
}

const mapDispactchToProps = (dispatch) => ({
  setUser: (data) => dispatch(setUser(data))
})

export default connect(undefined, mapDispactchToProps)(AppRouter);
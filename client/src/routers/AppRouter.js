import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Register from './components/auth/Register';
import Login from '../components/auth/Login';
import Graph from '../components/data/Graph';
import Navbar from '../components/layout/Navbar';
import LandingPage from '../components/layout/LandingPage';
import SensorPage from '../components/data/SensorPage';
import PageNotFound from '../components/layout/PageNotFound';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={LandingPage}></Route>
        <Switch>
          <Route exact path='/sensors' component={SensorPage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/graph' component={Graph} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
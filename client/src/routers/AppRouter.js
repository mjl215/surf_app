import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from '../components/LandingPage';


const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
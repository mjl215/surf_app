import React, { Fragment } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const time = moment().format('MMM Do H:m');
console.log(time);

function Navbar() {



  return (
    <Fragment>
      <h1>Reporting App</h1>
      <h3>{time}</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sensors">Sensors</Link></li>
        <li><Link to="/graph">Graphs</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </Fragment>
  )
}

export default Navbar;
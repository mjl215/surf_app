import React from 'react'

const GetAlerts = (props) => {
  return (
    <div>
      <h1>Get Alerts</h1>
      <button onClick={props.onClick}>Get alerts</button>
    </div>
  )
}

export default GetAlerts;
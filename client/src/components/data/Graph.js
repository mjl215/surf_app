import React, { Component } from 'react';
import GetAlerts from './GetAlerts';
import GraphImage from './GraphImage';


import axios from 'axios';
class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
      graphData: [
        { severity: 1, frequency: 13 },
        { severity: 2, frequency: 16 },
        { severity: 3, frequency: 4 }
      ]
    }
  }

  onClick = async () => {
    const token = JSON.parse(localStorage.getItem('token'));

    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      const res = await axios.get('/alerts', config);
      console.log(res);
      this.setState(() => {
        return { data: res.data }
      })
    } catch (error) {
      console.log(error);
    }
  }

  onCreateGraph = () => {
    //Object.values(this.state.data);
    const param = "severity";
    const graphArr = []
    const array = this.state.data.map((alert) => {
      return alert[param];
    });

    console.log(array);

  }

  render() {
    return (
      <div>
        <GetAlerts onClick={this.onClick} />
        <h1>Graph</h1>
        <GraphImage
          data={this.state.graphData}
        />
        <button onClick={() => this.onCreateGraph()}>make graph</button>
      </div>
    )
  }
}

export default Graph;
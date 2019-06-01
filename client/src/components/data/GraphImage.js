import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';



export default function GraphImage(props) {
  return (
    <div style={{ width: '30%' }}>
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickValues={[1, 2, 3]}
          tickFormat={["Severity 1", "Severity 2", "Severity 3"]} />
        <VictoryBar
          data={props.data}
          x="severity"
          y="frequency"
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (x)}
        />
      </VictoryChart>
    </div>

  )
}

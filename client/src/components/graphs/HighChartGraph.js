import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const HighChartGraph = (props) => {

    const {title, chartType, data, xAxisLabels, colors} = props;

    const options = {
        chart: {
            type: chartType,
            backgroundColor: '#E1F6F1'
        },
        title: {
          text: title,
          style: {
              "color" : "blue"
          }
        },
        xAxis: [
        {
            categories: xAxisLabels[0],
            title: {
                text: 'Time'
            }
        },
        {
            categories: xAxisLabels[1],
            offset: 50
        }
        ],
        yAxis: {
            title: {
                text: 'Wave Height (Ft)'
            }
        },
        series: [{
          data: data,
          //color: '#FF0000' 
        }],
      }

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default HighChartGraph;

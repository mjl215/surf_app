import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const HighChartGraph = (props) => {

    const {title, chartType, data, xAxisLabels, colors} = props;

    const options = {
        chart: {
            type: chartType,
            backgroundColor: 'white'
        },
        title: {
          text: title,
          style: {
              "color" : "black"
          }
        },
        xAxis: [
            {
                categories: xAxisLabels,
                title: {
                    text: 'Time'
                }
            }
        ],
        yAxis: {
            title: {
                text: 'Wave Height (Ft)'
            },
            gridLineColor: 'transparent'
        },
        series: [{
          data: data,
        }],
        plotOptions: {
            series : {
                pointPadding: -0.15
            }
        }
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

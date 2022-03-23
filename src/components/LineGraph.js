import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }  from 'react-chartjs-2'


function LineGraph(props) {
    return (
        <div style ={{
            width: 600 , height: 600
        }}>
            <Line datasetIdKey='id'
        data={{
          labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              id: 1,
              label: 'My data set',
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor:'rgba(75,192,192,0.4)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              pointHoverBorderColor: 'miter',
              pointBorderColor:'rgba(75,192,192,1)',
              pointBackgroundColor:'#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgb(75,192,192,1)',
              pointHoverBorderColor: 'rgb(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: props.yAxis

            }
          ],
        }} />
        </div>
    )
}

export default LineGraph;
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Population',
            data: [3, 0, 5, 1, 3, 10, 20],
            backgroundColor: ['rgba(140, 207, 255, 0.6)']
          }
        ]
      }
    };
  }

  render() {
    return (
      <div>
        <Line
          data={this.state.chartData}
          options={{
            legend: { display: false },
            scales: {
              yAxes: [
                {
                  ticks: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;

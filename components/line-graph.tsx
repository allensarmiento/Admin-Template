import classnames from 'classnames'
import Chart from 'chart.js/auto'
import React, { useEffect } from 'react'

/*
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

Alternatively,

import { Chart, ChartConfiguration, LineController, PointElement, LinearScale, Title } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
*/

const LineGraph = ({ labels, datasets, options }) => {
  const chartRef: React.RefObject<HTMLCanvasElement> = React.createRef()

  useEffect(() => {
    if (chartRef.current) {
      const myChartRef = chartRef.current?.getContext('2d')

      new Chart(myChartRef, {
        type: 'line',
        data: {
          labels,
          datasets,
        },
        options,
      })
    }
  }, [])

  return (
    <canvas id="myChart" ref={chartRef} />
  )
}

export default LineGraph

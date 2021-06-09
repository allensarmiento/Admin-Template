import Chart from 'chart.js/auto'
import React, { useEffect } from 'react'

const DoughnutChart = ({ labels, datasets }) => {
  const chartRef: React.RefObject<HTMLCanvasElement> = React.createRef()

  useEffect(() => {
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext('2d')

      new Chart(myChartRef, {
        type: 'doughnut',
        data: {
          labels,
          datasets,
        },
      })
    }
  }, [])

  return (
    <canvas id="myChart" ref={chartRef} />
  )
}

export default DoughnutChart

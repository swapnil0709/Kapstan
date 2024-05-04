/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { transformLineChartData } from '../../utils/formatData'

interface LineChartProps {
  data: any[]
  appData: any[]
}

const CustomLineChart: React.FC<LineChartProps> = ({ data, appData }) => {
  const transformedData = transformLineChartData(data, appData)
  console.log(transformedData)

  return (
    <LineChart width={500} height={300} data={transformedData}>
      <CartesianGrid stroke="#e8e8e8" horizontal={true} vertical={false} />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        dot={false}
        type="monotone"
        dataKey="tic-tac-toc"
        stroke="#6E27D5"
        strokeWidth={2}
      />
      <Line
        dot={false}
        type="monotone"
        dataKey="sudoku"
        stroke="#F39C12"
        strokeWidth={2}
      />
      <Line
        dot={false}
        type="monotone"
        dataKey="chess"
        stroke="#B88BFE"
        strokeWidth={2}
      />
    </LineChart>
  )
}

export default CustomLineChart

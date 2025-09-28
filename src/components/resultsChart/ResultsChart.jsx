import React from 'react'
import { Line, LineChart, XAxis, YAxis } from 'recharts'
 
const resultsData = [
  { "id": 1, "name": "Rahim", "physics": 75, "chemistry": 78, "math": 72 },
  { "id": 2, "name": "Karim", "physics": 72, "chemistry": 69, "math": 80 },
  { "id": 3, "name": "Salma", "physics": 60, "chemistry": 78, "math": 65 },
  { "id": 4, "name": "Nusrat", "physics": 67, "chemistry": 74, "math": 70 },
  { "id": 5, "name": "Hasan", "physics": 68, "chemistry": 81, "math": 85 },
  { "id": 6, "name": "Parvin", "physics": 52, "chemistry": 85, "math": 58 },
  { "id": 7, "name": "Jamal", "physics": 55, "chemistry": 60, "math": 58 },
  { "id": 8, "name": "Rafiq", "physics": 71, "chemistry": 76, "math": 84 },
  { "id": 9, "name": "Mitu", "physics": 74, "chemistry": 72, "math": 79 },
  { "id": 10, "name": "Sharif", "physics": 68, "chemistry": 80, "math": 66 }
];


const ResultsChart = () => {
  return (
    <div className='container mx-auto p-5'>

        <LineChart width={600} height={400} data={resultsData}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Line dataKey={"physics"} stroke='red'></Line>
            <Line dataKey={"chemistry"} stroke="green"></Line>
            <Line dataKey={"math"} ></Line>
        </LineChart>

    </div>
  )
}

export default ResultsChart
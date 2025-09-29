import React, { use } from 'react'
import { Area, Bar, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const MarksData = ({marksPromise}) => {

   const marksDataRes = use(marksPromise);

   // axios sob somoy amader data provite kore tai amader pouwa data k sob axios data te convart korte hoy.
    const marksData = marksDataRes.data;
 console.log(marksData);
   
   // data prosscesing for the chart 

   const marksChartData = marksData.map( studentData => {
    const student = {
        id: studentData.student_id,
        name : studentData.name,
        physics : studentData.marks.physics,
        chemistry: studentData.marks.chemistry,
        math : studentData.marks.math
    };

    // kuno number k jug kore averice ber korar niyom
    const avg = (student.chemistry + student.physics + student.math) /4;
    student.avg = avg;

   return student;
   });
  console.log(marksChartData);
    
  return (
    <div className='mt-4'>

        <ComposedChart width={800} height={400} data={marksChartData}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Area dataKey={'math'} stroke='red'></Area>
            <Bar dataKey={'math'} stroke='red' fill='red'></Bar>
            <Bar dataKey={'physics'} fill='yellow'></Bar>
            <Bar dataKey={'chemistry'} stroke='green'></Bar>
            <Line dataKey={'chemistry'} stroke='green'></Line>
            <Line dataKey={'physics'}></Line>
            <Line dataKey={'math'} stroke='red' ></Line>
            <Line dataKey={'avg'} stroke='black'></Line>
        </ComposedChart>

    </div>
  )
};

export default MarksData
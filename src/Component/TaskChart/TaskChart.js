import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';



const TaskChart = ({ rows }) => {
    const data = [
        {hour: '0', minutes: 0, },
        {hour: '1', minutes: 0, },
        {hour: '2', minutes: 0, },
        {hour: '3', minutes: 0, },
        {hour: '4', minutes: 0, },
        {hour: '5', minutes: 0, },
        {hour: '6', minutes: 0, },
        {hour: '7', minutes: 0, },
        {hour: '8', minutes: 0, },
        {hour: '9', minutes: 0, },
        {hour: '10', minutes: 14, },
        {hour: '11', minutes: 60, },
        {hour: '12', minutes: 60, },
        {hour: '13', minutes: 23, },
        {hour: '14', minutes: 0, },
        {hour: '15', minutes: 0, },
        {hour: '16', minutes: 0, },
        {hour: '17', minutes: 0, },
        {hour: '18', minutes: 0, },
        {hour: '19', minutes: 0, },
        {hour: '20', minutes: 0, },
        {hour: '21', minutes: 0, },
        {hour: '22', minutes: 0, },
        {hour: '23', minutes: 0, },
    ];
        return <BarChart width={1250} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid stroke='#f5f5f5'/>
        <XAxis dataKey="hour"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="minutes" name="Minutes in the hours" fill="#344dc4"/>
    </BarChart>

}


export default TaskChart



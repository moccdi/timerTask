import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';



const TaskChart = ({ rows }) => {

    let timeStart = new Date(rows.timeStart)
    let timeSpend = new Date(rows.timeSpend)
    let data = []
    let nowHours2;
    let nexHours;
    let time;
    let nowMinutes;
    let nowHours;
    for (let i = 0; i < 24; i++) {
        let oneHour;
        if(i === timeStart.getHours()){
            if(timeSpend.getHours() < 1 ){
                let minutes = 60 - timeStart.getMinutes()
                if( minutes > timeSpend.getMinutes()){
                    oneHour = {hour: i, minutes: timeSpend.getMinutes()};
                }
                if( minutes < timeSpend.getMinutes()){
                    oneHour = {hour: i, minutes: minutes};
                    nowMinutes = timeSpend.getMinutes() - minutes
                    nowHours2 = i + 1;
                }
            }
            if(timeSpend.getHours() >= 1 ){
                let minutes = 60 - timeStart.getMinutes()
                oneHour = {hour: i, minutes: minutes};
                time = new Date(timeSpend - (minutes * 60000))
                nexHours = time.getHours() - 1;
                nowHours = i + 1
                nowMinutes = time.getMinutes() // 3
            }
        } else if(i === nowHours2){
            oneHour = {hour: i, minutes:  nowMinutes};

        } else if(i === nowHours && nexHours >= 1){
            nexHours = nexHours - 1
            nowHours = nowHours + 1
            oneHour = {hour: i, minutes: 60};
        } else if(i === nowHours && nexHours === 0){
            oneHour = {hour: i, minutes: nowMinutes};
        }
        else {
            oneHour = {hour: i, minutes: 0,};
        }
        data.push(oneHour)
    }
   return <BarChart width={1250}
                    height={300}
                    data={data}
                    margin={{top: 20, right: 30, left: 0, bottom: 5}}>
        <CartesianGrid stroke='#f5f5f5'/>
        <XAxis dataKey="hour"/>
        <YAxis/>
        <Tooltip />
        <Legend/>
        <Bar dataKey="minutes" name="Minutes in the hours" fill="#344dc4"/>
    </BarChart>




}


export default TaskChart



import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';



const TaskChart = ({  rows}) => {

    // timeStart: "12:27",
    //     timeEnd: "16:31",
    //     timeSpend: "04:04:",
    // let timeStart = new Date(70, 0,0,11,51,57)
    // let timeEnd = new Date(70, 0,0,11,53,51 )
    // let timeSpend = new Date(new Date(70, 0,0,12,33,51 ) - new Date(70, 0,0,11,51,57  ) -10800000)
    // const table = []
    // function initialTable(){
    //     const table = []
    //     let minutesNextHour;
    //     let NewI;
    //     for (let i = 0; i < 24; i++) {
    //         let children;
    //         if(i === timeStart.getHours()){
    //             if(timeSpend.getHours() < 1 ){
    //                 let minutes = 60 - timeStart.getMinutes()
    //                 if( minutes > timeSpend.getMinutes()){
    //                     children = {hour: i, minutes: timeSpend.getMinutes()};
    //                 }
    //                 if( minutes < timeSpend.getMinutes()){
    //                     children = {hour: i, minutes: minutes};
    //                     minutesNextHour = timeSpend.getMinutes() - minutes
    //                     NewI = i + 1;
    //                 }
    //             }
    //
    //             if(timeSpend.getHours() < 1 ){
    //
    //             }
    //         }
    //         if(i === timeStart.getHours()){
    //
    //         }
    //         else {
    //             children = {hour: i, minutes: 0,};
    //         }
    //         table.push(children)
    //     }
    //     return table
    // };
    // // timeStart: "09:51:57",
    // //     timeEnd: "12:33:38",
    // //     timeSpend: "03:41:41",
    // console.log(table)
    // 09:51:57 11:53:38 02:01:41
    // console.log(rows.timeStart.substring(0,2), rows.timeEnd ,rows.timeSpend)
    // console.log(Number(rows.timeStart.substring(0,2)))
    // timeStart: "09:51:57",
    //     timeEnd: "11:53:38",
    //     timeSpend: "02:01:41",
    //console.log(new Date(70, 0,0,9,51,57 ).getHours())
    // console.log(new Date(new Date(70, 0,0,11,53,51 ) - new Date(70, 0,0,9,51,57  ) -10800000).toLocaleTimeString())
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
        <Tooltip />
        <Legend/>
        <Bar dataKey="minutes" name="Minutes in the hours" fill="#344dc4"/>
    </BarChart>




}


export default TaskChart



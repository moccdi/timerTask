import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './TableTask.scss'
import {Button, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

const cx = classNames.bind(styles)


const TaskPage = ({ rows, history }) => {
    function returnHomePage() {
        history.push(`/`);
    }
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
                nexHours = time.getHours();
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
    return <div className={cx('taskPage')}>
        <Button onClick={(returnHomePage)} className={cx('returnButton')}>
            return Table
        </Button>
        <Paper className={cx('paperClass')}>
            <Table>
                <TableHead>
                    <TableRow className={cx('tableHead')}>
                        <TableCell>№</TableCell>
                        <TableCell >Task</TableCell>
                        <TableCell >Time start</TableCell>
                        <TableCell >Time end</TableCell>
                        <TableCell >Time spend</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={rows.id} className={cx('tableBody')}>
                        <TableCell component="th" scope="row"
                                   className={cx('tableCell')}>{rows.id}</TableCell>
                        <TableCell className={cx('tableCell')}>{rows.task}</TableCell>
                        <TableCell className={cx('tableCell')}>{new Date(rows.timeStart).toLocaleTimeString()}</TableCell>
                        <TableCell className={cx('tableCell')}>{new Date(rows.timeEnd).toLocaleTimeString()}</TableCell>
                        <TableCell className={cx('tableCell')}>{new Date(rows.timeSpend).toLocaleTimeString()}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>

        <BarChart width={1250}
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
    </div>
}


export default TaskPage

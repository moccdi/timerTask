import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './TableTask.scss'
import {Button, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

const cx = classNames.bind(styles)


const TaskPage = ({ row, data, changeTaskPage }) => (
    <div className={cx('taskPage')}>
        <Button onClick={() => changeTaskPage('return')} className={cx('returnButton')}>
            return Table
        </Button>
        <Paper className={cx('paperClass')}>
            <Table>
                <TableHead>
                    <TableRow className={cx('tableHead')}>
                        <TableCell>№</TableCell>
                        <TableCell>Task</TableCell>
                        <TableCell>Time start</TableCell>
                        <TableCell>Time end</TableCell>
                        <TableCell>Time spend</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={row.id} className={cx('tableBody')}>
                        <TableCell component="th" scope="row"
                                   className={cx('tableCell')}>{row.id}</TableCell>
                        <TableCell className={cx('tableCell')}>{row.task}</TableCell>
                        <TableCell
                            className={cx('tableCell')}>{new Date(row.timeStart).toLocaleTimeString()}</TableCell>
                        <TableCell className={cx('tableCell')}>{new Date(row.timeEnd).toLocaleTimeString()}</TableCell>
                        <TableCell
                            className={cx('tableCell')}>{new Date(row.timeSpend).toLocaleTimeString()}</TableCell>
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
            <Tooltip/>
            <Legend/>
            <Bar dataKey="minutes" name="Minutes in the hours" fill="#344dc4"/>
        </BarChart>
    </div>
)


export default TaskPage
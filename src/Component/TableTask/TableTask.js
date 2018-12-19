import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './TableTask.scss'
import {Button, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";

const cx = classNames.bind(styles)


const TableTask = ({ rows, deleteTask, history, match, changeTaskPage }) => {
    function taskDomain() {
        history.push(`${match.url}/sell2`);
    }
    return <Paper className={cx('paperClass')}>
        <Table>
            <TableHead>
                <TableRow className={cx('tableHead')}>
                    <TableCell>№</TableCell>
                    <TableCell numeric>Task</TableCell>
                    <TableCell numeric>Time start</TableCell>
                    <TableCell numeric>Time end</TableCell>
                    <TableCell numeric>Time spend</TableCell>
                    <TableCell numeric>Info</TableCell>
                    <TableCell numeric>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(row => {
                    return (
                        <TableRow key={row.id} className={cx('tableBody')}>
                            <TableCell component="th" scope="row"
                                       className={cx('tableCell')}>{row.id}</TableCell>
                            <TableCell numeric className={cx('tableCell')}>{row.task}</TableCell>
                            <TableCell numeric className={cx('tableCell')}>{row.timeStart}</TableCell>
                            <TableCell numeric className={cx('tableCell')}>{row.timeEnd}</TableCell>
                            <TableCell numeric className={cx('tableCell')}>{row.timeSpend}</TableCell>
                            <TableCell numeric className={cx('tableCell')}>
                                <Button
                                    variant="contained"
                                    className={cx('buttonStop')}
                                    onClick={() => changeTaskPage(row.id, history)}
                                > INFO
                                </Button>
                            </TableCell>
                            <TableCell numeric className={cx('tableCell')}>
                                <Button
                                    variant="contained"
                                    className={cx('buttonStop')}
                                    onClick={() => deleteTask(row.id)}
                                > DELETE
                                </Button>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </Paper>
}


export default TableTask

import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './TableTask.scss'
import {Button, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";

const cx = classNames.bind(styles)


const TaskPage = ({ rows, history }) => {
    function returnHomePage() {
        history.push(`/`);
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
                        <TableCell numeric>Task</TableCell>
                        <TableCell numeric>Time start</TableCell>
                        <TableCell numeric>Time end</TableCell>
                        <TableCell numeric>Time spend</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={rows.id} className={cx('tableBody')}>
                        <TableCell component="th" scope="row"
                                   className={cx('tableCell')}>{rows.id}</TableCell>
                        <TableCell numeric className={cx('tableCell')}>{rows.task}</TableCell>
                        <TableCell numeric className={cx('tableCell')}>{rows.timeStart}</TableCell>
                        <TableCell numeric className={cx('tableCell')}>{rows.timeEnd}</TableCell>
                        <TableCell numeric className={cx('tableCell')}>{rows.timeSpend}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    </div>
}


export default TaskPage

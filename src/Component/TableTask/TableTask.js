import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import {
  Button, Paper, Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core'
import styles from './TableTask.scss'

const cx = classNames.bind(styles)


const TableTask = ({
  rows, deleteTask, changeTaskPage, generateNewRows,
}) => {
  let rowsLength = 1
  return (
    <div className={cx('tableTask')}>
      <Paper className={cx('paperClass')}>
        <Table>
          <TableHead>
            <TableRow className={cx('tableHead')}>
              <TableCell>№</TableCell>
              <TableCell>Task</TableCell>
              <TableCell>Time start</TableCell>
              <TableCell>Time end</TableCell>
              <TableCell>Time spend</TableCell>
              <TableCell>Info</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { rows.map(row => {
              const taskPage = rowsLength
              return (
                <TableRow key={row.id} className={cx('tableBody')}>
                  <TableCell
                    component='th'
                    scope='row'
                    className={cx('tableCell')}
                  >
                    {rowsLength++}
                  </TableCell>
                  <TableCell className={cx('tableCell')}>{ row.task }</TableCell>
                  <TableCell
                    className={cx('tableCell')}
                  >
                    { new Date(row.timeStart).toLocaleTimeString() }
                  </TableCell>
                  <TableCell
                    className={cx('tableCell')}
                  >
                    { new Date(row.timeEnd).toLocaleTimeString() }
                  </TableCell>
                  <TableCell
                    className={cx('tableCell')}
                  >
                    { new Date(row.timeSpend).toLocaleTimeString() }
                  </TableCell>
                  <TableCell className={cx('tableCell')}>
                    <Button
                      variant='contained'
                      className={cx('buttonTable')}
                      onClick={() => changeTaskPage(taskPage)}
                    >
                      { ' ' }
                      INFO
                    </Button>
                  </TableCell>
                  <TableCell className={cx('tableCell')}>
                    <Button
                      variant='contained'
                      className={cx('buttonTable')}
                      onClick={() => deleteTask(row.id, rows)}
                    >
                      { ' ' }
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              )
            }) }
          </TableBody>
        </Table>
      </Paper>
      <Button
        variant='contained'
        className={cx('generate')}
        onClick={generateNewRows}
      >
        GENERATE
      </Button>
    </div>
  )
}
export default TableTask

TableTask.propTypes = {
  rows: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  changeTaskPage: PropTypes.func.isRequired,
  generateNewRows: PropTypes.func.isRequired,
}

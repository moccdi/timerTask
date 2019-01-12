import React from 'react'
import PropTypes from 'prop-types'
import './reset.css'
import classNames from 'classnames'
import {
  AppBar, Button, Tab, Tabs, TextField,
} from '@material-ui/core'
import { Route, Switch, Redirect } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import styles from './App.scss'
import TaskPage from '../TaskPage'
import NodFound from '../NodFound/NodFound'
import TaskChart from '../TaskChart'
import TableTask from '../TableTask/TableTask'

const cx = classNames.bind(styles)


const App = ({
  history, initialState, deleteTask, startTimeHandlers, closeModal, changeName, genetateNewRows, handleChange, changeTaskPage,
}) => {
  const {
    date, buttonState, nameTask, modalOpen, TabContainerOpen, taskPage, rows,
  } = initialState
  return (
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route
            path={`/TaskPage/${taskPage}`}
            render={props => (
              <TaskPage {...props} row={rows[taskPage - 1]} changeTaskPage={changeTaskPage} />)}
          />
          <Route
            path='/'
            render={() => (
              <div className={cx('container')}>
                {modalOpen && (
                  <div className={cx('modalWindow')}>
                    <div className={cx('modalBlock')}>
                      <h2>Empty task name</h2>
                      <span>You are tryning close your task without name, enter the title and try again!</span>
                      <button
                        onClick={closeModal}
                      >
                      CLOSE
                      </button>
                    </div>
                  </div>
                )}
                <TextField
                  id='standard-dense'
                  label='Name of your task'
                  className={cx('standard-dense')}
                  value={nameTask}
                  onChange={changeName}
                />
                <div className={cx('timerCircle')}>
                  <span>{date.toLocaleTimeString()}</span>
                </div>
                <Button
                  variant='contained'
                  className={cx('buttonStop')}
                  onClick={startTimeHandlers}
                >
                  {buttonState ? 'START' : 'STOP'}
                </Button>
                <AppBar position='static' className={cx('AppBar')}>
                  <Tabs
                    variant='fullWidth'
                    value={TabContainerOpen}
                    className={cx('tabsClass')}
                    onChange={(event, value) => handleChange(value)}
                  >
                    <Tab label='TASKS LOG' />
                    <Tab label='TASKS CHART' />
                  </Tabs>
                </AppBar>
                <Switch>
                  <Route
                    exact
                    path='/'
                    render={props => (
                      <TableTask
                        {...props}
                        deleteTask={deleteTask}
                        genetateNewRows={genetateNewRows}
                        changeTaskPage={changeTaskPage}
                        rows={rows}
                      />
                    )}
                  />
                  <Route
                    exact
                    path='/TaskChart'
                    render={props => (
                      <TaskChart
                        {...props}
                        row={rows[taskPage - 1]}
                      />
                    )}
                  />
                  <Route component={NodFound} />
                </Switch>
              </div>
            )}
          />
          <Route component={NodFound} />
          <Redirect to='/NodFound' />
        </Switch>
      </div>
    </ConnectedRouter>
  )
}
export default App


App.propTypes = {
  initialState: PropTypes.object,
  deleteTask: PropTypes.func.isRequired,
  startTime: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  genetateNewRows: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  changeTaskPage: PropTypes.func.isRequired,
  startTimeHandlers: PropTypes.func.isRequired,
}

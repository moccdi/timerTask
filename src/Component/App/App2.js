import React from 'react';
import './reset.css'
import classNames from 'classnames';
import styles from './App.scss'

import TaskPage from "./App";
import {AppBar, Button, Tab, Tabs, TextField} from "@material-ui/core";
import NodFound from "../NodFound/NodFound";
import TaskChart2 from "../TaskChart";
import TableTask2 from "../TableTask/TableTask2";
import {Route, Switch} from 'react-router'
import {ConnectedRouter} from 'connected-react-router'


const cx = classNames.bind(styles)


const App2 = ({initialState, deleteTask, startTimeHandlers, closeModal, changeName, genetateNewRows, handleChange, history}) => {
    const {date, buttonState, nameTask, modalOpen, TabContainerOpen, taskPage, rows} = initialState
    return <ConnectedRouter history={history}>
        <div>
            <Switch>
                <Route path={`/TaskPage/${taskPage}`} render={(props) => (
                    <TaskPage {...props} rows={rows[taskPage - 1]}/>)}/>
                <Route path="/" render={(props) => (
                    <div className={cx('container')}>
                        {modalOpen && <div className={cx('modalWindow')}>
                            <div className={cx('modalBlock')}>
                                <h2>Empty task name</h2>
                                <span>You are tryning close your task without name, enter the title and try again!</span>
                                <button
                                    onClick={closeModal}
                                >
                                    CLOSE
                                </button>
                            </div>
                        </div>}
                        <TextField
                            id="standard-dense"
                            label="Name of your task"
                            className={cx('standard-dense')}
                            value={nameTask}
                            onChange={changeName}
                        />
                        <div className={cx('timerCircle')}>
                            <span>{date.toLocaleTimeString()}</span>
                        </div>
                        <Button
                            variant="contained"
                            className={cx('buttonStop')}
                            onClick={startTimeHandlers}
                        >
                            {buttonState ? "START" : "STOP"}
                        </Button>
                        <AppBar position="static" className={cx('AppBar')}>
                            <Tabs
                                fullWidth
                                value={TabContainerOpen}
                                className={cx('tabsClass')}
                                onChange={(event, value) => handleChange(props, event, value)}
                            >
                                <Tab label="TASKS LOG"/>
                                <Tab label="TASKS CHART"/>
                            </Tabs>
                        </AppBar>
                        <Switch>
                            <Route exact path="/" render={(props) => {
                                return <TableTask2 {...props}
                                                   deleteTask={deleteTask}
                                                   genetateNewRows={genetateNewRows}
                                                   rows={rows}
                                />
                            }}/>
                            <Route exact path="/TaskChart" render={(props) => {
                                return <TaskChart2 {...props}
                                                   row={rows[taskPage - 1]}/>
                            }}/>
                        </Switch>
                    </div>
                )}/>
                <Route component={NodFound}/>
            </Switch>
        </div>
    </ConnectedRouter>
}
export default App2

//localStorage.clear()

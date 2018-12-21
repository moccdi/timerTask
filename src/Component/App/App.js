import React, { Component } from 'react';
import './reset.css'
import classNames from 'classnames';
import styles from './App.scss'
import TableTask from "../TableTask/TableTask";

import { TextField, Button, AppBar, Tabs, Tab,} from '@material-ui/core';
import {BrowserRouter as Router, NavLink, Route, Switch,Redirect} from 'react-router-dom';

// import createBrowserHistory from "history/createBrowserHistory"
// const history = createBrowserHistory();

import NodFound from "../NodFound/NodFound";
import TaskChart from "../TaskChart/TaskChart";
import Link from "react-router-dom/es/Link";
import TaskPage from "../TaskPage/TaskPage";





const cx = classNames.bind(styles)


export default class App extends Component {
    state = {
        date: new Date(70, 0),
        dataStart: null,
        nameTask: "",
        TabContainerOpen: 0,
        modalOpen: false,
        buttonState: true,
        taskPage: null,
        rows: [{
            id: 1,
            task: "lorem ipsum d...",
            timeStart: "1969-12-31T08:28:14.000Z",
            timeEnd: "1969-12-31T08:31:23.000Z",
            timeSpend: "1969-12-30T21:03:08.000Z",
        },
        {
            id: 2,
            task: "long task",
            timeStart: "1969-12-31T06:51:57.000Z",
            timeEnd: "1969-12-31T08:53:38.000Z",
            timeSpend: "1969-12-30T23:02:41.000Z",
        },
        {
            id: 3,
            task: "some new",
            timeStart: "1969-12-31T09:39:51.000Z",
            timeEnd: "1969-12-31T09:39:51.000Z",
            timeSpend: "1969-12-30T21:06:28.000Z",
        },
        {
            id: 4,
            task: "last one task",
            timeStart: "1969-12-31T09:50:20.000Z",
            timeEnd: "1969-12-31T09:50:53.000Z",
            timeSpend: "1969-12-30T21:08:53.000Z",
        }]
    };

    tick = () => {
        this.setState({
            date:  new Date(this.state.date.getTime() + 1000),
        });

        // localStorage.setItem( "date", new Date( new Date() - this.state.dataStart -10800000));
        // console.log(new Date( new Date() - this.state.dataStart -10800000).toLocaleTimeString())
    }
    componentWillMount() {
        let localStorageState = localStorage.getItem("localStorageState");
        let localState = localStorage.getItem("state");
        if(localStorageState === "run") {
            this.setState(prevState => ({
                date: new Date(new Date() - new Date(JSON.parse(localState).dataStart) - 10800000),
                dataStart: new Date(JSON.parse(localState).dataStart),
                nameTask: JSON.parse(localState).nameTask,
                TabContainerOpen: JSON.parse(localState).TabContainerOpen,
                modalOpen: JSON.parse(localState).modalOpen,
                buttonState: JSON.parse(localState).buttonState,
                rows: JSON.parse(localState).rows,
                taskPage: JSON.parse(localState).taskPage,
            }))
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }
        if(localStorageState === "finish"){
            this.setState((prevState) => ({
                rows: JSON.parse(localState).rows,
                TabContainerOpen: JSON.parse(localState).TabContainerOpen,
            }))
        }

    }
    startTime = () =>{
        const {  dataStart, nameTask, buttonState, rows, } = this.state;
        if(buttonState) {
            this.setState({
                buttonState: !buttonState,
                dataStart: new Date(),
            });
            localStorage.setItem("state", JSON.stringify(
                { ...this.state,
                            buttonState: !buttonState,
                            dataStart: new Date(),
                      }));
            localStorage.setItem("localStorageState", "run");
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }
        if(!nameTask && !buttonState){
            this.closeModal()
        }
        if(nameTask && !buttonState) {
            clearTimeout(this.timerID)
            const newRows =  [...rows,{
                id: rows[rows.length - 1].id + 1,
                task: nameTask,
                timeStart: dataStart,
                timeEnd: new Date(),
                timeSpend: this.state.date,
            }]
            this.setState({
                date: new Date(70, 0),
                buttonState: !buttonState,
                nameTask: "",
                rows: newRows,
            });
            localStorage.setItem("localStorageState", "finish");
            localStorage.setItem("state", JSON.stringify(
                { ...this.state,
                    date: new Date(70, 0),
                    buttonState: !buttonState,
                    nameTask: "",
                    rows: newRows
                }));
        }
    }
    deleteTask = (id) => {
        const { rows, } = this.state;
        const newRows = rows.filter(arrIndex => arrIndex.id !== id)
        this.setState({rows: newRows})
        localStorage.setItem("state", JSON.stringify( { ...this.state, rows: newRows}));
    }
    closeModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen});
        localStorage.setItem("state", JSON.stringify( { ...this.state, modalOpen: !this.state.modalOpen}));
    }
    handleChange = (props, event, value) => {
        if(value === 0){
            props.history.push('/');
        }
        if(value === 1){
            props.history.push('/TaskChart');
        }
        this.setState({ TabContainerOpen: value });
        localStorage.setItem("state", JSON.stringify( { ...this.state, TabContainerOpen: value}));
    }
    changeName = ({target}) => {
        this.setState({ nameTask: target.value});
        localStorage.setItem("state", JSON.stringify( { ...this.state, nameTask: target.value}));
    }
    changeTaskPage = (idTask, history) => {
        this.setState({ taskPage: idTask})
        localStorage.setItem("state", JSON.stringify( { ...this.state, taskPage: idTask}));
        localStorage.setItem("localStorageState", "run");
        history.push(`/TaskPage/${idTask}`);
    }
    render() {
        const { date, rows, buttonState, nameTask, modalOpen, TabContainerOpen, taskPage } = this.state;
        return (
            <div>
            <Switch>
                <Route path={`/TaskPage/${taskPage}`} render={(props) => (
                    <TaskPage {...props} rows={rows[taskPage -1]} />)}/>
                    <Route path="/" render={(props) => (
                    <div className={cx('container')}>
                        {modalOpen && <div className={cx('modalWindow')}>
                            <div className={cx('modalBlock')}>
                                <h2>Empty task name</h2>
                                <span>You are tryning close your task without name, enter the title and try again!</span>
                                <button
                                    onClick={this.closeModal}
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
                            onChange={this.changeName}
                        />
                        <div className={cx('timerCircle')}>
                            <span>{date.toLocaleTimeString()}</span>
                        </div>
                        <Button
                            variant="contained"
                            className={cx('buttonStop')}
                            onClick={this.startTime}
                        >
                            {buttonState ? "START" : "STOP"}
                        </Button>
                        <AppBar position="static" className={cx('AppBar')}>
                            <Tabs
                                fullWidth
                                value={TabContainerOpen}
                                onChange={(event, value) => this.handleChange(props, event, value)}

                                className={cx('tabsClass')}
                                indicator={cx('indicatorClass')}
                                TabIndicatorProps={cx('indicatorClass')}
                            >
                                <Tab label="TASKS LOG"/>
                                <Tab label="TASKS CHART"/>
                            </Tabs>
                        </AppBar>
                        <Switch>
                            <Route exact path="/" render={(props) => {
                                return <TableTask {...props} rows={rows}  deleteTask={this.deleteTask} changeTaskPage={this.changeTaskPage}/>
                            }}/>
                            <Route exact path="/TaskChart" render={(props) => {
                                return <TaskChart {...props} rows={rows[1]} />
                            }}/>
                        </Switch>
                    </div>
                )}/>
                <Route component={NodFound}/>
            </Switch>
            </div>
        )
    }
}
//localStorage.clear()


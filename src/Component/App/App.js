import React, { Component } from 'react';
import './reset.css'
import classNames from 'classnames';
import styles from './App.scss'
import TableTask from "../TableTask/TableTask";

import { TextField, Button, AppBar, Tabs, Tab,} from '@material-ui/core';
import { Route, Switch} from 'react-router-dom';
import NodFound from "../NodFound/NodFound";
import TaskChart from "../TaskChart/TaskChart";
import TaskPage from "../TaskPage/TaskPage";


const cx = classNames.bind(styles)


export default class App extends Component {
    state = {
        date: new Date(70, 0),
        dateStart: false,
        nameTask: "",
        TabContainerOpen: 0,
        modalOpen: false,
        buttonState: true,
        taskPage: 1,
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
            date: new Date(this.state.date.getTime() + 1000),
        });
    }
    componentWillMount() {
        let localState = localStorage.getItem("state");
        if(localState) {
            if (JSON.parse(localState).dateStart) {
                this.setState(prevState => ({
                    date: new Date(new Date() - new Date(JSON.parse(localState).dateStart) - 10800000),
                    dateStart: new Date(JSON.parse(localState).dateStart),
                    nameTask: JSON.parse(localState).nameTask,
                    TabContainerOpen: JSON.parse(localState).TabContainerOpen,
                    buttonState: JSON.parse(localState).buttonState,
                    rows: JSON.parse(localState).rows,
                    taskPage: JSON.parse(localState).taskPage,
                }))
                this.timerID = setInterval(
                    () => this.tick(),
                    1000
                );
            } else if (!JSON.parse(localState).dateStart) {
                this.setState((prevState) => ({
                    nameTask: JSON.parse(localState).nameTask,
                    TabContainerOpen: JSON.parse(localState).TabContainerOpen,
                    rows: JSON.parse(localState).rows,
                    taskPage: JSON.parse(localState).taskPage,
                }))
            }
        }
    }
    startTime = () =>{
        const { dateStart, nameTask, buttonState, rows } = this.state;
        if(buttonState) {
            this.setState({
                buttonState: !buttonState,
                dateStart: new Date(),
            });
            localStorage.setItem("state", JSON.stringify(
                { ...this.state,
                            buttonState: !buttonState,
                            dateStart: new Date(),
                      }));
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
            let newRows
            if(rows.length === 0){
                newRows =  [...rows,{
                    id: 1,
                    task: nameTask,
                    timeStart: dateStart,
                    timeEnd: new Date(),
                    timeSpend: this.state.date,
                }]
            } else {
               newRows =  [...rows,{
                    id: rows[rows.length - 1].id + 1,
                    task: nameTask,
                    timeStart: dateStart,
                    timeEnd: new Date(),
                    timeSpend: this.state.date,
                }]
            }
            this.setState({
                date: new Date(70, 0),
                dateStart: false,
                buttonState: !buttonState,
                nameTask: "",
                rows: newRows,
            });
            localStorage.setItem("state", JSON.stringify(
                { ...this.state,
                    date: new Date(70, 0),
                    dateStart: false,
                    buttonState: !buttonState,
                    nameTask: "",
                    rows: newRows
            }));
        }
    }
    deleteTask = (id) => {
        const { rows } = this.state;
        const newRows = rows.filter(arrIndex => arrIndex.id !== id)
        this.setState({
            rows: newRows,
        })
        localStorage.setItem("state", JSON.stringify(
            { ...this.state,
                    rows: newRows,
            }));
    }
    closeModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen});
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
    changeTaskPage = (taskPage, history,) => {
        this.setState({ taskPage: taskPage})
        localStorage.setItem("state", JSON.stringify( { ...this.state, taskPage: taskPage}));
        history.push(`/TaskPage/${taskPage}`);
    }
    genetateNewRows = () =>{
        function randomNumber(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;
        }
        let rowsLength = randomNumber(10, 15);
        let newRows = [];
        for (let i = 0; i < rowsLength; i++) {
            let minutes = randomNumber(0, 59);
            let hours = randomNumber(0, 23);

            let timeEnd = new Date(70, 0,0,hours,minutes)
            let timeSpendMinutes = randomNumber(1, 90);
            let timeSpend = new Date((timeSpendMinutes * 60000) -10800000)
            let timeStart = new Date(timeEnd - (timeSpendMinutes * 60000))
            let oneRow = {
                id: i,
                task: `task${i}`,
                timeStart: timeStart,
                timeEnd: timeEnd,
                timeSpend: timeSpend,
           }
            newRows.push(oneRow)
        }
        this.setState((prevState) => ({
            date: new Date(70, 0),
            dateStart: false,
            nameTask: "",
            TabContainerOpen: 0,
            modalOpen: false,
            buttonState: true,
            taskPage: 1,
            rows: newRows
        }))
    }
    render() {
        const { date, rows, buttonState, nameTask, modalOpen, TabContainerOpen, taskPage } = this.state;
        return (
            <Switch>
                <Route path={`/TaskPage/${taskPage}`} render={(props) => (
                    <TaskPage {...props} rows={rows[taskPage - 1]} />)}/>
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
                            >
                                <Tab label="TASKS LOG"/>
                                <Tab label="TASKS CHART"/>
                            </Tabs>
                        </AppBar>
                        <Switch>
                            <Route exact path="/" render={(props) => {
                                return <TableTask {...props}
                                                  rows={rows}
                                                  deleteTask={this.deleteTask}
                                                  changeTaskPage={this.changeTaskPage}
                                                  genetateNewRows={this.genetateNewRows}/>
                            }}/>
                            <Route exact path="/TaskChart" render={(props) => {
                                return <TaskChart {...props}
                                                  rows={rows[taskPage - 1]} />
                            }}/>
                        </Switch>
                        </div>
                    )}/>
                <Route component={NodFound}/>
            </Switch>

        )
    }
}
//localStorage.clear()


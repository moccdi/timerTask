import React, { Component } from 'react';
import './reset.css'
import classNames from 'classnames';
import styles from './App.scss'
import TableTask from "../TableTask/TableTask";

import { TextField, Button, AppBar, Tabs, Tab,} from '@material-ui/core';
import {BrowserRouter as Router, NavLink, Route, Switch,Redirect} from 'react-router-dom';

import createBrowserHistory from "history/createBrowserHistory"
import NodFound from "../NodFound/NodFound";
import TaskChart from "../TaskChart/TaskChart";
import Link from "react-router-dom/es/Link";

const history = createBrowserHistory();



const cx = classNames.bind(styles)


export default class App extends Component {
    state = {
        date: new Date(-10800000),
        dataStart: null,
        nameTask: "",
        TabContainerOpen: 0,
        modalOpen: false,
        buttonState: true,
        rows: [{
            id: 1,
            task: "lorem ipsum d...",
            timeStart: "11:28:14",
            timeEnd: "11:31:23",
            timeSpend: "00:03:08",
        },
        {
            id: 2,
            task: "long task",
            timeStart: "09:51:57",
            timeEnd: "11:53:38",
            timeSpend: "02:01:41",
        },
        {
            id: 3,
            task: "some new",
            timeStart: "12:39:51",
            timeEnd: "12:46:19",
            timeSpend: "00:06:28",
        },
        {
            id: 4,
            task: "last one task",
            timeStart: "12:50:20",
            timeEnd: "12:50:53",
            timeSpend: "00:00:33",
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
        // console.log(localStorageState, JSON.parse(localState) )
        //console.log( JSON.parse(localState).date,new Date(JSON.parse(localState).date) )
        //console.log(new Date( new Date() - new Date(JSON.parse(localState).dataStart) -10800000).toLocaleTimeString())
        if(localStorageState === "run") {
            //console.log(JSON.parse(localState).rows,this.state.rows)
            this.setState(State => ({
                date: new Date(new Date() - new Date(JSON.parse(localState).dataStart) - 10800000),
                dataStart: new Date(JSON.parse(localState).dataStart),
                nameTask: JSON.parse(localState).nameTask,
                TabContainerOpen: JSON.parse(localState).TabContainerOpen,
                modalOpen: JSON.parse(localState).modalOpen,
                buttonState: JSON.parse(localState).buttonState,
                rows: JSON.parse(localState).rows,

            }))
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }
        if(localStorageState === "finish"){
            this.setState(State => ({
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
            this.setState({
                date: new Date(-10800000),
                buttonState: !buttonState,
                nameTask: "",
                rows: [...rows,{
                    id: rows[rows.length - 1].id + 1,
                    task: nameTask,
                    timeStart: dataStart.toLocaleTimeString(),
                    timeEnd: new Date().toLocaleTimeString(),
                    timeSpend: this.state.date.toLocaleTimeString(),
                    }],
            });
            localStorage.setItem("localStorageState", "finish");
            localStorage.setItem("state", JSON.stringify(
                { ...this.state,
                    date: new Date(-10800000),
                    buttonState: !buttonState,
                    nameTask: "",
                    rows: [...rows,{
                        id: rows[rows.length - 1].id + 1,
                        task: nameTask,
                        timeStart: dataStart.toLocaleTimeString(),
                        timeEnd: new Date().toLocaleTimeString(),
                        timeSpend: this.state.date.toLocaleTimeString(),}]
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
    handleChange = (event, value) => {



        //generatePath("/TaskChart");
        // const location = {
        //     pathname: '/TaskChart',
        //     state: { fromDashboard: true }
        // }
        // history.push(location);
        // history.replace(location

        // history.push('/TaskChart');


        // this.setState({ TabContainerOpen: value });
        // this.context.router.push(`/genre/${value}`)
        // localStorage.setItem("state", JSON.stringify( { ...this.state, TabContainerOpen: value}));
    }
    changeName = ({target}) => {
        this.setState({ nameTask: target.value});
        localStorage.setItem("state", JSON.stringify( { ...this.state, nameTask: target.value}));
    }
    render() {
        const { date, rows, buttonState, nameTask, modalOpen, TabContainerOpen } = this.state;
        console.log(this.props)
        return (
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
                        onChange={this.handleChange}

                        className={cx('tabsClass')}
                        indicator={cx('indicatorClass')}
                        TabIndicatorProps={cx('indicatorClass')}
                    >
                        <Tab label="TASKS LOG">

                        </Tab>
                        <Tab label="TASKS CHART">

                        </Tab>
                    </Tabs>
                </AppBar>

                <Switch>
                    <Route exact path="/" render={(props) => {
                        return <TableTask {...props} rows={rows} />
                    }}/>
                    <Route path="/TaskChart" component={TaskChart}/>
                    <Route component={NodFound}/>
                    {/*<Redirect to={"/TaskChart"} component={TaskChart}/>*/}
                    {/*<Redirect to="/"/>*/}
                </Switch>
            </div>
        )
    }
}



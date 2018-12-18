import React from 'react'
import './reset.css'
import {
    TextField, Button, AppBar, Tabs, Tab, Table, TableBody, TableCell, TableHead, TableRow, Paper
} from '@material-ui/core';


import classNames from 'classnames';
import styles from './App.scss'

const cx = classNames.bind(styles)



export default class App extends React.Component {
    state = {
        date: new Date(-10800000),
        dataStart: null,
        nameTask: "",
        TabContainerOpen: 0,
        modalOpen: false,
        buttonState: true,
        rows: [{
            id: 1,
            name: 1,
            task: "lorem ipsum d...",
            timeStart: "11:28:14",
            timeEnd: "11:31:23",
            timeSpend: "00:03:08",
            info: <Button
                    variant="contained"
                    className={cx('buttonStop')}
                > INFO
                </Button>,
            delete: <Button
                variant="contained"
                className={cx('buttonStop')}
                onClick={() => this.deleteTask(1)}
            > DELETE
            </Button>,
        },
        {
            id: 2,
            name: 2,
            task: "long task",
            timeStart: "09:51:57",
            timeEnd: "11:53:38",
            timeSpend: "02:01:41",
            info: <Button
                variant="contained"
                className={cx('buttonStop')}
            > INFO
            </Button>,
            delete: <Button
                variant="contained"
                className={cx('buttonStop')}
                onClick={() => this.deleteTask(2)}
            > DELETE
            </Button>,
        },
        {
            id: 3,
            name: 3,
            task: "some new",
            timeStart: "12:39:51",
            timeEnd: "12:46:19",
            timeSpend: "00:06:28",
            info: <Button
                variant="contained"
                className={cx('buttonStop')}
            > INFO
            </Button>,
            delete: <Button
                variant="contained"
                className={cx('buttonStop')}
                onClick={() => this.deleteTask(3)}
            > DELETE
            </Button>,
        },
        {
            id: 4,
            name: 4,
            task: "last one task",
            timeStart: "12:50:20",
            timeEnd: "12:50:53",
            timeSpend: "00:00:33",
            info: <Button
                variant="contained"
                className={cx('buttonStop')}
            > INFO
            </Button>,
            delete: <Button
                variant="contained"
                className={cx('buttonStop')}
                onClick={() => this.deleteTask(4)}
            > DELETE
            </Button>,
        },]
    };

    tick = () => {
        this.setState({
            date:  new Date(this.state.date.getTime() + 1000),
        });
        localStorage.setItem( "date", new Date( new Date() - this.state.dataStart -10800000));
        console.log(new Date( new Date() - this.state.dataStart -10800000).toLocaleTimeString())
    }
    componentWillMount() {
        const {  dataStart, nameTask, TabContainerOpen, modalOpen, buttonState, rows, } = this.state;
        const dataStartKey = localStorage.getItem( "dataStart");
        const nameTaskKey = localStorage.getItem( "nameTask");
        const TabContainerOpenKey = localStorage.getItem( "TabContainerOpen");
        const modalOpenKey = localStorage.getItem( "modalOpen");
        const buttonStateKey = localStorage.getItem( "buttonState");
        const rowsKey = localStorage.getItem( "rows");


    }


    startTime = () =>{
        const {  dataStart, nameTask, TabContainerOpen, modalOpen, buttonState, rows, } = this.state;
        if(buttonState) {
            this.setState({
                buttonState: !buttonState,
                dataStart: new Date(),
            });
            localStorage.setItem( "dataStart", new Date());
            localStorage.setItem( "nameTask", nameTask);
            localStorage.setItem( "TabContainerOpen", TabContainerOpen);
            localStorage.setItem( "modalOpen", modalOpen);
            localStorage.setItem( "buttonState", !buttonState);
            localStorage.setItem( "rows", rows);
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
                rows: [...rows,{
                    id: rows[rows.length - 1].id + 1,
                    name: rows[rows.length - 1].id + 1,
                    task: nameTask,
                    timeStart: dataStart.toLocaleTimeString(),
                    timeEnd: new Date().toLocaleTimeString(),
                    timeSpend: this.state.date.toLocaleTimeString(),
                    info: <Button
                    variant="contained"
                     className={cx('buttonStop')}
            > INFO
            </Button>,
                delete: <Button
                variant="contained"
                className={cx('buttonStop')}
                onClick={() => this.deleteTask(rows[rows.length - 1].id + 1)}
            > DELETE
            </Button>}],
                date: new Date(-10800000),
                buttonState: !buttonState,
                nameTask: "",
            });

            localStorage.setItem( "date", new Date(-10800000));
            localStorage.setItem( "buttonState", !buttonState);
            localStorage.setItem( "nameTask", "");
            localStorage.setItem( "rows", [...rows,{
                id: rows[rows.length - 1].id + 1,
                name: rows[rows.length - 1].id + 1,
                task: nameTask,
                timeStart: dataStart.toLocaleTimeString(),
                timeEnd: new Date().toLocaleTimeString(),
                timeSpend: this.state.date.toLocaleTimeString(),
                info: <Button
                    variant="contained"
                    className={cx('buttonStop')}
                > INFO
                </Button>,
                delete: <Button
                    variant="contained"
                    className={cx('buttonStop')}
                    onClick={() => this.deleteTask(rows[rows.length - 1].id + 1)}
                > DELETE
                </Button>}]);

        }
    }
    deleteTask = (id) => {
        const { rows, } = this.state;
        const newRows = rows.filter(arrIndex => arrIndex.id !== id)
        this.setState({
            rows: newRows
        })
        localStorage.setItem( "rows", newRows);
    }
    closeModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen});
        localStorage.setItem( "modalOpen", !this.state.modalOpen);
    }
    handleChange = (event, value) => {
        this.setState({ TabContainerOpen: value });
        localStorage.setItem( "TabContainerOpen", value);
    };
    changeName = ({target}) =>{
        this.setState({ nameTask: target.value});
        localStorage.setItem( "nameTask", target.value);
    }
    render() {

        const { date, rows, buttonState, nameTask, modalOpen, TabContainerOpen } = this.state;
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
                        indicatorColor="primary"
                        className={cx('tabsClass')}
                        indicator={cx('indicatorClass')}
                    >
                            <Tab label="TASKS LOG" />
                            <Tab label="TASKS CHART" />
                    </Tabs>
                </AppBar>

                {TabContainerOpen === 0 && <Paper className={cx('paperClass')}>
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
                                                   className={cx('tableCell')}>{row.name}</TableCell>
                                        <TableCell numeric className={cx('tableCell')}>{row.task}</TableCell>
                                        <TableCell numeric className={cx('tableCell')}>{row.timeStart}</TableCell>
                                        <TableCell numeric className={cx('tableCell')}>{row.timeEnd}</TableCell>
                                        <TableCell numeric className={cx('tableCell')}>{row.timeSpend}</TableCell>
                                        <TableCell numeric className={cx('tableCell')}>{row.info}</TableCell>
                                        <TableCell numeric className={cx('tableCell')}>{row.delete}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>}
            </div>
        )
    }
}

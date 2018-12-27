import {compose, withHandlers} from 'recompose';
import { connect } from 'react-redux';
import App2 from './App2';
import { deleteTask, startTime, closeModal, changeName, genetateNewRows } from "../Actions";




export default compose(
    connect(({initialState}) => (
            {initialState}
        ),
        {
            deleteTask,
            startTime,
            closeModal,
            changeName,
            genetateNewRows,
        }
        ),
    withHandlers({
        startTimeHandlers: props => () => {
            const { date, buttonState, nameTask, rows, dateStart } = props.initialState
            let timerID;
            if(buttonState){
                timerID = setInterval(
                    () => (
                        props.startTime(buttonState)
                    ),
                    1000
                );
            } else if(nameTask && !buttonState) {
                clearTimeout(timerID)
                props.startTime( buttonState, nameTask, rows, dateStart, date)
            } else if(!nameTask && !buttonState) {
                props.startTime( buttonState, nameTask)
            }
        },
    }),
)(App2);
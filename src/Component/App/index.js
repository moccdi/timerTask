import {compose, withHandlers} from 'recompose';
import { connect } from 'react-redux';
import App from './App';
import {
    deleteTask, startTime, closeModal, changeName, genetateNewRows, handleChange, changeTaskPage
} from "../Actions";




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
            handleChange,
            changeTaskPage,
        }
        ),
    withHandlers({
        startTimeHandlers: props => () => {
            const { date, buttonState, nameTask, rows, dateStart } = props.initialState
            if(buttonState){
                props.startTime(buttonState)

            } else if(nameTask && !buttonState) {
                props.startTime( buttonState, nameTask, rows, dateStart, date)
            } else if(!nameTask && !buttonState) {
                props.startTime( buttonState, nameTask)
            }
        },
    }),
)(App);
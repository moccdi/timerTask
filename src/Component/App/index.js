import {compose, lifecycle, withHandlers} from 'recompose';
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
            if(buttonState) {
                props.startTime(true, date, buttonState)
            } else if(!nameTask && !buttonState) {
                props.startTime(true, date, buttonState, nameTask)
            } else if(nameTask && !buttonState) {
                props.startTime(false, date, buttonState, nameTask, rows, dateStart )
            }
        },
    }),
    lifecycle({
        componentDidMount() {
            const { runData, date } = this.props.initialState;
            if(runData) {
                this.props.startTime( runData, date )
            }
        },
        componentWillUpdate(prevProps, prevState){
            localStorage.setItem("state", JSON.stringify( { ...prevProps.initialState}));
        },
    }),

)(App);
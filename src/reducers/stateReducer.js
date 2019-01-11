import initialState from "../stubs/initialState";
import {
    DELETE_TASK__FAILURE,
    DELETE_TASK__SUCCESS,
    CHANGE_NAME__CHANGE,
    CHANGE_NAME__FAILURE,
    CHANGE_TASKPAGE__RETURN,
    CHANGE_TASKPAGE__SUCCESS,
    CLOSE_MODAL__CLOSE,
    CLOSE_MODAL__FAILURE,
    GENERATE_NEWROWS__FAILURE,
    GENERATE_NEWROWS__SUCCESS,
    HANDLE_CHANGE__FAILURE,
    HANDLE_CHANGE__SUCCESS,
    START_TIME__DATA,
    START_TIME__FAILURE,
    START_TIME__INTERVAL,
    START_TIME__MODAL_OPEN,
    START_TIME__NEWROWS,
    CHANGE_TASKPAGE__FAILURE
} from "../Component/Actions";

// localStorage.clear();
//payload

export default function stateReducer(state = initialState,action) {
    switch (action.type) {
        case DELETE_TASK__SUCCESS : {
            return {
                    ...state,
                    rows: action.rows,
                    taskPage: 1,
                    error: undefined,
                }
            }
        case DELETE_TASK__FAILURE : {
            return {
                ...state,
                error: action.error,
            }
        }


        case START_TIME__DATA : {
            return {
                ...state,
                dateStart: action.dateStart,
                error: undefined,
            }
        }
        case START_TIME__INTERVAL : {
            return {
                ...state,
                date: action.date,
                buttonState: false,
                error: undefined,
            }
        }
        case START_TIME__MODAL_OPEN : {
            return {
                ...state,
                modalOpen: true,
                error: undefined,
            }
        }
        case START_TIME__NEWROWS : {
            return {
                ...state,
                date: action.data,
                dateStart: false,
                runData: false,
                buttonState: true,
                nameTask: "",
                rows: action.newRows,
                error: undefined,
            }
        }
        case START_TIME__FAILURE : {
            return {
                ...state,
                error: action.error,
            }
        }


        case CLOSE_MODAL__CLOSE : {
            return {
                ...state,
                modalOpen: false,
                error: undefined,
            }
        }
        case CLOSE_MODAL__FAILURE : {
            return {
                ...state,
                error: action.error,
            }
        }

        case CHANGE_NAME__CHANGE : {
            return {
                ...state,
                nameTask: action.nameTask,
                error: undefined,
            }
        }
        case CHANGE_NAME__FAILURE : {
            return {
                ...state,
                error: action.error,
            }
        }


        case GENERATE_NEWROWS__SUCCESS : {
            return {
                ...state,
                date: action.date,
                dateStart: false,
                nameTask: "",
                TabContainerOpen: 0,
                modalOpen: false,
                buttonState: true,
                taskPage: 1,
                rows: action.newRows,
                error: undefined,
            }
        }
        case GENERATE_NEWROWS__FAILURE : {
            return {
                ...state,
                error: action.error,
            }
        }


        case HANDLE_CHANGE__SUCCESS : {
            return {
                ...state,
                TabContainerOpen: action.TabContainerOpen,
                error: undefined,
            }
        }
        case HANDLE_CHANGE__FAILURE : {
            return {
                ...state,
                error: action.error,
            }
        }


        case CHANGE_TASKPAGE__SUCCESS : {
            return {
                ...state,
                taskPage: action.taskPage,
                error: undefined,
            }
        }
        case CHANGE_TASKPAGE__RETURN : {
            return {
                ...state,
                error: undefined,
            }
        }
        case CHANGE_TASKPAGE__FAILURE : {
            return {
                ...state,
                error: action.error,
            }
        }


        default:
            return state;
    }
}










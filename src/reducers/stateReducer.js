import initialState from "../stubs/initialState";
// localStorage.clear();
//payload

export default function stateReducer(state = initialState,action) {
    switch (action.type) {
        case 'DELETE_TASK__SUCCESS' : {
            localStorage.setItem("state", JSON.stringify( { ...state,  rows: action.rows, taskPage: 1, error: undefined,}));
                return {
                    ...state,
                    rows: action.rows,
                    taskPage: 1,
                    error: undefined,
                }
            }
        case 'DELETE_TASK__FAILURE' : {
            return {
                ...state,
                error: action.error,
            }
        }


        case 'START_TIME__DATA' : {
            localStorage.setItem("state", JSON.stringify({...state, dateStart: action.dateStart, error: undefined,}));
            return {
                ...state,
                dateStart: action.dateStart,
                error: undefined,
            }
        }
        case 'START_TIME__INTERVAL' : {
            localStorage.setItem("state", JSON.stringify( { ...state, date: action.date, buttonState: false, error: undefined,}));
            return {
                ...state,
                date: action.date,
                buttonState: false,
                error: undefined,
            }
        }
        case 'START_TIME__MODAL_OPEN' : {
            localStorage.setItem("state", JSON.stringify( { ...state, modalOpen: true, error: undefined,}));
            return {
                ...state,
                modalOpen: true,
                error: undefined,
            }
        }
        case 'START_TIME__NEWROWS' : {
            localStorage.setItem("state", JSON.stringify(
                { ...state,
                    date: action.data,
                    dateStart: false,
                    runData: false,
                    buttonState: true,
                    nameTask: "",
                    rows: action.newRows,
                    error: undefined,}));
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
        case 'START_TIME__FAILURE' : {
            return {
                ...state,
                error: action.error,
            }
        }


        case 'CLOSE_MODAL__CLOSE' : {
            return {
                ...state,
                modalOpen: false,
                error: undefined,
            }
        }
        case 'CLOSE_MODAL__FAILURE' : {
            return {
                ...state,
                error: action.error,
            }
        }

        case "CHANGE_NAME__CHANGE" : {
            localStorage.setItem("state", JSON.stringify({ ...state, nameTask: action.nameTask,}));
            return {
                ...state,
                nameTask: action.nameTask,
                error: undefined,
            }
        }
        case "CHANGE_NAME__FAILURE" : {
            return {
                ...state,
                error: action.error,
            }
        }


        case "GENERATE_NEWROWS__SUCCESS" : {
            localStorage.setItem("state", JSON.stringify({ ...state,
                date: action.date,
                dateStart: false,
                nameTask: "",
                TabContainerOpen: 0,
                modalOpen: false,
                buttonState: true,
                taskPage: 1,
                rows: action.newRows
            }));
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


        case "HANDLE_CHANGE__SUCCESS" : {
            localStorage.setItem("state", JSON.stringify({ ...state, TabContainerOpen: action.TabContainerOpen,}));
            return {
                ...state,
                TabContainerOpen: action.TabContainerOpen,
                error: undefined,
            }
        }
        case "HANDLE_CHANGE__FAILURE" : {
            return {
                ...state,
                error: action.error,
            }
        }


        case "CHANGE_TASKPAGE__SUCCESS" : {
            localStorage.setItem("state", JSON.stringify({ ...state, taskPage: action.taskPage,}));
            return {
                ...state,
                taskPage: action.taskPage,
                error: undefined,
            }
        }
        case "CHANGE_TASKPAGE__RETURN" : {
            return {
                ...state,
                error: undefined,
            }
        }
        case "CHANGE_TASKPAGE_FAILURE" : {
            return {
                ...state,
                error: action.error,
            }
        }


        default:
            return state;
    }
}










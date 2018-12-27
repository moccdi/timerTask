import initialState from "../stubs/initialState";


export default function stateReducer(state = initialState,action) {
    switch (action.type) {
        case 'DeleteTask_SUCCESS' : {
                return {
                    ...state,
                    rows: action.rows,
                    error: undefined,
                }
            }
        case 'DeleteTask_FAILURE' : {
            return {
                ...state,
                error: action.error,
            }
        }


        case 'StartTime_STARTInterval' : {
            return {
                ...state,
                date: new Date(state.date.getTime() + 1000),
                buttonState: false,
                error: undefined,
            }
        }
        case 'StartTime_ModalOpen' : {
            return {
                ...state,
                modalOpen: true,
                error: undefined,
            }
        }
        case 'StartTime_NEWROWS' : {
            return {
                ...state,
                date: new Date(70, 0),
                dateStart: false,
                buttonState: true,
                nameTask: "",
                rows: action.newRows,
                error: undefined,
            }
        }


        case 'StartTime_FAILURE' : {
            return {
                ...state,
                error: action.error,
            }
        }


        case 'CloseModal_CLOSE' : {
            return {
                ...state,
                modalOpen: false,
            }
        }
        case 'CloseModal_FAILURE' : {
            return {
                ...state,
                error: action.error,
            }
        }

        case "ChangeName_CHANGE" : {
            return {
                ...state,
                nameTask: action.nameTask,
            }
        }
        case "ChangeName_FAILURE" : {
            return {
                ...state,
                error: action.error,
            }
        }


        case "GenetateNewRows_SUCCESS" : {
            return {
                ...state,
                date: new Date(70, 0),
                dateStart: false,
                nameTask: "",
                TabContainerOpen: 0,
                modalOpen: false,
                buttonState: true,
                taskPage: 1,
                rows: action.newRows
            }
        }


        default:
            return state;
    }
}










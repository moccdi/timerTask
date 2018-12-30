import { put } from "redux-saga/effects";
import { push } from 'connected-react-router'
import { delay } from 'redux-saga'



export function StartTimeRequest() {
    return function* (action) {
        const { date, buttonState, nameTask, rows, dateStart } = action
        try {
            while (buttonState) {
                yield delay(1000)
                yield put({ type: 'StartTime_STARTInterval' })
            }
            if(!nameTask && !buttonState) {
                yield put({
                    type: "StartTime_ModalOpen",
                })
                while (true) {
                    yield delay(1000)
                    yield put({ type: 'StartTime_STARTInterval' })
                }
            }
            if(nameTask && !buttonState) {
                let newRows;
                if(rows.length === 0){
                    newRows =  [...rows,{
                        id: 1,
                        task: nameTask,
                        timeStart: dateStart,
                        timeEnd: new Date(),
                        timeSpend: date,
                    }]
                } else {
                    newRows =  [...rows,{
                        id: rows[rows.length - 1].id + 1,
                        task: nameTask,
                        timeStart: dateStart,
                        timeEnd: new Date(),
                        timeSpend: date,
                    }]
                }
                yield put({
                    type: "StartTime_NEWROWS",
                    newRows,
                })
            }
        } catch (error) {
            yield put({
                type: "StartTime_FAILURE",
                error,
            });
        }
    };
}


export function DeleteTaskRequest() {
    return function* (action) {
        try {
            const newRows = action.rows.filter(arrIndex => arrIndex.id !== action.id)
            yield put({
                type: "DeleteTask_SUCCESS",
                rows: newRows,

            })
        } catch (error) {
            yield put({
                type: "DeleteTask_FAILURE",
                error,
            });
        }
    };
}


export function CloseModalRequest() {
    return function* (action) {
        try {
            yield put({
                type: "CloseModal_CLOSE",
            })

        } catch (error) {
            yield put({
                type: "CloseModal_FAILURE",
                error,
            });
        }
    };
}


export function ChangeNameRequest() {
    return function* (action) {
        try {
            yield put({
                type: "ChangeName_CHANGE",
                nameTask: action.nameTask,

            })
        } catch (error) {
            yield put({
                type: "ChangeName_FAILURE",
                error,
            });
        }
    };
}



export function GenetateNewRowsRequest() {
    return function* (action) {
        function randomNumber(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;
        }
        try {
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
                    task: `Task ${i+1}`,
                    timeStart: timeStart,
                    timeEnd: timeEnd,
                    timeSpend: timeSpend,
                }
                newRows.push(oneRow)
            }

            yield put({
                type: "GenetateNewRows_SUCCESS",
                newRows,
            })
        } catch (error) {
            yield put({
                type: "GenetateNewRows_FAILURE",
                error,
            });
        }
    };
}




export function HandleChangeRequest() {
    return function* (action) {
        try {
            if(action.value === 0){
                yield put(push('/'))
                yield put({
                    type: "handleChange_SUCCESS",
                    TabContainerOpen: action.value,
                });
            }
            if(action.value === 1){
                yield put(push('/TaskChart'))
                yield put({
                    type: "handleChange_SUCCESS",
                    TabContainerOpen: action.value,
                });
            }
        } catch (error) {
            yield put({
                type: "handleChange_FAILURE",
                error,
            });
        }
    };
}

export function ChangeTaskPageRequest() {
    return function* (action) {
        try {
            if(typeof(action.taskPage) === "number") {
                yield put({
                    type: "ChangeTaskPage_SUCCESS",
                    taskPage: action.taskPage
                });
                yield put(push(`/TaskPage/${action.taskPage}`))
            }
            if(action.taskPage === 'return') {
                yield put({
                    type: "ReturnHome_SUCCESS",
                });
                yield put(push('/'))
            }

        } catch (error) {
            yield put({
                type: "ChangeTaskPage_FAILURE",
                error,
            });
        }
    };
}









// const runner = yield call(setInterval, () => {
//     console.log('yes');
// }, 1000);
//
// try {
//     while (true) {
//         yield put({
//             type: "StartTime_STARTInterval",
//         })
//         yield call(delay, 1000)
//
//     }
// } finally {
//
// }







import {call, cancel, fork, put, take,} from "redux-saga/effects";
import {delay, eventChannel, takeEvery} from "redux-saga";
import { push } from 'connected-react-router'




export function StartTimeRequest() {
    return function* (action) {
        const { date, buttonState, nameTask, rows, dateStart } = action
        try {
            if(buttonState) {
                console.log('111')
                yield put({
                    type: "StartTime_STARTInterval",
                })
            }
            if(!nameTask && !buttonState) {
                yield put({
                    type: "StartTime_ModalOpen",
                })
            }
            if(nameTask && !buttonState) {
                console.log('22')
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
            var rand = min - 0.5 + Math.random() * (max - min + 1)
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
                    task: `task${i}`,
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




export function handleChangeRequest() {
    return function* (action) {
        try {
            yield put(push('/TaskChart'))
            // if(action.value === 0){
            //     action.history.push('/TaskChart');
            //     yield put({
            //         type: "handleChange_SUCCESS",
            //         TabContainerOpen: action.value,
            //         history:  action.history,
            //     });
            // }
            // if(action.value === 1){
            //     action.history.push('/TaskChart');
            //     yield put({
            //         type: "handleChange_SUCCESS",
            //         TabContainerOpen: action.value,
            //         history:  action.history,
            //     });
            // }
        } catch (error) {
            yield put({
                type: "handleChange_FAILURE",
                error,
            });
        }
    };
}




export function makeSagaRequest(getData) {
    return function* (action) {
        yield put({
            type: `${action.type}_PENDING`,
        });
        try {
            const results = yield call(getData,action.payload);
            yield put({
                type: `${action.type}_SUCCESS`,
                results,
            })
        } catch (error) {

            yield put({
                type: `${action.type}_FAILURE`,
                error,
            });
        }
    };
}





export function SetFilterSaga() {
    return function* (action) {
        try {
            if (action.sectorFilter === "Gender") {
                yield put({
                    type: `${action.type}_GENDER_SUCCESS`,
                    filter: action.filter,
                })
            }
            else if (action.sectorFilter === "Hair Color") {
                yield put({
                    type: `${action.type}_HAIRCOLOR_SUCCESS`,
                    filter: action.filter,
                })
            }
            else if  (action.sectorFilter === "Mass") {
                yield put({
                    type: `${action.type}_MASS_SUCCESS`,
                    filter: action.filter,
                })
            }
        } catch (error) {

            yield put({
                type: `${action.type}_FAILURE`,
                error,
            });
        }
    };
}

export function ArrowSaga() {
    return function* (action) {
        try {
                if(action.arrowClass === "fa fa-arrows-v" || action.arrowClass === "fa fa-arrow-up" ){
                    yield put({
                        type: `${action.type}_${action.arrowId}_SUCCESS`,
                        arrowClass: 'fa fa-arrow-down',
                    })
                }
                if(action.arrowClass === "fa fa-arrow-down" ){
                    yield put({
                        type: `${action.type}_${action.arrowId}_SUCCESS`,
                        arrowClass: 'fa fa-arrow-up',
                    })
                }
        } catch (error) {
            yield put({
                type: `${action.type}_FAILURE`,
                error,
            });
        }
    };
}




export function NewTableSagaRequest(getDataTable) {
    return function* (action) {
        //console.log('111111111',action,getDataTable)
        yield put({
            type: `${action.type}_PENDING`,
        });
        try {
            if (action.payload === undefined || action.payload === false) {
                const homeworldData = yield call(getDataTable,action.homeworld);
                const speciesData = yield call(getDataTable,action.species);
                const vehiclesData = yield call(getDataTable,action.vehicles);
                const newResults = [
                    ...action.results.slice(0, action.index),
                    { ...action.results[action.index], homeworldData: homeworldData, speciesData: speciesData, vehiclesData: vehiclesData,isOpen:true, },
                    ...action.results.slice(action.index + 1 ),
                ];
                yield put({
                    results: newResults,
                    type: `${action.type}_LOADING_SUCCESS`,
                })
            }
            if (action.payload === true ){
                const newResults = [
                    ...action.results.slice(0, action.index),
                    { ...action.results[action.index], homeworldData: null, speciesData: null, vehiclesData: null,isOpen:false, },
                    ...action.results.slice(action.index + 1 ),
                ];
                yield put({
                    results: newResults,
                    type: `${action.type}_DELETE`,
                })
            }
        } catch (error) {
            yield put({
                type: `${action.type}_FAILURE`,
                error,
            });
        }
    };
}









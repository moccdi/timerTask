
export const DELETE_TASK = 'DELETE_TASK'
export const START_TIME = 'START_TIME'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const CHANGE_NAME = 'CHANGE_NAME'
export const GENERATE_NEWROWS = 'GENERATE_NEWROWS'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const CHANGE_TASKPAGE = 'CHANGE_TASKPAGE'


export const DELETE_TASK__SUCCESS = 'DELETE_TASK__SUCCESS'
export const DELETE_TASK__FAILURE = 'DELETE_TASK__FAILURE'

export const START_TIME__DATA = 'START_TIME__DATA'
export const START_TIME__INTERVAL = 'START_TIME__INTERVAL'
export const START_TIME__MODAL_OPEN = 'START_TIME__MODAL_OPEN'
export const START_TIME__NEWROWS = 'START_TIME__NEWROWS'
export const START_TIME__FAILURE = 'START_TIME__FAILURE'

export const CLOSE_MODAL__CLOSE = 'CLOSE_MODAL__CLOSE'
export const CLOSE_MODAL__FAILURE = 'CLOSE_MODAL__FAILURE'

export const CHANGE_NAME__CHANGE = 'CHANGE_NAME__CHANGE'
export const CHANGE_NAME__FAILURE = 'CHANGE_NAME__FAILURE'

export const GENERATE_NEWROWS__SUCCESS = 'GENERATE_NEWROWS__SUCCESS'
export const GENERATE_NEWROWS__FAILURE = 'GENERATE_NEWROWS__FAILURE'

export const HANDLE_CHANGE__SUCCESS = 'HANDLE_CHANGE__SUCCESS'
export const HANDLE_CHANGE__FAILURE = 'HANDLE_CHANGE__FAILURE'


export const CHANGE_TASKPAGE__SUCCESS = 'CHANGE_TASKPAGE__SUCCESS'
export const CHANGE_TASKPAGE__RETURN = 'CHANGE_TASKPAGE__RETURN'
export const CHANGE_TASKPAGE__FAILURE = 'CHANGE_TASKPAGE__FAILURE'



export function deleteTask(id, rows) {
    return{ type: DELETE_TASK, id, rows };
}

export function startTime(runData, date,  buttonState, nameTask, rows, dateStart,) {
    return{ type: START_TIME, runData, date, buttonState, nameTask, rows, dateStart, };
}

export function closeModal() {
    return{ type: CLOSE_MODAL};
}
export function changeName({target}) {
    return{ type: CHANGE_NAME, nameTask: target.value};
}

export function genetateNewRows() {
    return{ type: GENERATE_NEWROWS,};
}

export function handleChange(value) {
    return{ type: HANDLE_CHANGE, value};
}

export function changeTaskPage(taskPage) {
    return{ type: CHANGE_TASKPAGE, taskPage};
}






// export function getRepos(dataName) {
//     return{ payload:dataName,type: 'LOADING'};
// }
//
// export function setFilter(groupFilter,eventTarget){
//     return{ sectorFilter:groupFilter, filter:eventTarget, type: 'FILTER'};
// }
//
// export function setArrows(arrowId,arrowClass){
//     return{ arrowId:arrowId, type: 'ARROW',arrowClass: arrowClass};
// }
//
// export function getNewTable( isOpen,results,index,homeworld,species,vehicles){
//     return{
//         payload:isOpen,
//         results,
//         homeworld,
//         species,
//         vehicles,
//         index,
//         type: 'NEWTABLE'};
// }

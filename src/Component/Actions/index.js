

export function deleteTask(id, rows) {
    return{ type: 'DELETE_TASK', id, rows };
}

export function startTime(runData, date,  buttonState, nameTask, rows, dateStart,) {
    return{ type: 'START_TIME', runData, date, buttonState, nameTask, rows, dateStart, };
}

export function closeModal() {
    return{ type: 'CLOSE_MODAL'};
}
export function changeName({target}) {
    return{ type: 'CHANGE_NAME', nameTask: target.value};
}

export function genetateNewRows() {
    return{ type: 'GENERATE_NEWROWS',};
}

export function handleChange(value) {
    return{ type: 'HANDLE_CHANGE', value};
}

export function changeTaskPage(taskPage) {
    return{ type: 'CHANGE_TASKPAGE', taskPage};
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

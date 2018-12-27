

export function deleteTask(id, rows) {
    return{ type: 'DeleteTask', id, rows };
}

export function startTime( buttonState, nameTask, rows, dateStart, date) {
    return{ type: 'StartTime', buttonState, nameTask, rows, dateStart, date};
}

export function closeModal() {
    return{ type: 'closeModal'};
}
export function changeName({target}) {
    return{ type: 'changeName', nameTask: target.value};
}

export function genetateNewRows() {
    return{ type: 'genetateNewRows',};
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

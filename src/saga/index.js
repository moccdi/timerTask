import {takeLatest, all} from 'redux-saga/effects';

import {
    DeleteTaskRequest, StartTimeRequest, CloseModalRequest, ChangeNameRequest, GenetateNewRowsRequest
} from "../helpers/makeSagaRequest";



function* DeleteTaskSaga() {
    yield takeLatest('DeleteTask', DeleteTaskRequest())
}

function* StartTimeSaga() {
    yield takeLatest('StartTime', StartTimeRequest())
}

function* closeModalSaga() {
    yield takeLatest('closeModal', CloseModalRequest())
}

function* changeNameSaga() {
    yield takeLatest('changeName', ChangeNameRequest())
}
function* genetateNewRowsSaga() {
    yield takeLatest('genetateNewRows', GenetateNewRowsRequest())
}



// export function* chooseFilter() {
//     yield takeLatest('FILTER',)
// }
// export function* arrows() {
//     yield takeLatest('ARROW',ArrowSaga())
// }
//
// export function* newTable() {
//     yield takeLatest('NEWTABLE',NewTableSagaRequest(getDataTable))
// }

export default function* () {
    yield all([
        DeleteTaskSaga(),
        StartTimeSaga(),
        closeModalSaga(),
        changeNameSaga(),
        genetateNewRowsSaga(),
    ])
}


import {takeLatest, all, takeEvery, select} from 'redux-saga/effects';

import {
    DeleteTaskRequest,
    StartTimeRequest,
    CloseModalRequest,
    ChangeNameRequest,
    GenetateNewRowsRequest,
    HandleChangeRequest,
    ChangeTaskPageRequest,
} from "../helpers/makeSagaRequest";


function* StartTimeSaga() {
    yield takeLatest('StartTime', StartTimeRequest())
}

function* DeleteTaskSaga() {
    yield takeLatest('DeleteTask', DeleteTaskRequest())
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

function* handleChangeSaga() {
    yield takeLatest('handleChange', HandleChangeRequest())
}
function* changeTaskPageSaga() {
    yield takeLatest('changeTaskPage', ChangeTaskPageRequest())
}




export default function* () {
    yield all([
        DeleteTaskSaga(),
        StartTimeSaga(),
        closeModalSaga(),
        changeNameSaga(),
        genetateNewRowsSaga(),
        handleChangeSaga(),
        changeTaskPageSaga(),

    ])
}


// function* watchFirstThreeTodosCreation() {
//     for (let i = 0; i < 4; i++) {
//         const action = yield take('StartTime')
//     }
//     yield put({type: 'SHOW_CONGRATULATION'})
// }



// export function* watchIncrementAsync() {
//     //yield takeEvery('StartTime', incrementAsync)
//     yield takeEvery('StartTime', function* logger(action) {
//         const state = yield select()
//
//         console.log('action', action)
//         console.log('state after', state)
//     })
//
// }
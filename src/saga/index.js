import {takeLatest, all, takeEvery, select} from 'redux-saga/effects';

import {
    DeleteTaskSaga,
    StartTimeSaga,
    CloseModalSaga,
    ChangeNameSaga,
    GenerateNewRowsSaga,
    HandleChangeSaga,
    ChangeTaskPageSaga,
} from "../helpers/makeSaga";


function* StartTime() {
    yield takeEvery('START_TIME', StartTimeSaga())
}

function* DeleteTask() {
    yield takeLatest('DELETE_TASK', DeleteTaskSaga())
}

function* closeModal() {
    yield takeLatest('CLOSE_MODAL', CloseModalSaga())
}

function* changeName() {
    yield takeLatest('CHANGE_NAME', ChangeNameSaga())
}
function* generateNewRows() {
    yield takeLatest('GENERATE_NEWROWS', GenerateNewRowsSaga())
}

function* handleChange() {
    yield takeLatest('HANDLE_CHANGE', HandleChangeSaga())
}
function* changeTaskPage() {
    yield takeLatest('CHANGE_TASKPAGE', ChangeTaskPageSaga())
}




export default function* () {
    yield all([
        DeleteTask(),
        StartTime(),
        closeModal(),
        changeName(),
        generateNewRows(),
        handleChange(),
        changeTaskPage(),

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
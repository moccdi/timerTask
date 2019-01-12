import { takeLatest, all } from 'redux-saga/effects'

import {
  DeleteTaskSaga,
  StartTimeSaga,
  CloseModalSaga,
  ChangeNameSaga,
  GenerateNewRowsSaga,
  HandleChangeSaga,
  ChangeTaskPageSaga,
} from '../helpers/sagaHelpers'

import {
  CHANGE_NAME,
  CHANGE_TASKPAGE,
  CLOSE_MODAL,
  DELETE_TASK,
  GENERATE_NEWROWS,
  HANDLE_CHANGE,
  START_TIME,
} from '../Component/Actions'


function* StartTime() {
  yield takeLatest(START_TIME, StartTimeSaga())
}

function* DeleteTask() {
  yield takeLatest(DELETE_TASK, DeleteTaskSaga())
}

function* closeModal() {
  yield takeLatest(CLOSE_MODAL, CloseModalSaga())
}

function* changeName() {
  yield takeLatest(CHANGE_NAME, ChangeNameSaga())
}

function* generateNewRows() {
  yield takeLatest(GENERATE_NEWROWS, GenerateNewRowsSaga())
}

function* handleChange() {
  yield takeLatest(HANDLE_CHANGE, HandleChangeSaga())
}

function* changeTaskPage() {
  yield takeLatest(CHANGE_TASKPAGE, ChangeTaskPageSaga())
}


export default function* rootSaga() {
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


// import {cancel, cancelled, put, select, race, call} from "redux-saga/effects";
// import {takeLatest, all, takeEvery, select, throttle, cancelled, take,  put} from 'redux-saga/effects';

// function* watchFirstThreeTodosCreation() {
//    for (let i = 0; i < 3; i++) {
// yield take(CHANGE_NAME) //будет выполнент 3 раза take походу точно хз ,принимет тип  как и takeLatest только не в агрументе нету
// функциии,как бы будет
//         выполнененоесли будет той тип данный совпадаеть с экшеном
//         let i =0;
//         yield put({
//             type: CHANGE_NAME__CHANGE,
//             nameTask: ++i,
//
//         })
//     }
// }
// Мы тоже делаем yield take(['LOGOUT', 'LOGIN_ERROR']). Это означает, что мы наблюдаем за 2 одновременными действиями:


// function* changeName() {
//     yield throttle(5000,CHANGE_NAME, ChangeNameSaga()) //yield throttle(5000 - когда постапует 5 секун ждем не отвечает на запросы
// }

// call Функция генератора или обычная функция, которая либо возвращает Promise в качестве результата, либо любое другое значение.

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


// function* deleteRecord({ payload }) {
//   try {
//     const { confirm, deny } = yield call(prompt);
//     if (confirm) {
//       yield put(actions.deleteRecord.confirmed())
//     }
//     if (deny) {
//       yield cancel() // остановить все
//     }
//   } catch(e) {
//     // handle failure
//   } finally {
//     if (yield cancelled()) { //если cancel() сработал
//       // shared cancellation logic
//       yield put(actions.deleteRecord.cancel(payload))
//     }
//   }
// }

// export const getCart = state => state.cart
// import { take, fork, select } from 'redux-saga/effects'
// import { getCart } from './selectors'
//
// function* checkout() {
//     // query the state using the exported selector
//     const cart = yield select(getCart) //получить состояние хранилища
//
//     // ... call some API endpoint then dispatch a success/error action
// }
//
// export default function* rootSaga() {
//     while (true) {
//         yield take('CHECKOUT_REQUEST')
//         yield fork(checkout)
//     }
// }

// function* takeOneAtMost() {
//     const chan = yield actionChannel('USER_REQUEST')
//     while (true) {
//         const {payload} = yield take(chan)
//         yield call(api.getUser, payload)
//     }
// }

// function* fetchUsersSaga {
//     const { response, cancel } = yield race({ //race кто быстрей выполниться то и будет выполнена
//         response: call(fetchUsers),
//         cancel: take(CANCEL_FETCH)
//     })
// }

// function* mySaga() {
//     const { customers, products } = yield all({
//         customers: call(fetchCustomers),
//         products: call(fetchProducts)
//     })
// } сразу выполняться два

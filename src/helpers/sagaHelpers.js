import { put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { delay } from 'redux-saga'
import {
  CHANGE_NAME__CHANGE,
  CHANGE_NAME__FAILURE,
  CHANGE_TASKPAGE__FAILURE,
  CHANGE_TASKPAGE__RETURN,
  CHANGE_TASKPAGE__SUCCESS,
  CLOSE_MODAL__CLOSE,
  CLOSE_MODAL__FAILURE,
  DELETE_TASK__FAILURE,
  DELETE_TASK__SUCCESS,
  GENERATE_NEWROWS__FAILURE,
  GENERATE_NEWROWS__SUCCESS,
  HANDLE_CHANGE__FAILURE,
  HANDLE_CHANGE__SUCCESS,
  START_TIME__DATA,
  START_TIME__FAILURE,
  START_TIME__INTERVAL,
  START_TIME__MODAL_OPEN,
  START_TIME__NEWROWS,
} from '../Component/Actions'
import generateRows from "./generateRows";


// localStorage.clear();
// const getDateState = state => state.initialState.date
// let StateData = yield select(getDateState)
// let newData = new Date(StateData.getTime() + 1000)

export function StartTimeSaga() {
  return function* (action) {
    const {
      runData, buttonState, nameTask, rows, dateStart, date,
    } = action
    try {
      if (runData) {
        if (buttonState) {
          yield put({ type: START_TIME__DATA, dateStart: new Date() })
        } else if (!nameTask && buttonState === false) {
          yield put({
            type: START_TIME__MODAL_OPEN,
          })
        }
        let newData = date
        while (runData) {
          yield delay(1000)
          newData = new Date(newData.getTime() + 1000)
          yield put({
            type: START_TIME__INTERVAL,
            date: newData,
          })
        }
      } else if (nameTask && !buttonState) {
        let newRows
        if (rows.length === 0) {
          newRows = [...rows, {
            id: 1,
            task: nameTask,
            timeStart: dateStart,
            timeEnd: new Date(),
            timeSpend: date,
          }]
        } else {
          newRows = [...rows, {
            id: rows[rows.length - 1].id + 1,
            task: nameTask,
            timeStart: dateStart,
            timeEnd: new Date(),
            timeSpend: date,
          }]
        }
        yield put({
          type: START_TIME__NEWROWS,
          data: new Date(70, 0),
          newRows,
        })
      }
    } catch (error) {
      yield put({
        type: START_TIME__FAILURE,
        error,
      })
    }
  }
}


export function DeleteTaskSaga() {
  return function* (action) {
    try {
      const newRows = action.rows.filter(arrIndex => arrIndex.id !== action.id)
      yield put({
        type: DELETE_TASK__SUCCESS,
        rows: newRows,

      })
    } catch (error) {
      yield put({
        type: DELETE_TASK__FAILURE,
        error,
      })
    }
  }
}


export function CloseModalSaga() {
  return function* () {
    try {
      yield put({
        type: CLOSE_MODAL__CLOSE,
      })
    } catch (error) {
      yield put({
        type: CLOSE_MODAL__FAILURE,
        error,
      })
    }
  }
}


export function ChangeNameSaga() {
  return function* (action) {
    try {
      yield put({
        type: CHANGE_NAME__CHANGE,
        nameTask: action.nameTask,

      })
    } catch (error) {
      yield put({
        type: CHANGE_NAME__FAILURE,
        error,
      })
    }
  }
}


export function GenerateNewRowsSaga() {
  return function* () {
    try {
     const newRows = generateRows(10, 15, 1,30)
      yield put({
        type: GENERATE_NEWROWS__SUCCESS,
        date: new Date(70, 0),
        newRows,
      })
    } catch (error) {
      yield put({
        type: GENERATE_NEWROWS__FAILURE,
        error,
      })
    }
  }
}


export function HandleChangeSaga() {
  return function* (action) {
    try {
      if (action.value === 0) {
        yield put(push('/'))
        yield put({
          type: HANDLE_CHANGE__SUCCESS,
          TabContainerOpen: action.value,
        })
      } else if (action.value === 1) {
        yield put(push('/TaskChart'))
        yield put({
          type: HANDLE_CHANGE__SUCCESS,
          TabContainerOpen: action.value,
        })
      }
    } catch (error) {
      yield put({
        type: HANDLE_CHANGE__FAILURE,
        error,
      })
    }
  }
}

export function ChangeTaskPageSaga() {
  return function* (action) {
    const { taskPage } = action
    try {
      if (typeof (taskPage) === 'number') {
        yield put({
          type: CHANGE_TASKPAGE__SUCCESS,
          taskPage: action.taskPage,
        })
        yield put(push(`/TaskPage/${taskPage}`))
      } else if (taskPage === 'return') {
        yield put({
          type: CHANGE_TASKPAGE__RETURN,
        })
        yield put(push('/'))
      }
    } catch (error) {
      yield put({
        type: CHANGE_TASKPAGE__FAILURE,
        error,
      })
    }
  }
}

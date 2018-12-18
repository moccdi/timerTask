import {takeLatest, all} from 'redux-saga/effects';
import {getData, getDataTable} from "../api";
import {makeSagaRequest, ArrowSaga, SetFilterSaga, NewTableSagaRequest} from "../helpers/makeSagaRequest";


function* loading() {
    yield takeLatest('LOADING',makeSagaRequest(getData))
}
export function* chooseFilter() {
    yield takeLatest('FILTER',SetFilterSaga())
}
export function* arrows() {
    yield takeLatest('ARROW',ArrowSaga())
}

export function* newTable() {
    yield takeLatest('NEWTABLE',NewTableSagaRequest(getDataTable))
}

export default function* () {
    yield all([
        loading(),
        chooseFilter(),
        arrows(),
        newTable(),
    ])
}


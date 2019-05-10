import {FETCH_TODOS, FETCH_SUCCESSED, FETCH_FAILED} from '../actions/actionTypes';

import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

function* fetchTodos() {
    try {
        const receivedTodos = yield Api.getTodosFromApi();
        yield put({type: FETCH_SUCCESSED, receivedTodos: receivedTodos});
    } catch (error) {
        yield put({type:FETCH_FAILED, error});
    }
}

export function* watchFetchTodos() {
    yield takeLatest(FETCH_TODOS, fetchTodos);
}
import {call, all} from 'redux-saga/effects';

import {watchFetchTodos} from './todoSaga';

export default function* rootSaga() {
    yield call(watchFetchTodos);
}
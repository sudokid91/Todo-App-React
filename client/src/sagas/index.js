// import { put, takeLatest, all } from 'redux-saga/effects';
// import {SHOW_ALL} from '../actions/actionTypes';

// const urlGetTodos = 'http://localhost:6969/todos';

// function* fetchTodos() {

//   const response = yield fetch(urlGetTodos)
//               .then(response => response.json());    
//   yield put({ type: "SHOW_ALL", json: json.todos, });
// }

// function* actionWatcher() {
//      yield takeLatest(SHOW_ALL, fetchTodos)
// }

// export default function* rootSaga() {
//    yield all([
//    actionWatcher(),
//    ]);
// }
import { put, takeLatest, all } from 'redux-saga/effects';
import {SHOW_ALL} from '../actions/actionTypes';

function* fetchTodos() {
  console.log("huhu");
  const json = yield fetch('http://localhost:6969/todos')
              .then(response => response.json()); 
              console.log(JSON.stringify(json));   
  // yield put({ type: "SHOW_ALL", json: json.todos, });
}

function* actionWatcher() {
     yield takeLatest(SHOW_ALL, fetchTodos)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
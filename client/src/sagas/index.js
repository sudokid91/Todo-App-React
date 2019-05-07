import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchTodos() {
  const json = yield fetch('http://localhost:6969/todos')
              .then(response => response.json());    
  yield put({ type: "SHOW_ALL", json: json.todos, });
}
function* actionWatcher() {
     yield takeLatest('GET_TODOS', fetchTodos)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
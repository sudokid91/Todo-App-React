const urlGetTodos = 'http://localhost:6969/todos';

function* getTodosFromApi() {
  const response = yield fetch(urlGetTodos, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    mode: 'no-cors',
  });
  const todos = yield response.status === 200 ? console.log("hehe"+JSON.stringify(response)) : [];
  return todos;
}

export const Api = {
    getTodosFromApi
}
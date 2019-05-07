const express = require('express');
const route = express.Router();

const checkAuth =require('../middleware/check-auth');

const TodoController = require('../controllers/todo');

route.get('/',checkAuth, TodoController.get_todos);
route.post('/', checkAuth, TodoController.post_todo);
route.get('/:todoId', checkAuth, TodoController.get_todo);
route.patch('/:todoId',checkAuth, TodoController.update_todo);
route.delete('/:todoId',checkAuth, TodoController.delete_todo);

module.exports = route;
const express = require('express');
const route = express.Router();

const checkAuth =require('../middleware/check-auth');

const TodoController = require('../controllers/todo');

route.get('/', TodoController.get_todos);
route.post('/', TodoController.post_todo);
route.get('/:todoId', TodoController.get_todo);
route.patch('/:todoId', TodoController.update_todo);
route.delete('/:todoId', TodoController.delete_todo);

module.exports = route;
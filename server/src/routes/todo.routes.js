const express = require('express');
const router = express.Router();
const todoCtrl = require('../controllers/todo.controller');


// CRUD
router.post('/', todoCtrl.createTodo);
router.get('/', todoCtrl.listTodos);
router.get('/stats', todoCtrl.stats);
router.get('/:id', todoCtrl.getOne);
router.put('/:id', todoCtrl.updateTodo);
router.delete('/:id', todoCtrl.deleteTodo);


module.exports = router;
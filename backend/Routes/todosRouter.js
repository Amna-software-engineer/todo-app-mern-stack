const express = require('express');
const todosController = require('../Controllers/todosController');
const todosRouter= express.Router();


todosRouter.get("/",todosController.getTodos)
todosRouter.get("/:id",todosController.getSingleTodos)
todosRouter.post("/",todosController.CreataTodo)
todosRouter.patch("/edit-todo/:id",todosController.EditTodo)
todosRouter.delete("/",todosController.DeleteTodo)

module.exports = todosRouter;


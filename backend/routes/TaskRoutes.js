const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController')


// Get all tasks
router.get('/', TaskController.getAllTasks)

// Insert a new task
router.post('/', TaskController.insertTask)

//Obtain one task
router.get('/:id', TaskController.getOneTask)

// Update a task
router.put('/:id', TaskController.updateTask)

// Delete a task
router.delete('/:id', TaskController.deleteTask)

module.exports = router
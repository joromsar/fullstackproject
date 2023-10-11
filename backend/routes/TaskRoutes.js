const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController')


// Get all tasks
router.get('/', TaskController.getAllTasks)

//Obtain one task
router.get('/:id', TaskController.getOneTask)

// Insert a new task
router.post('/', TaskController.insertTask)

// Update a task
router.put('/:id', TaskController.updateTask)

// Delete a task
router.delete('/:id', TaskController.deleteTask)

module.exports = router
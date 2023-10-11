const express = require('express')
const router = express.Router();
const UserController = require('../controllers/UserController')

//Get all users
router.get('/', UserController.getAllUsers)

// Get only one user
router.get('/:id', UserController.getOneUser)

// Create a new user
router.post('/', UserController.insertUser)

// Update a user
router.put('/:id', UserController.updateUser)

// Delete a user
router.delete('/:id', UserController.deleteUser)

module.exports = router
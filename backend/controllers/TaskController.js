const { response } = require('express')
const task = require('../models/Task')

const getAllTasks = async (req, res) => {
    const tasks = await task.getAll()
    res.status(201).send({ tasks })
}

const insertTask = async (req, res) => {
    const { title, description, completed, targetdate } = req.body

    await task.insertTask({ title, description, completed, targetdate })
        .then((response) => {
            res.status(201).send({ message: `Task: ${title} created successfully!` })

        })
        .catch((error) => {
            res.status(401).send({ message: 'Error or invalid data' })
        })

}

const updateTask = async (req, res) => {
    console.log(req.body, req.params)
    const { id } = req.params
    const { title, description, completed, targetdate } = req.body
    console.log(id, title, description, completed, targetdate)

    const newTask = { title, description, completed, targetdate:new Date(targetdate) }
    console.log(newTask)

    await task.updateTask(id, newTask)
        .then((response) => {
            res.status(201).send({ message: `Task ${title} updated successfully` })

        })
        .catch((error) => {
            res.status(401).send({ message: 'Error or invalid data', error })
        })

}

const deleteTask = async (req, res) => {
    const { id } = req.params

    await task.deleteTask(id)
        .then((response) => {
            res.status(201).send({ message: 'Task deleted successfully' })

        })
        .catch((error) => {
            res.status(401).send({ message: 'Error Task not found' })
        })

}

const getOneTask = async (req, res) => {

    const { id } = req.params

    const result = await task.getOneTask(id)

    res.status(201).send({ task: result })

}

module.exports = {
    getAllTasks,
    getOneTask,
    deleteTask,
    updateTask,
    insertTask
}
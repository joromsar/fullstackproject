const { response } = require('express')
const user = require('../models/User')

const getAllUsers = async (req, res) => {
    const users = await user.getAllUser()
    res.status(201).send({ users })
}

const insertUser = async (req, res) => {
    const { firstname, lastname, email, password } = req.body

    await user.insertUser({ firstname, lastname, email, password })
        .then((response) => {
            res.status(201).send({ message: `User: ${firstname} created successfully!` })

        })
        .catch((error) => {
            res.status(401).send({ message: 'Error or invalid data' })
        })

}

const updateUser = async (req, res) => {
    const id = req.params.id
    const { firstname, lastname, email, password } = req.body

    await user.updateUser(id, { firstname, lastname, email, password })
        .then((response) => {
            res.status(201).send({ message: `User ${firstname} updated successfully`})

        })
        .catch((error) => {
            res.status(401).send({ message: 'Error or invalid data' })
        })

}

const deleteUser = async (req, res) => {
    const { id } = req.params

    await user.deleteUser(id)
        .then((response) => {
            res.status(201).send({ message: 'User deleted successfully' })

        })
        .catch((error) => {
            res.status(401).send({ message: 'Error Task not found' })
        })

}

const getOneUser = async (req, res) => {
    const { id } = req.params
    const result = await user.getOneUser(id)
    res.status(201).send({ user: result })

}

module.exports = {
    getAllUsers,
    getOneUser,
    deleteUser,
    updateUser,
    insertUser
}
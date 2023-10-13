const mongoose = require("mongoose")

const taskSchema = {

    title: {
        type: String,
        required: true
    },

    description: String,

    targetdate: {
        type: Date,
        required: true,
        default: new Date()
    },

    completed: {
        type: Boolean,
        default: false
    }
}

const Task = mongoose.model('Task', taskSchema)

const getAll = async () => {
    const result = await Task.find()
    return result
}

const getOneTask = async(id) => {
    return await Task.findById(id)
}

const insertTask = async (task) => {
    return await Task.create(task)
}

const updateTask = async (id, newTask) => {

    const oldTask = await Task.findById(id)

    oldTask.title = newTask.title
    oldTask.description = newTask.description
    oldTask.targetdate = newTask.targetdate
    oldTask.completed = newTask.completed

    return await oldTask.save()

}

const deleteTask = async (id) => {
    return await Task.deleteOne({_id: id})
}


module.exports = {
    getAll,
    getOneTask,
    deleteTask,
    updateTask,
    insertTask
}
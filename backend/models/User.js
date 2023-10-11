const mongoose = require('mongoose')

const userSchema = {

    firstname:{
        type: String,
        required: true
    },

    lastname:{
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required:true
    },

    password: {
        type: String,
        required: true

    },

    
}

const User = mongoose.model('User', userSchema)

const getAllUser = async () => {
    const result = await User.find()
    return result
}

const getOneUser = async(id) => {
    return await User.findById(id)
}

const insertUser = async (task) => {
    return await User.create(task)
}

const updateUser = async (id, newTask) => {

    const oldUser = await User.findById(id)

    oldUser.title = newTask.title
    oldUser.description = newTask.description
    oldUser.targetdate = newTask.deadline
    oldUser.completed = newTask.done

    return await oldUser.save()

}

const deleteUser = async (id) => {
    return await User.deleteOne({_id: id})
}


const validateUser = async (email, password) => {
    
    const user = await User.find({email: email})
    
    if (user.password === password){

        return {
            email: user.email,
            name: user.name
        }
    } else {
        return null
    }
}

module.exports = {
    validateUser,
    getAllUser,
    getOneUser,
    insertUser,
    updateUser,
    deleteUser

}
const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;

const Routes = require('./routes')

const server = express();

server.use(express.json())

server.use(function (req, res, next) {  

res.setHeader('Access-Control-Allow-Origin', '*'); 
res.setHeader('Access-Control-Allow-Methods', '*');
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

next();

});

server.use('/api/v1/users', Routes.UserRoutes);
server.use('/api/v1/tasks', Routes.TaskRoutes);


const mongooseConnect = async () => {

    try {
        await mongoose.connect('mongodb+srv://jeromero7884:OthnqlyJ8zJLDMzO@cluster0.f9bmpwk.mongodb.net/TaskApp?retryWrites=true&w=majority')
        console.log('Conexion Exitosa a Mongo DB');

    } catch (error) {
        console.error(error);

    }
}

mongooseConnect();


server.listen(PORT, () => {
    console.log(`Backend listen at ${PORT}`)
})
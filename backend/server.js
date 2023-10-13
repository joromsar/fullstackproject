const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const Routes = require('./routes')
const server = express();
server.use(express.json())
require('dotenv').config()

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
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Conexion a Mongo Exitosa');
    } catch (error) {
        console.error(error);

    }
}

mongooseConnect();


server.listen(PORT, () => {
    console.log(`Backend listen at ${PORT}`)
})
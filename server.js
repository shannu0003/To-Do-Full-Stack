const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const todosRouter = require('./routes/todo');
app.use('/todos', todosRouter);
app.use(cors());
mongoose.connect('mongodb://localhost:27017',);

const connection = mongoose.Connection;
connection.once('open',() =>{

console.log('mongodb connection established succesfully');
});
app.listen(PORT)


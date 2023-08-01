const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todoroutes = require('./routes/todoroutes');


const app = express;

app.use(cors());



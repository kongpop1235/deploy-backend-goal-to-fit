const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config');

require('dotenv').config();

const app = express();
const PORT = config.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use(express.json());



if (config.isVercel) {
  app.use( async (req, res, next) => {
    await mongoose.connect(config.mongoUri, config.mongoOptions)
    return next();
  })
}

const login = require('./routes/login');
app.use('/login', login);

const checkusername = require('./routes/checkUsername');
app.use('/checkusername', checkusername);

const signup = require('./routes/signup');
app.use('/signup', signup);

const add = require('./routes/activity/walk');
app.use('/add', add);

module.exports = app;
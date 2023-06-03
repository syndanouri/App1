const express = require('express');
const { register, login, getAllUsers } = require('../controllers/user');
const { isAuth } = require('../middelwares/isAuth');

const userRoute = express.Router();


userRoute.post('/register',register);
userRoute.post('/login',login)
userRoute.get('/list',isAuth,getAllUsers)


module.exports = userRoute
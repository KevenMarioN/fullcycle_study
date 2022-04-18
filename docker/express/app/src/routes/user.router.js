const express = require('express');
const UserController = require('../controllers/UserController');

const userRouter = express.Router();


userRouter.get('/user', (request,response) => {
  const USERS = new UserController().getAllUsers()
  response.send(USERS).status(200);
})



module.exports = userRouter;
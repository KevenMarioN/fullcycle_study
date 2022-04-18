const express = require('express');
const userRouter = require('./routes/user.router');

const router = express.Router();

router.use(userRouter)

module.exports = router;
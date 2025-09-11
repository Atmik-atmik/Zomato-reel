const express = require('express');
const authController = require("../controller/auth.controllers")

const router = express.Router();

router.post('/user/register',authController.registerUser);
router.post('/user/login',authController.loginUser);




module.exports = router;
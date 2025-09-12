const express = require('express');
const authController = require("../controller/auth.controllers")

const router = express.Router();

router.post('/user/register',authController.registerUser);
router.post('/user/login',authController.loginUser);
router.post('/user/logout',authController.logoutUser);


//food partner auth api

router.post('/food-partner/register',authController.registerFoodPartner)
router.post('/food-partner/login',authController.loginFoodPartner)
router.post('/food-partner/logout',authController.logoutFoodPartner)


module.exports = router;
const express = require('express')
const foodController = require('../controller/food.controller')
const authMiddleware = require('../middlewares/auth.middleware') 



const router = express.Router()

// Post /api/food/   it is protected means only foodparter can add
router.post('/', authMiddleware.authFoodPartnerMiddleware, foodController.createFood)


module.exports = router;

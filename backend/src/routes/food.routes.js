const express = require('express')
const foodController = require('../controller/food.controller')
const authMiddleware = require('../middlewares/auth.middleware') 
const multer = require('multer');
const router = express.Router()

const upload = multer({
    storage : multer.memoryStorage()
})

// Post /api/food/   it is protected means only foodparter can add
router.post('/', authMiddleware.authFoodPartnerMiddleware,upload.single("video"), foodController.createFood)

// Get  /api/food/[protected]

router.get('/', authMiddleware.authUserMiddleware,foodController.getFoodItems)

module.exports = router;

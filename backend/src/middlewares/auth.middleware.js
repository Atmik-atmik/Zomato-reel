const foodPartnerModel = require("../models/foodPartner.model");
const jwt = require('jsonwebtoken');

async function authFoodPartnerMiddleware(req,res,next) {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                message: "Please login first."
            })
        }

        try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET); //if token is correct then jwt returns id of user or other info which I added while register/login with token.If incorrect then returns err.
            const foodPartner = await foodPartnerModel.findById(decoded.id);

            req.foodPartner = foodPartner  //creating new property in req and storing its value and next fuction res will have this property/attribute

            next()


        } catch (err) {
            return res.status(401).json({
                message: "Invalid token"
            })
        }
}

module.exports = {
    authFoodPartnerMiddleware,
}
const foodModel = require("../models/food.model");
const storageService = require('../services/storage.service')
const {v4: uuid} = require('uuid');



async function createFood(req,res) {
    // console.log(req.foodPartner); //right now code is not checking whehter this token belogs to user or food partner hence if food partner is not logged in then it won't print this .

    // console.log(req.body);
    // console.log(req.file)
    
    const fileUploadResult = await storageService.uploadFile(req.file.buffer,uuid())

    const foodItem = await foodModel.create({
        name: req.body.name,   //data validation and dow file both are not included because they are complex for beginner
        
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id
    })

    res.status(201).json({
        message: "food created succesfully",
        food: foodItem
    })
}


module.exports = {
    createFood,
}
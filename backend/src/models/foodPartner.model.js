const mongoose = require('mongoose');

const foodPartnerSchema = new mongoose.Schema({
    name: { //business name
        type: String,
        required:true
    },

    contactName: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const foodPartnerModel = mongoose.model("foodpartner",foodPartnerSchema)

// foodPartnerModel → The variable holding your Mongoose model, used to run queries.

// "foodpartner" → The model name, which Mongoose maps to the MongoDB collection (foodpartners).

// foodPartnerSchema → The schema that defines the structure and rules of documents in that collection.

module.exports = foodPartnerModel
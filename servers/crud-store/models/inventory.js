const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InventorySchema = new Schema ({
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model("Inventory", InventorySchema)
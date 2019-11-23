const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')


inventoryRouter.get("/", (req, res) => {
    Inventory.find((err, inventory) => {
        if(err) {
            return res.status(500).send(err)
        }
        return res.status(200).send(inventory)
    })
})

inventoryRouter.get("/:_id", (req, res) => {
    Inventory.findById(req.params.inventoryId, (err, inventory) => {
        if(err) {
            return res.status(500).send(err)
        }
        return res.status(200).send(inventory)
    })
})

inventoryRouter.post("/", (req, res) => {
    const newInventory = new Inventory(req.body)

    newInventory.save(err => {
        if (err) {
            return res.status(500).send(err)
        }
        return res.status(200).send(newInventory)
});

})

inventoryRouter.put("/:_id", (req, res) => {
   
    Inventory.findByIdAndUpdate(req.params._id, req.body, {new: true}, (err, inventory) => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(inventory)
        }
    )

})

inventoryRouter.delete("/:_id", (req, res) => {
    Inventory.findByIdAndRemove(req.params._id, (err, inventory) => {
        if (err) {
            return res.status(500).send(err)
        }
        const response = {
            message: "Inventory item successfully deleted", 
            id: inventory._id
        }
        return res.status(200).send(response)
    })
})

module.exports = inventoryRouter
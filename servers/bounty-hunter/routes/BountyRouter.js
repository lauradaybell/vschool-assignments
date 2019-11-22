const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')


bountyRouter.get ("/", (req, res) => {
    Bounty.find((err, bounties) => {
        if (err) {
            return res.status(500).send(err)
            
        }
        return res.status(200).send(bounties)
    })
})

bountyRouter.get("/:_id", (req, res) => {
    Bounty.findById(req.params.bountyId, (err, bounties) => {
        if (err) {
            return res.status(500).send(err)
            
        }
        return res.status(200).send(bounties)
    })
})

bountyRouter.post("/", (req, res) => {
    const newBounty = new Bounty(req.body)

    newBounty.save(err => {
        if (err) {
            return res.status(500).send(err)
        }
        return res.status(200).send(newBounty)
});

})

bountyRouter.put("/:_id", (req, res) => {
    Bounty.findByIdAndUpdate(req.params._id, req.body,{new: true}, (err, bounty) => {
            if (err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(bounty)
        }
    )

})

bountyRouter.delete("/:_id", (req, res) => {
    Bounty.findByIdAndRemove(req.params._id, (err, bounty) => {
        if (err) {
            return res.status(500).send(err)
        }
        const response = {
            message: "Bounty successfully deleted", 
            id: bounty._id
        }
        return res.status(200).send(response)
    })
})

module.exports = bountyRouter
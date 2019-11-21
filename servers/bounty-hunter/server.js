const express = require('express');
const app = express();
const uuid = require('uuid/v4')
const morgan = require('morgan')

app.use(express.json())

const bounties = [
    {
        firstName: 'George',
        lastName: 'Bert',
        living: true,
        bounty: 200,
        type: 'Sith',
        _id: uuid()
    },
    {
        firstName: 'Hieric',
        lastName: 'Dae',
        living: true,
        bounty: 205,
        type: 'Jedi',
        _id: uuid()
    },
    {
        firstName: 'Hannah',
        lastName: 'Montana',
        living: true,
        bounty: 200,
        type: 'Sith',
        _id: uuid() 
    }
]

app.use(morgan("dev"))

app.get("/bounty", (req, res) => {
    res.send(bounties)
})

app.post("/bounty", (req, res) => {
    res.send(req.body)
    const newBounty = req.body
    console.log(req.body)
    newBounty._id = uuid()
    newBounty.living = true
    bounties.push(newBounty)
    res.send(newBounty)
})

app.delete("/bounty/:_id", (req, res) => {
    const bountyId = req.params._id
    const bountyIndexToDelete = bounties.findIndex(bounty => bounty._id === bountyId)
    const bountyName = bounties[bountyIndexToDelete].firstName
    bounties.splice(bountyIndexToDelete, 1)
    res.send(`Successfully deleted ${bountyName}`)
})

app.put("/bounty/:_id", (req, res) => {
    const bountyId = req.params._id
    const bountyToUpdate = bounties.find(bounty => bounty._id === bountyId)
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bountyToUpdate, req.body)
    console.log(updatedBounty)
    bounties.splice(bountyIndex, 1, updatedBounty)
    res.send (bounties)

})


app.listen(6000, () => {
    console.log('server is running')
})
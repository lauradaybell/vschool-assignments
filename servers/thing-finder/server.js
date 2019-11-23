const express = require('express')
const app = express()
const morgan= require('morgan')


app.use(express.json())

app.use(morgan("dev"))

const inventory= [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

// app.get("/", (req, res) => {
//     res.send(inventory)
// })

app.get("/inventory", (req, res) => {
    if(req.query.type){
        // console.log(req.query.type)
        res.send(inventory.filter(item => item.type === req.query.type))
    } else {
        res.send(inventory)
    }
    // console.log(req.params)
})

app.listen(5000, () => {
    console.log('server is running')
})
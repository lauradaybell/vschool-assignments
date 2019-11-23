const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect('mongodb://localhost:27017/cruddb',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: false,
        useUnifiedTopology: true
    
    }, () => console.log("Connected to MongoDB" ))

app.use("/inventory", require("./routes/inventory"))

    app.listen(8000, () => {
        console.log('server is running')
    })
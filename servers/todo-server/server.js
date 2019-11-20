const express = require('express');
const app = express();
const uuid = require('uuid/v4')

const todos = [
    {
        name: "sweep",
        description: "sweep",
        completed: false,
        _id: uuid()
    },
    {
        name: "mop",
        description:"mop",
        completed: false,
        _id: uuid()
    }
]

app.get('/todos', (req, res) => {
    res.send(todos)
})

app.get('/todos/:_id', (req, res) => {
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    res.send(foundTodo)
})

app.post('/todos', (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send(newTodo)
})

app.delete('/todos/:_id', (req, res) => {
    const todoId = req.params._id
    const todoIndexToDelete = todos.findIndex(todo => todo._id === todoId)
    const todoName = todos[todoIndexToDelete].name
    todos.splice(todoIndexToDelete, 1)
    res.send(`Successfully deleted ${todoName}`)
})

app.put('/todos/:_id', (req, res) => {
    const todoId = req.params._id
    const todoToUpdate = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todoToUpdate, req.body)
    todos.splice(todoToUpdate, 1, updatedTodo)
    res.send(updatedTodo)
})



app.listen(7000, () => {
    console.log('server is running ')
})


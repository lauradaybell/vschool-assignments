// const axios = require("axios")
const items = document.getElementById("items")
const list = document.list
// const items = document.getElementById("")

list.addEventListener("submit", function(e) {
    e.preventDefault();
    const newTodo = {
        title: list.name.value,
        description: list.description.value,
        imgUrl: list.imgUrl.value

    }
    axios.post("https://api.vschool.io/laura/todo", newTodo).then(response => {
        makeTodo(response.data)
    })
})


axios.get("https://api.vschool.io/laura/todo").then((response) => {
    const todos = response.data
    for (let i = 0; i < todos.length; i++) {
        makeTodo(todos[i])
    }
})

function makeTodo(item) {
    let h3 = document.createElement("h3");
    let h5 = document.createElement("h5");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const container = document.createElement("div");
    const button = document.createElement("button");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    checkbox.type="checkbox"
    checkbox.name="name"
    checkbox.id= item._id
    checkbox.value="value"
    checkbox.addEventListener("change", e => {
        axios.put("https://api.vschool.io/laura/todo/" + item._id, {completed: e.target.checked}).then (response =>  {h3.style.textDecoration = response.data.completed ? "line-through" : "none"})
    })
    h3.textContent = item.title
    h5.textContent = item.price
    p.textContent = item.description
    img.src = item.imgUrl
    button.className = "delete"
    button.textContent = `DELETE`
    button.addEventListener('click', () => {
        axios.delete("https://api.vschool.io/laura/todo/" + item._id).then(response => {
            console.log(response.data.msg)
            constainer.remove()
        })
        })
    label.appendChild(document.createTextNode(`completed`))
    container.appendChild(h3)
    container.appendChild(h5)
    container.appendChild(img)
    container.appendChild(p)
    container.appendChild(label)
    container.appendChild(checkbox)
    container.appendChild(button)
    items.appendChild(container)

    if(item.completed === true) {
        h3.innerHTML = `<s>${item.title}</s>`
    } 

}


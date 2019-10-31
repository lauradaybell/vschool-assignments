const item= document.addItem
const myList = document.getElementById("list")
const erase = document.getElementById("delete")


item.addEventListener ('submit', (e) => {
    event.preventDefault() 
    let newSpot = document.createElement("li")
    let newDiv = document.createElement("div")
    let newItem = document.createTextNode(item.title.value);
    let newButton = document.createElement("button");
    let buttonName =  document.createTextNode("x");
    newButton.appendChild(buttonName);
    newButton.addEventListener('click', function(e) {
        this.parentNode.remove()
    })
    // buttonName.appendChild(newButton);
    newDiv.appendChild(newItem);
    newSpot.appendChild(newDiv)
    newSpot.appendChild(newButton)

    document.getElementById("list").appendChild(newSpot)
    
})

erase

// document.getElementsByClassName("new").textContent=(newItem)

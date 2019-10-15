const item= document.addItem
const myList = []




item.addEventListener ('submit', (e) => {
    event.preventDefault() 
    let newItem = item.title.value
    myList.push(newItem);
    console.log(myList)
    document.getElementById("new").innerHTML=(myList)  
})

// document.getElementsByClassName("new").textContent=(newItem)

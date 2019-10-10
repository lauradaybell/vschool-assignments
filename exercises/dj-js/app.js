const myBox = document.getElementById("box")

myBox.addEventListener("mouseover", function() {
    this.style.backgroundColor = 'blue';
})

myBox.addEventListener("mousedown", function() {
    this.style.backgroundColor = "red";
})

myBox.addEventListener("mouseup", function() {
    this.style.backgroundColor = "yellow";
})

myBox.addEventListener("dblclick", function() {
    this.style.backgroundColor = "green";
})

window.addEventListener("scroll", function(){
    myBox.style.backgroundColor = "orange";
})

document.addEventListener("keypress", function() {
    if (event.key === "g"){
        myBox.style.backgroundColor = "green"
    } else if (event.key === "r") {
        myBox.style.backgroundColor = "red"
    } else if (event.key === "b") {
        myBox.style.backgroundColor = "blue"
    }
})
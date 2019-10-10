const myBox = document.getElementById("box")

myBox.addEventListener("mouseover", function() {
    myBox.textContent= event.x + ", " + event.y
})
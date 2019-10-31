const head = document.getElementById("header")
const head2 = document.getElementById("header")
const name = document.getElementById("name")

function addHeader() {
    let header = document.createElement("h1");
    header.textContent = "JavaScript Made This!!";
    let header2 = document.createElement("span");
    const name = document.createElement("span")
    name.textContent = "Laura"
    name.className = "name"
    header2.className = "header"
    header2.textContent =" wrote the JavaScript";
    head.appendChild(header)
    head2.appendChild(name)
    head2.appendChild(header2)
    // head2.textContent = name.textContent + "wrote the JavaScript"
    
}
const conversation = ["she said what???", "she seriously climbed the tree", "did she get the honey??", "well, she got the bee..."]


addHeader()
const names = document.getElementsByClassName("message")
function changeConversation(arr) {
    for (i = 0; i < conversation.length; i++) {
        names[i].textContent = conversation[i]
    }
}
changeConversation("conversation")



const button = document.getElementById("clearButton")

button.addEventListener("click", function(){
    for (i = 0; i < names.length; i++) {
        names[i].textContent = ""
    }
})




const colorScheme = document.getElementById("themeDropDown")


function changeColor() {
    colorScheme.addEventListener("change", function() {
   
        for (let i = 0; i < names.length; i++) {
            names[i].classList.toggle("theme-two")
        }
})

}
changeColor()



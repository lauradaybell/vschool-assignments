const head = document.getElementById("header")
const name = document.getElementById("name")
function addHeader() {
    let header = document.createElement("h1");
    header.textContent = "JavaScript Made This!!";
    let header2 = document.createElement("h2");
    header2.textContent ="Laura wrote the JavaScript";
    head.appendChild(header)
    head.appendChild(header2)
    
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







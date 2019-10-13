// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function



const form = document.getElementById("submitMe")
const button = document.getElementById("button")

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let userName = form.userName.value;
    let age = form.age.value;
    alert (`Your name is ${userName} and your are ${age} years old.`)

})
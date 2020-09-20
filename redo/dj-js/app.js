let myBox = document.getElementById('box')



// let boxDown = () => {myBox.style.backgroundColor = 'red'}
let boxUp = () => {myBox.style.backgroundColor = 'yellow'}
let boxDbl = () => {myBox.style.backgroundColor ='green'}
// let boxScroll = () => {myBox.style.backgroundColor ='orange'}
let boxHover = () => {myBox.style.backgroundColor ='blue'}

myBox.addEventListener('mousedown', function() {myBox.style.backgroundColor = 'red'})
myBox.addEventListener('mouseup', boxUp)
myBox.addEventListener('dblclick', boxDbl)
window.onscroll = function() {myBox.style.backgroundColor ='orange'} 
myBox.addEventListener('mouseover', boxHover)
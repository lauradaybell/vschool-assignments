const add = document.addition
const subtract = document.subtraction
const multiply = document.multiplication

const addFirst= add.number1
const addSecond= add.number2
const subFirst= subtract.number1
const subSecond= subtract.number2
const timesFirst= multiply.number1
const timesSecond= multiply.number2

add.addEventListener('submit', function(){
    let newNum = +addFirst.value + +addSecond.value;
    event.preventDefault();
    add.result.value = newNum
    document.getElementById("results").innerHTML = (addFirst.value) + " + " +(addSecond.value)+ " = " + (newNum)
})
subtract.addEventListener('submit', function(){
    let newNum = +subFirst.value - +subSecond.value;
    event.preventDefault()
    subtract.result.value = newNum
    document.getElementById("results").innerHTML = (subFirst.value) + " - " +(subSecond.value)+ " = " + (newNum)
})
    


multiply.addEventListener('submit', function(){
    let newNum = +timesFirst.value * +timesSecond.value;
    event.preventDefault();
    console.log(newNum)
    multiply.result.value = newNum
    document.getElementById("results").innerHTML = (timesFirst.value) + " x " +(timesSecond.value)+ " = " + (newNum)
})


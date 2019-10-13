const readlineSync = require("readline-sync")

const operations = ["add", "sub", "mul", "div"]
const mathType = readlineSync.keyInSelect(operations, "Please enter the operation to perform")
const answer1 = readlineSync.question("Please enter your first number", [])
const answer2 = readlineSync.question("Please enter your second number", [])

function math(answer1, answer2) {
    if (mathType === 0) {
        console.log(+answer1 + +answer2)
    } else if (mathType === 1) {
        console.log (answer1 - answer2)
    } else if (mathType === 2) {
        console.log (answer1 * answer2)
    } else if (mathType === 3) {
        console.log(answer1 / answer2)
    } else {
        console.log("Thanks for stopping by.")
    }

}
math(answer1, answer2)
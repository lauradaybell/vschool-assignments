const readlineSync = require('readline-sync')

let numOne = readlineSync.question('What is the first number?')
let numTwo = readlineSync.question('What is the second number?')



let calc = (numOne, numTwo) => {

   
    operations = ['add', 'subtract', 'multiply', 'divide']
    index = readlineSync.keyInSelect(operations, 'Which operation?');  
    
    if(operations[index] === 'add') {
        console.log(operations[index])
        let result = numOne + numTwo
        console.log(`The answer is ${result}`)
    } else if (operations[index] === 'subtract'){
        let result = numOne - numTwo
        console.log(`The answer is ${result}`)
    } else if (operations[index] === 'multiply') {
        let result = numOne * numTwo
        console.log(`The answer is ${result}`)
    } else if (operations[index] === 'divide') {
        let result = numOne / numTwo
        console.log(`The answer is ${result}`)
    }
    
}
calc(numOne, numTwo)
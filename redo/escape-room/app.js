const readlineSync = require('readline-sync')

let isAlive = true
let foundKey = false
let gameWon = false
const options = ['Put hand in hole', 'Find the key', 'Open the door']

while(isAlive && !gameWon) {
    index = readlineSync.keyInSelect(options, 'What will you do now?')
    if (options[index] === 'Put hand in hole') {
        console.log(`Death came swiftly`)
        isAlive = false
    } else if (options[index] === 'Find the key') {
        if(foundKey === false) {
            foundKey = true
            console.log(`You found the key!!`)
        } else {
            console.log(`How many keys do you need????`)
        }
    } else if (options[index] === 'Open the door') {
        if(foundKey === true) {
            console.log(`It was close, but you managed to escape with your life!`)
            gameWon = true
        } else {
            console.log(`The door seems to be stuck.`)
        }
    }

}
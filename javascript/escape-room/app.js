const readlineSync = require("readline-sync");
const name = readlineSync.question("What is your name?");
const newOptions = ["Put your hand in the hole", "Open the door"]
const options = ["Put your hand in the hole", "Find a key", "Open the door"]
const choice = readlineSync.keyInSelect(options, "Which option will you choose?", {cancel: false})


let isAlive = true
let hasKey = false

while (isAlive) {
 if (choice === 0){
     die()
 } else if (choice === 1) {
     getKey()
 } else {
     notSoFast()
 }
//  if (newChoice === 0){
//      dieAgain();
//  } else if (newChoice === 1) {
//     win()
//  }
// 
    function die() {
            isAlive = false;
            console.log(name + " you died... How sad for you! :(");
        }
    function getKey () {
        // if (newChoice === 0){
        //     dieAgain();
        // } else if (newChoice === 1) {
        //    win()
        // }
        hasKey = true;
        let newChoice = readlineSync.keyInSelect(newOptions, name + " you found the key!!! What will you do next?", {cancel: false});
        if (newChoice === 0){
            die();
        } else if (newChoice === 1) {
           win()
        }}
    function dieAgain () {
        isAlive = false;
        console.log(name + " you died... How sad for you!") 
    }
            
    function win(){
    console.log(name + " you won!!! Yay for freedom!  We have cookies on the porch- you deserve it!");
    isAlive = false;
    }
            
    function notSoFast () {
        // if (wrongChoice === 0){
        //     die()
        // } else if (Wrongchoice === 1) {
        //     getKey()
        // } else {
        //     notSoFast()
        // }
    let wrongChoice = readlineSync.keyInSelect(options, "That would be too easy!  Try again...")
    if (wrongChoice === 0){
        die()
    } else if (wrongChoice === 1) {
        getKey()
    } else {
        notSoFast()
    }
}
}





// while (isAlive){
//     if (choice === 0 ) {
//         console.log (name + " you died... That's sad.");
//         isAlive = false;
//         } else if (choice === 1) {
//             hasKey = true;
//             console.log (name + " you found the key!!!  What next??");
//             const choice = readlineSync.keyInSelect(options, "Which option will you choose?", {cancel: false});
//             if (choice === 0) {
//                 console.log (name + " you died... That's sad.");
//                 isAlive = false;
//             } else if (choice === 1) {
//                 hasKey= true
//                 console.log (name + " you found the key!!!  What next??");
//                 const choice = readlineSync.keyInSelect(options, "Which option will you choose?", {cancel: false});
//             } else if (choice === 2) {
//                 if(hasKey){
//                     console.log("You win!!");
//                         break;
//                 } else{
//                 console.log('You need to find a key first!');
//                 break}
//             }
            
//         }else if (choice === 2){
//             if (hasKey) {
//                 console.log("You win!!");
//                 } else {
//                 console.log("You need to find a key first!");
//                 const choice = readlineSync.keyInSelect(options, "Which option will you choose?", {cancel: false});
//                 }
//                 } 
                
    //     else if (choice === 2) {
    //         console.log(name + "you win!!!");
    //         break
        
    // }
// }

// function win(){
    
//     if (choice === 0 ) {
//         console.log (name + " you died... That's sad.");

//         } else if (choice === 1) {
            // const newChoice = readlineSync.keyInSelect(options, "Good choice, " + name + ". Now what will you do?")
//             if (newChoice === 0) {
//                 console.log(name + "you died... That's sad.")
//                 }else if (newChoice === 2){
//                     console.log("You win!!")
//                 } else {
//                 const newChoice = readlineSync.keyInSelect(options, "Good choice, " + name + ". Now what will you do?")
//                 }
//             } else if (choice === 2) {
//         const newChoice = readlineSync.keyInSelect(options, "Good choice, " + name + ". Now what will you do?")
//     }
// } 
// win()

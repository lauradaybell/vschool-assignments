// function capitalizeAndLowerCase(str) {
// return str.toUpperCase() + str.toLowerCase()
// }
// // console.log(capitalizeAndLowerCase("happy"))
// capitalizeAndLowerCase("happy")

// function returnHalfTheLength(str) {
//     return Math.floor(str.length / 2)
// }
// console.log(returnHalfTheLength("hello world"))

// function returnFirstHalfOfString(str) {
//     return str.slice(0, (str.length / 2))
// }
// console.log(returnFirstHalfOfString("Hello World"))

// function capitalizeAndLowerCaseSplit(str) {
//     let upper =  str.slice(0, Math.floor(str.length / 2))
//     let lower = str.slice(str.length / 2)
//     return upper.toUpperCase() + lower.toLowerCase()
// }
// // console.log(capitalizeAndLowerCaseSplit("Betsy"))
// console.log(capitalizeAndLowerCaseSplit("aldsjf;ldjskf||alkdsjf;ksdjf"))

function capitalizeNextSpace(str) {
    // for (i = 0; i < str.length; i++) {
        // str.slice();
        
       const lower =str.toLowerCase().slice();
       const upper = []
          
    //    console.log(lower);
       upper.push(lower[0].toUpperCase())
       for (i = 1; i < lower.length; i++) {
           if (lower[i - 1] === " ") {
               upper.push(lower[i].toUpperCase())
           } else {
               upper.push(lower[i])
           }
       } 
    //    console.log(upper)
       let newString = ""
       for (i = 0; i < upper.length; i++) {
           newString += upper[i]
       }
       console.log(newString)

    //     if (lower[i-1] === " ") {
    //         let caps = lower.toUpperCase(lower[i]);
    //     } 

    //     if (str[i] === " ") {
    //         str[i + 1].toUpperCase();
            
    //     } else {
    //         str[i].toLowerCase()         
    //     }
    // }
    // return str
    }



capitalizeNextSpace("a new DAy is Dawning")

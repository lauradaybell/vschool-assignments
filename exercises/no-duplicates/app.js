// separate letters into individual array items
// loop and check index.  If indexOf === -1, push.

function removeDuplicates(input) {
    const charArray = input.split("");
    const newArray = [];
    for (i = 0; i < charArray.length; i++) {
           if (newArray.indexOf(charArray[i]) === -1) {
               newArray.push(charArray[i])
          
        //    console.log(newArray)
       }
    }
    return newArray
    
}
console.log(removeDuplicates("bookkeeper"))


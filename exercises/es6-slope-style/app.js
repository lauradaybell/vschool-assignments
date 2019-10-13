// function collectAnimals(...str) {  
//     return[...str]
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// // // ["dog", "cat", "mouse", "jackolope", "platypus"]

// function combineFruit(fruit, sweets, vegetables){
    
     
//         console.log(fruit = [fruit],
//         sweets = [sweets],
//         vegetables = [vegetables])
//         let {fruit, sweets, vegetables} = food
//         console.log(food)
// }


// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrit"])

                 

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
//   function parseSentence(){
//       let {location, duration} = vacation;
      
//    console.log(`We're going to have a good time in ${location} for ${duration}`)
//   }
// parseSentence()

// function returnFirst(items){
//     let {items} = firstItem; 
//     return firstItem
// }

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    
    let {...arr} = favoriteActivities;
    /*your code here*/
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav.
}

returnFavorites(favoriteActivities)

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (let i = 9; i > -1; i--) {
//     console.log(i)
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]

// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

// const numbers = []

// for (let i = 0; i < 10; i++){
//     numbers.push(i)
// }
// console.log(numbers)

// for (let i=0; i < 101; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// const newFruit = []
// for (let i = 0; i < fruit.length; i++) {
//     if (i % 2 === 0) {
//         newFruit.push(fruit[i])
//     }
// }
// console.log(newFruit)

// const peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

//   for (let i = 0; i < peopleArray.length; i++) {
//       console.log(peopleArray[i].name)
//   }
// const names = []
// const occupations = []

// for (let i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation)

// }
// console.log(names)
// console.log(occupations)

// const everyOtherName = []
// const everyOtherOccupation = []

// for (i = 0; i < peopleArray.length; i++) {
//     if (i % 2 === 0) {
//         everyOtherName.push(peopleArray[i].name)
//     } else {
//         everyOtherOccupation.push(peopleArray[i].occupation)
//     }
// }
// console.log(everyOtherName)
// console.log(everyOtherOccupation)

// const grid = []


// for (let i = 0; i < 3; i++) {
   
//     const babyGrid = [];

//     for (let j = 0; j < 3; j++) {
//         babyGrid.push(0)
//     }
//     grid.push(babyGrid)
// }
// console.log(grid)
// // console.log(babyGrid)

// const grid = []

// for (let i = 0; i < 3; i++) {
//     const babyGrid = [];
//     for (let j = 0; j < 3; j++) {
//         babyGrid.push(i)
//     }
//     grid.push(babyGrid)
// }
// console.log(grid)

const grid = []

for (let i = 0; i < 3; i++) {
    const babyGrid = [];
    for (let j = 0; j < 3; j++) {
        babyGrid.push(j)
    }
    grid.push(babyGrid)
}
console.log(grid)

// const grid = [[0, 1, 2], 
//               [0, 1, 2], 
//               [0, 1, 2]]

// for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j <grid[i].length; j++) {
//         if (typeof grid[i][j] === "number") {
//             grid[i][j] = "x"
//         }
//     }
      
// }
// console.log(grid)
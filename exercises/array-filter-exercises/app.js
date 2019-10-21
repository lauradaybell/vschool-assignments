// const numbers = [3, 6, 8, 2]
// const highNumbers = []
// function fiveAndGreaterOnly(arr) { highNumbers.push(arr.filter(arr[i]>=5))
//     // for (let i =0; i< numbers.length; i++) {
//     //   return highNumbers.push(arr[i] >=5)
//     // }
    
    
//   }
  
//    /// [6, 8]
//    console.log(fiveAndGreaterOnly(numbers))
  
//   const fiveAndUp = numbers.filter((number) => number >=5)
//   console.log(fiveAndUp)
// const numbers = [3, 6, 8, 2]

// const evens = numbers.filter((number) => number % 2 === 0)
//   console.log(evens); /// [6, 8, 2]
// const words = ["dog", "wolf", "by", "family", "eaten", "camping"]

// const shortWords = words.filter((word) => word.length < 6)
//   console.log(shortWords); // ["by", "dog", "wolf", "eaten"]
  
// const people = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ];
// const members = people.filter((person) => person.member = true)
// console.log(members)
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

const names = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
const oldEnough = names.filter((name) => name.age >= 18)
console.log(oldEnough)
// numbers = [2, 3, 4, 5, 6]

// const doubleNumbers = numbers.map((number) => number *2 )

// console.log(doubleNumbers)

// const stringItUp = numbers.map((number)=> number.toString())
    

// console.log(stringItUp)

// const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// const capitalizeNames = names.map((name) => name.charAt(0).toUpperCase() + name.toLowerCase().slice(1))
   
// console.log(capitalizeNames)

// const people =[
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]; 
// let names = []

// const namesOnly = people.map((person) => person.name)
   
        
// console.log(namesOnly)

// const people = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]



// const stringChange = people.map((person) => person.age < 18 ? `${person.name} is under age!!` : `${person.name} can go to the Matrix`)
// // (condition) ? (code if true) : (code if false) // Ternary
// console.log(stringChange)

const people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }]

// const newArray = []

const splitArray = people.map(person => `<h1>${person.name}</h1><h2>${person.age}</h2>` )


console.log(splitArray)
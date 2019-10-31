const arr = [1, 2, 3]

// const total = arr.reduce((total, number) =>  total + number )

// console.log(total)
// const combined = arr.reduce((num1, num2) => num1.toString() +num2.toString())
// console.log(combined)

// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]
// let count = 0
// const votes = voters.map((voter) => {
//     if (voter.voted = "true") {
//         count =+1}
//        return count})

// console.log(count)

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const cost = wishlist[i].price.reduce((total, num) => total + num)

console.log(cost)
// const numbers = [1, 3, 5, 2, 90, 20]
// const sorted = numbers.sort((a, b) => a - b)

// console.log(sorted)

// const sorted = numbers.sort((a, b) => b-a)
// console.log(sorted)

// const array = ["dog", "wolf", "by", "family", "eaten"]
// const shortToLong = array.sort((a, b) =>a.length - b.length)
// console.log(shortToLong)
// const alphabetical = array.sort()
// console.log(alphabetical)

const people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
const byAge = people.sort((a, b) => a.age - b.age)

console.log(byAge)
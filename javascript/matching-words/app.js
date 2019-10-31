// const newArr = []
function noDupes(str) {
    const newArr = []
    let oldArr = str.toLowerCase().split(" ")
    // console.log(oldArr)
    for (let i = 0; i < oldArr.length; i++) {
        let total = 0;
        for (let j = 0; j < oldArr.length; j++) {
            if (oldArr[j] === oldArr[i]) {
                total++
                if (total > 1 && !newArr.includes(oldArr[i])) {
                newArr.push(oldArr[i])
            }
            }
        }
        
    } return newArr
}

console.log(noDupes("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."
))



// function oneWord(arr) { 
//     const single = []
//     // let count = 1
//     for (let i = 0; i < arr.length; i++) {
//         if (single.indexOf(arr[i] === -1) {
//             single.push(arr[i])
//         } 
//     } console.log(single)
// }
// oneWord(newArr)
// let unique = [... new Set(newArr)]
// let single = (newArr) => newArr.filter((i,j) => newArr.indexOf(i) === j)

// console.log(single(newArr))
// console.log(unique)

// const newerArr = []
// let newCount = (newArr) => {
    
//     for (let i = 0; i < newArr.length; i++) {
//         let count = 0
//         for (let j = 0; j < newArr.length; j++) {
//             if (newArr[i] === newArr[j]) {
//                 count += 1
//             }
//         }newerArr.push(newArr[i], count)
//     } 
// }
// newCount(newArr)
// console.log(newerArr)

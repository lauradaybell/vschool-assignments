// function countCode(arr) {
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "code") {
//             count +=1
//         }
//     } return count
// }
// console.log(countCode(["code", "code", "cool"]))

// const countCode = arr => arr.filter(str => str === "code").length

function countCode(str) {
    let count = 0
    let index = str.indexOf("c")
    for (let i = index; i < str.length; i++) {

        if (str[i+1] === "o" && str[i+3] === "e") {
            count +=1
        }
    } console.log(count)
}
const countCode = str => str.match(/co.e/gi)

// "g" means global
// "i" means case insensitive
// . means any charactor

// countCode("aaacodebbb")
// countCode("codexxcode")
//countCode("cozexxcope")

countCode('jfheicodejfidhscodefnaldcope');
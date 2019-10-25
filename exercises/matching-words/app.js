const newArr = []
function noDupes(str) {
    let oldArr = str.toLowerCase().split(" ")
    // console.log(oldArr)
    for (let i = 0; i < oldArr.length; i++) {
        for (let j = 1; j < oldArr.length; j++) {
            if (oldArr[j] === oldArr[i]) {
                newArr.push(oldArr[i])
            }
        }
        
    } return newArr
}

noDupes("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."
)
// console.log(newArr)


function oneWord(arr) { 
    const single = []
    // let count = 1
    for (let i = 0; i < arr.length; i++) {
        if (single.indexOf(arr[i] === -1) ) {
            single.push(arr[i])
        } 
    } return single
}
oneWord(newArr)


function combined(arr){
    let newArr = []
    newArr.push(arr[0], arr[1], arr[2])
    // console.log(newArr)

    for (let i = 2; i < arr.length; i++) {
        if (+(arr[i].length + arr[i-1].length + arr[i-2].length) > (newArr[0].length + newArr[1].length + newArr[2].length)) {
            newArr[0] = arr[i-2]
            newArr[1] =  arr[i-1]
            newArr[2] = arr[i]
        }
        
        // console.log(newArr)
    } return newArr
}

console.log(combined(["this", "is", "an", "array"]))
// Output:  ["is", "an", "array"]
    // they have the longest combined length of any 3 adjacent elements. (9 characters)
    // In contract, ["this", "is", "an"] only has a combined length of 8 characters

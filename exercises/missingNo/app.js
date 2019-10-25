function findMissingNo(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let 
    for (let i = min; i <= max; i++) {
    if (i > min && i < max && arr.indexOf(i) === -1) {
            console.log(i)
        }
    }
    
    }

findMissingNo([2,1,3,5])
findMissingNo([-3,0,-2,3,2,-1])